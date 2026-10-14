import assert from 'node:assert/strict'
import { readFile, writeFile, mkdir, mkdtemp, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, dirname } from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

// Compile only the domain modules into an ephemeral directory; no host runtime is needed.
const temporary = await mkdtemp(join(tmpdir(), 'tarot-test-'))
try {
  for (const module of ['data/cards', 'data/display', 'data/spreads', 'domain/tarot']) {
    const source = await readFile(`src/${module}.ts`, 'utf8')
    const output = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 }
    }).outputText.replace(/from (['"])(\.{1,2}\/[^'"]+)\1/g, (_, quote, path) => `from ${quote}${path}.mjs${quote}`)
    const file = join(temporary, `${module}.mjs`)
    await mkdir(dirname(file), { recursive: true })
    await writeFile(file, output)
  }
  const { tarotCards } = await import(pathToFileURL(join(temporary, 'data/cards.mjs')))
  const { spreadDefinitions } = await import(pathToFileURL(join(temporary, 'data/spreads.mjs')))
  const { drawCards, interpretReading } = await import(pathToFileURL(join(temporary, 'domain/tarot.mjs')))

  assert.equal(tarotCards.length, 78)
  assert.equal(new Set(tarotCards.map(card => card.id)).size, 78)
  assert.equal(tarotCards.filter(card => card.arcana === 'major').length, 22)
  for (const suit of ['wands', 'cups', 'swords', 'pentacles']) {
    assert.equal(tarotCards.filter(card => card.suit === suit).length, 14)
  }
  for (const card of tarotCards) {
    for (const field of ['name', 'nameEn', 'numberLabel', 'symbol', 'symbolism', 'reflection']) assert.ok(card[field]?.trim(), `${card.id}.${field}`)
    for (const orientation of ['upright', 'reversed']) {
      assert.ok(card.keywords[orientation].length >= 3)
      for (const field of ['summary', 'love', 'career', 'advice']) assert.ok(card.meaning[orientation][field]?.trim(), `${card.id}.${orientation}.${field}`)
    }
  }
  const before = tarotCards.map(card => card.id).join(',')
  for (let iteration = 0; iteration < 20; iteration++) {
    const drawn = drawCards(tarotCards, 78, false)
    assert.equal(new Set(drawn.map(item => item.card.id)).size, 78)
    assert.ok(drawn.every(item => item.orientation === 'upright'))
  }
  assert.equal(tarotCards.map(card => card.id).join(','), before)
  assert.throws(() => drawCards(tarotCards, 79))
  assert.throws(() => drawCards([tarotCards[0], tarotCards[0]], 1))

  for (const spread of spreadDefinitions) {
    const reading = {
      spreadId: spread.id, topic: 'love', source: 'manual', createdAt: new Date().toISOString(),
      cards: spread.positions.map((position, index) => ({ positionId: position.id, cardId: tarotCards[index].id, orientation: index % 2 ? 'reversed' : 'upright' }))
    }
    const result = interpretReading(reading)
    assert.equal(result.cards.length, spread.positions.length)
    assert.ok(result.overview.length > 30)
    assert.ok(result.cards.every(item => item.text.includes(item.card.meaning[item.orientation].love)))
    assert.deepEqual(interpretReading({ ...reading, cards: [...reading.cards].reverse() }), result)
    assert.throws(() => interpretReading({ ...reading, cards: [] }))
    assert.throws(() => interpretReading({ ...reading, cards: reading.cards.map(item => ({ ...item, cardId: 'missing-card' })) }))
  }
  console.log('PASS: 78-card content, secure draw invariants, orientation, spread validation, theme interpretation and position ordering')
} finally {
  await rm(temporary, { recursive: true, force: true })
}
