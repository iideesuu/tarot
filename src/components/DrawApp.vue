<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { displayCards as tarotCards, type DisplayCard } from '../data/display'
import { spreadDefinitions } from '../data/spreads'
import { drawCards, interpretReading } from '../domain/tarot'
import type { Reading, ReadingInterpretation } from '../domain/tarot'

type Topic = 'general' | 'love' | 'career'
type Mode = 'random' | 'manual'
type Orientation = 'upright' | 'reversed'

const mode = ref<Mode>('random')
const selectedSpreadId = ref('three')
const topic = ref<Topic>('general')
const question = ref('')
const includeReversed = ref(true)
const isDrawing = ref(false)
const errorMessage = ref('')
const reading = ref<Reading | null>(null)
const interpretation = ref<ReadingInterpretation | null>(null)
const history = ref<Reading[]>([])
const resultTitle = ref<HTMLElement | null>(null)

const currentSpread = computed(() => spreadDefinitions.find((spread) => spread.id === selectedSpreadId.value) ?? spreadDefinitions[0])
const manualCards = ref<Record<string, { cardId: string; orientation: Orientation }>>({})
const cardMap = computed(() => new Map(tarotCards.map((card) => [card.id, card])))

const topics: { id: Topic; label: string }[] = [
  { id: 'general', label: '综合指引' },
  { id: 'love', label: '感情关系' },
  { id: 'career', label: '工作方向' }
]

function cardFor(id: string): DisplayCard | undefined {
  return cardMap.value.get(id)
}

function setManualCard(positionId: string, cardId: string) {
  manualCards.value[positionId] = {
    cardId,
    orientation: manualCards.value[positionId]?.orientation ?? 'upright'
  }
  errorMessage.value = ''
}

function handleCardChange(positionId: string, event: Event) {
  setManualCard(positionId, (event.target as HTMLSelectElement).value)
}

function setManualOrientation(positionId: string, orientation: Orientation) {
  if (!manualCards.value[positionId]) manualCards.value[positionId] = { cardId: '', orientation }
  else manualCards.value[positionId].orientation = orientation
}

function buildReading(cards: { positionId: string; cardId: string; orientation: Orientation }[], source: 'random' | 'manual'): Reading {
  return {
    version: 1,
    deckId: 'rider-waite-inspired',
    spreadId: currentSpread.value.id,
    question: question.value.trim() || undefined,
    topic: topic.value,
    source,
    cards,
    createdAt: new Date().toISOString()
  }
}

function saveToHistory(nextReading: Reading) {
  history.value = [nextReading, ...history.value].slice(0, 8)
  try {
    localStorage.setItem('moli-tarot-history', JSON.stringify(history.value))
  } catch {
    // Reading remains usable even when browser storage is disabled or full.
  }
}

function startReading() {
  errorMessage.value = ''
  isDrawing.value = true
  const spread = currentSpread.value
  const source = mode.value
  const withReversed = includeReversed.value
  window.setTimeout(() => {
    try {
      let nextReading: Reading
      if (source === 'random') {
        const drawn = drawCards(tarotCards, spread.positions.length, withReversed)
        nextReading = buildReading(drawn.map((item, index) => ({
          positionId: currentSpread.value.positions[index].id,
          cardId: item.card.id,
          orientation: item.orientation
        })), 'random')
      } else {
        const entries = currentSpread.value.positions.map((position) => ({
          positionId: position.id,
          ...(manualCards.value[position.id] ?? { cardId: '', orientation: 'upright' as Orientation })
        }))
        if (entries.some((entry) => !entry.cardId)) throw new Error('请为每个牌位选入一张牌。')
        if (new Set(entries.map((entry) => entry.cardId)).size !== entries.length) throw new Error('同一牌阵中暂不使用重复的牌，请重新选择。')
        nextReading = buildReading(entries, 'manual')
      }
      reading.value = nextReading
      interpretation.value = interpretReading(nextReading)
      saveToHistory(nextReading)
      nextTick(() => resultTitle.value?.focus())
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '这次抽牌没有完成，请再试一次。'
    } finally {
      isDrawing.value = false
    }
  }, mode.value === 'random' ? 420 : 80)
}

function resetReading() {
  reading.value = null
  interpretation.value = null
  errorMessage.value = ''
}

function restoreHistory(item: Reading) {
  selectedSpreadId.value = item.spreadId
  topic.value = item.topic === 'growth' ? 'general' : item.topic
  question.value = item.question || ''
  reading.value = item
  interpretation.value = interpretReading(item)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function clearHistory() {
  history.value = []
  try { localStorage.removeItem('moli-tarot-history') } catch {}
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat('zh-CN', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(new Date(value))
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const queryTopic = params.get('topic') as Topic | null
  if (queryTopic && topics.some((item) => item.id === queryTopic)) topic.value = queryTopic
  const querySpread = params.get('spread')
  if (spreadDefinitions.some((item) => item.id === querySpread)) selectedSpreadId.value = querySpread!
  try {
    const saved = JSON.parse(localStorage.getItem('moli-tarot-history') || '[]')
    history.value = Array.isArray(saved) ? saved.filter((item) => {
      try {
        if (!item || !Number.isFinite(Date.parse(item.createdAt))) return false
        if (item.question !== undefined && typeof item.question !== 'string') return false
        if (!topics.some((entry) => entry.id === item.topic)) return false
        if (item.source !== 'random' && item.source !== 'manual') return false
        interpretReading(item)
        return true
      } catch { return false }
    }).slice(0, 8) : []
  } catch {
    history.value = []
  }
})
</script>

<template>
  <div class="draw-app">
    <div v-if="!reading" class="reading-setup">
      <div class="setup-topline"><span class="setup-step">01</span><span>先选一种进入方式</span></div>
      <div class="mode-switch" role="group" aria-label="占卜方式">
        <button :disabled="isDrawing" :class="{ selected: mode === 'random' }" :aria-pressed="mode === 'random'" @click="mode = 'random'">让牌替你出现 <small>随机抽牌</small></button>
        <button :disabled="isDrawing" :class="{ selected: mode === 'manual' }" :aria-pressed="mode === 'manual'" @click="mode = 'manual'">录入我抽到的牌 <small>现实牌面</small></button>
      </div>

      <div class="setup-fields">
        <label><span>你想把注意力放在哪里？</span><select v-model="topic" :disabled="isDrawing"><option v-for="item in topics" :key="item.id" :value="item.id">{{ item.label }}</option></select></label>
        <label><span>此刻的问题（可选）</span><input v-model="question" :disabled="isDrawing" maxlength="120" placeholder="例如：我现在最需要看清什么？" /></label>
      </div>

      <div class="setup-topline spread-topline"><span class="setup-step">02</span><span>选择一个牌阵</span></div>
      <div class="spread-options">
        <button v-for="spread in spreadDefinitions" :key="spread.id" :disabled="isDrawing" :aria-pressed="selectedSpreadId === spread.id" :class="['spread-option', { selected: selectedSpreadId === spread.id }]" @click="selectedSpreadId = spread.id; manualCards = {}">
          <span class="spread-count">{{ spread.positions.length }}</span><span><strong>{{ spread.name }}</strong><small>{{ spread.description }}</small></span><i>✦</i>
        </button>
      </div>

      <div v-if="mode === 'random'" class="reversed-toggle"><label class="toggle-label"><input v-model="includeReversed" :disabled="isDrawing" type="checkbox" /><span class="toggle-ui"></span><span>允许出现逆位</span></label><small>这是莫里i采用的抽牌设置，你也可以关闭它。</small></div>

      <div v-else class="manual-entry">
        <div class="manual-intro"><span class="setup-step">03</span><div><strong>把牌面放回对应的位置</strong><p>选择牌名，再记录它是正位还是逆位。牌阵中暂不使用重复的牌。</p></div></div>
        <div class="manual-rows">
          <div v-for="(position, index) in currentSpread.positions" :key="position.id" class="manual-row">
            <span class="manual-position"><b>{{ index + 1 }}</b>{{ position.label }}</span>
            <select :disabled="isDrawing" :aria-label="`${position.label}的牌`" :value="manualCards[position.id]?.cardId || ''" @change="handleCardChange(position.id, $event)"><option value="" disabled>选择一张牌</option><option v-for="card in tarotCards" :key="card.id" :value="card.id">{{ card.numberLabel }} · {{ card.name }}</option></select>
            <div class="orientation-switch" role="group" :aria-label="`${position.label}的方向`"><button :disabled="isDrawing" :aria-pressed="manualCards[position.id]?.orientation !== 'reversed'" :class="{ active: manualCards[position.id]?.orientation !== 'reversed' }" @click="setManualOrientation(position.id, 'upright')">正位</button><button :disabled="isDrawing" :aria-pressed="manualCards[position.id]?.orientation === 'reversed'" :class="{ active: manualCards[position.id]?.orientation === 'reversed' }" @click="setManualOrientation(position.id, 'reversed')">逆位</button></div>
          </div>
        </div>
      </div>

      <p v-if="errorMessage" class="form-error" role="alert">{{ errorMessage }}</p>
      <button class="button button-primary draw-button" :disabled="isDrawing" @click="startReading"><span v-if="isDrawing" class="button-spinner"></span><span v-else>✦</span>{{ isDrawing ? '牌面正在展开…' : mode === 'random' ? '开始抽牌' : '开始解读' }} <b>→</b></button>
    </div>

    <div v-else class="reading-result">
      <div class="result-header"><div><p class="eyebrow">{{ reading.source === 'manual' ? '现实牌面记录' : '你的牌面已经出现' }}</p><h2 ref="resultTitle" tabindex="-1">{{ currentSpread.name }}</h2><p v-if="reading.question" class="result-question">“{{ reading.question }}”</p></div><button class="button button-ghost" @click="resetReading">重新占卜</button></div>
      <div class="result-cards">
        <article v-for="(entry, index) in reading.cards" :key="entry.positionId" class="result-card">
          <div class="result-position"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ currentSpread.positions[index].label }}</strong><small>{{ currentSpread.positions[index].meaning }}</small></div>
          <div class="revealed-card" :class="[{ reversed: entry.orientation === 'reversed' }, cardFor(entry.cardId)?.arcana, cardFor(entry.cardId)?.suit]"><span>{{ cardFor(entry.cardId)?.symbol }}</span><small>{{ cardFor(entry.cardId)?.numberLabel }}</small><strong>{{ cardFor(entry.cardId)?.name }}</strong></div>
          <div class="result-meaning"><div class="meaning-chip">{{ interpretation?.cards?.[index]?.title || cardFor(entry.cardId)?.name }}</div><p>{{ interpretation?.cards?.[index]?.text || (entry.orientation === 'reversed' ? cardFor(entry.cardId)?.reversedMeaning : cardFor(entry.cardId)?.uprightMeaning) }}</p><p class="practical-advice"><strong>可以尝试：</strong>{{ cardFor(entry.cardId)?.meaning[entry.orientation].advice }}</p><div class="result-keywords"><span v-for="keyword in (interpretation?.cards?.[index]?.keywords || (entry.orientation === 'reversed' ? cardFor(entry.cardId)?.reversedKeywords : cardFor(entry.cardId)?.uprightKeywords) || []).slice(0, 4)" :key="keyword">{{ keyword }}</span></div></div>
        </article>
      </div>
      <div class="interpretation-grid"><article class="interpretation-panel"><p class="eyebrow">莫里i的解读</p><h3>此刻的整体气候</h3><p>{{ interpretation?.overview }}</p><div v-if="interpretation?.patterns?.length" class="pattern-list"><span v-for="pattern in interpretation.patterns" :key="pattern">✦ {{ pattern }}</span></div></article><article class="interpretation-panel reflection-panel"><p class="eyebrow">带走一个问题</p><h3>让答案继续生长</h3><ul><li v-for="prompt in (interpretation?.reflection || [])" :key="prompt">{{ prompt }}</li></ul></article></div>
      <div class="result-footer"><span>这是一份用于学习与自我反思的参考解读，选择始终在你手里。</span><button class="text-link" @click="resetReading">再抽一次 ↗</button></div>
    </div>

    <div v-if="!reading && history.length" class="history-strip"><div class="split-heading"><div><p class="eyebrow">留在这里的足迹</p><h3>最近的占卜</h3></div><button class="text-link" @click="clearHistory">清空记录</button></div><button v-for="item in history.slice(0, 4)" :key="item.createdAt" class="history-item" @click="restoreHistory(item)"><span>{{ formatDate(item.createdAt) }}</span><strong>{{ item.question || '一次开放式指引' }}</strong><small>{{ item.source === 'manual' ? '现实牌面' : '随机抽牌' }} · {{ item.cards.length }} 张牌</small><b>→</b></button></div>
  </div>
</template>
