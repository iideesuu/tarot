import { displayCards as tarotCards, displayCardsById as cardsById, type DisplayCard } from '../data/display';
import type { Orientation as CardOrientation, ReadingTopic } from '../data/cards';
import { spreadsById, type SpreadDefinition } from '../data/spreads';

export type Card = DisplayCard;
export type { CardOrientation, ReadingTopic };
export interface DrawnCard { card: Card; orientation: CardOrientation; }
export interface Reading {
  id?: string;
  version?: number;
  deckId?: string;
  spreadId: string;
  question?: string;
  topic: ReadingTopic;
  source: 'random' | 'manual';
  cards: Array<{ positionId: string; cardId: string; orientation: CardOrientation }>;
  createdAt: string;
}
export interface CardInterpretation {
  positionLabel: string;
  card: Card;
  orientation: CardOrientation;
  title: string;
  text: string;
  keywords: string[];
}
export interface ReadingInterpretation {
  overview: string;
  cards: CardInterpretation[];
  reflection: string[];
  patterns: string[];
}
/** 无偏整数采样：拒绝采样避免取模偏差，浏览器使用加密随机源。 */
function randomInteger(max: number): number {
  if (!Number.isInteger(max) || max < 1) throw new Error('随机范围必须为正整数');
  const range = 0x100000000;
  const limit = range - (range % max);
  const value = new Uint32Array(1);
  do { globalThis.crypto.getRandomValues(value); } while (value[0] >= limit);
  return value[0] % max;
}
export function drawCards(deck: Card[] = tarotCards, count = 3, includeReversed = true): DrawnCard[] {
  if (!Number.isInteger(count) || count < 1 || count > deck.length) throw new Error('抽牌数量超出牌组范围');
  if (new Set(deck.map(card => card.id)).size !== deck.length) throw new Error('牌组包含重复牌');
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = randomInteger(i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count).map(card => ({ card, orientation: includeReversed && randomInteger(2) === 1 ? 'reversed' : 'upright' }));
}
export function interpretReading(reading: Reading, topic: ReadingTopic = reading.topic ?? 'general'): ReadingInterpretation {
  const spread = spreadsById[reading.spreadId];
  if (!spread) throw new Error('请选择有效牌阵');
  if (reading.cards.length !== spread.positions.length) throw new Error('所选牌数与牌阵位置不一致');
  if (new Set(reading.cards.map(({ cardId }) => cardId)).size !== reading.cards.length) throw new Error('同一牌阵不能重复选择相同的牌');
  const positioned = spread.positions.map(position => {
    const item = reading.cards.find(entry => entry.positionId === position.id);
    if (!item) throw new Error('牌阵位置不完整或不匹配');
    return item;
  });
  const interpreted = positioned.map((item, index) => {
    if (!cardsById[item.cardId]) throw new Error('所选牌不在 78 张牌库中');
    if (item.orientation !== 'upright' && item.orientation !== 'reversed') throw new Error('牌的方向无效');
    const position = spread.positions[index];
    const card = cardsById[item.cardId];
    const meaning = card.meaning[item.orientation];
    const topicText = topic === 'love' ? meaning.love : topic === 'career' ? meaning.career : topic === 'growth' ? meaning.advice : '';
    const connector: Record<string, string> = {
      past: '作为过去的影响，这张牌提示你观察：这类经历是否已经形成习惯，并被带进了现在。',
      present: '作为当下的状态，先看见这股能量正在什么地方出现，再决定是否需要调整。',
      future: '作为未来趋势，它描述沿当前方式发展的可能；改变沟通与行动，趋势也可以改变。',
      situation: '作为核心处境，这张牌强调事情最需要被看见的部分。',
      challenge: '放在阻碍位置，重点是这种能量是否过度、不足，或被你忽略；正位也可能在提醒执着。',
      support: '放在助力位置，可以把这张牌的能力转化为支援；逆位时尤其要先恢复这项资源。',
      action: `作为行动建议：${meaning.advice}`,
      direction: '作为发展方向，它提供一条值得观察的线索；结果仍取决于后续选择与现实条件。',
      guidance: `作为当下指引：${meaning.advice}`,
    };
    return {
      positionLabel: position.label, card, orientation: item.orientation,
      title: `${card.name} · ${item.orientation === 'upright' ? '正位' : '逆位'}`,
      text: [meaning.summary, topicText, connector[position.id] ?? position.meaning].filter(Boolean).join(' '),
      keywords: card.keywords[item.orientation],
    };
  });
  const majorCount = reading.cards.filter(({ cardId }) => cardsById[cardId].arcana === 'major').length;
  const reversedCount = reading.cards.filter(({ orientation }) => orientation === 'reversed').length;
  const suitCount = { wands: 0, cups: 0, swords: 0, pentacles: 0 };
  reading.cards.forEach(({ cardId }) => { const card = cardsById[cardId]; if (card.suit) suitCount[card.suit] += 1; });
  const themes = { wands: '行动、创造与意志', cups: '情感、关系与直觉', swords: '沟通、判断与思想', pentacles: '现实资源、身体与长期成果' };
  const patterns: string[] = [];
  if (majorCount >= Math.ceil(reading.cards.length / 2)) patterns.push(`大阿尔卡纳占 ${majorCount}/${reading.cards.length}，这次更适合从长期课题与价值选择来理解，而不只看眼前的小事件。`);
  else if (majorCount === 0) patterns.push('本次均为小阿尔卡纳，关注点更靠近日常习惯、沟通与可落实的调整。');
  const dominant = Object.entries(suitCount).sort((a, b) => b[1] - a[1])[0] as [keyof typeof suitCount, number];
  if (dominant[1] >= 2) patterns.push(`${dominant[0] === 'wands' ? '权杖' : dominant[0] === 'cups' ? '圣杯' : dominant[0] === 'swords' ? '宝剑' : '星币'}出现 ${dominant[1]} 张，${themes[dominant[0]]}是值得优先观察的线索。`);
  if (reversedCount > 0) patterns.push(`有 ${reversedCount} 张逆位，可以从能量受阻、内化、过量或正在转变来理解；逆位并不直接等于坏结果。`);
  patterns.push(...combinationPatterns(reading));
  if (!patterns.length) patterns.push('不同元素同时出现，尝试把情绪、想法、行动与现实条件放在一起看。');
  const overview = createOverview(spread, interpreted, topic);
  const reflection = [...new Set(interpreted.map(item => item.card.reflection))];
  return { overview, cards: interpreted, reflection, patterns };
}
function createOverview(spread: SpreadDefinition, cards: CardInterpretation[], topic: ReadingTopic): string {
  const focus = topic === 'love' ? '关系与情感' : topic === 'career' ? '工作与现实目标' : topic === 'growth' ? '个人成长' : '当前问题';
  if (spread.id === 'single') return `围绕${focus}，${cards[0].card.name}把注意力带向「${cards[0].keywords.slice(0, 2).join('、')}」。把这张牌当作一个观察入口：先对照真实处境，再选择一个今天能完成的小动作。`;
  if (spread.id === 'three') return `围绕${focus}，这组牌从「${cards[0].keywords[0]}」的过去影响，走到「${cards[1].keywords[0]}」的当下状态，再提示「${cards[2].keywords[0]}」的发展线索。重点在于看见现在是否仍在重复过去，并让下一步回应真实需要。`;
  return `围绕${focus}，核心处境呈现「${cards[0].keywords[0]}」，需要处理的阻碍是「${cards[1].keywords[0]}」。尝试调动「${cards[2].keywords[0]}」的资源，并用「${cards[3].keywords[0]}」作为行动的观察方向；最后一张牌提示的是可调整的趋势。`;
}

/** 组合提示观察牌之间的张力，不把牌义简单相加成吉凶分数。 */
function combinationPatterns(reading: Reading): string[] {
  const ids = new Set(reading.cards.map(item => item.cardId));
  const combinations: Array<{ ids: string[]; text: string }> = [
    { ids: ['the-moon', 'the-sun'], text: '月亮与太阳同时出现，强调感受与事实之间的差别。对照它们各自的牌位，观察哪里仍有猜测，哪里已经可以清楚表达；逆位时，清晰可能仍需要时间。' },
    { ids: ['the-fool', 'the-magician'], text: '愚人与魔术师形成「愿意开始」与「调动资源」的呼应。把新方向缩小到一个可验证的尝试，再盘点手里真正可用的技能与支持。' },
    { ids: ['the-devil', 'death'], text: '恶魔与死神把依赖和告别放在一起。辨认你抓住的是现实需要还是熟悉感，再决定哪些旧方式应被结束、哪些需要被重新安排。' },
    { ids: ['the-tower', 'the-star'], text: '高塔与星星分别提醒结构变化与恢复信任。先处理变化带来的现实影响，再以小而持续的行动恢复希望；不必要求自己立刻变好。' },
    { ids: ['the-hermit', 'the-high-priestess'], text: '隐者与女祭司都强调向内倾听。安静观察可以带来洞见，但也要保留现实反馈，避免把独处变成封闭、把直觉当成未经核实的事实。' },
    { ids: ['the-lovers', 'cups-2'], text: '恋人与圣杯二都指向联结，但也强调共同选择与互相回应。重点是双方是否用行动表达一致价值，而不是仅凭吸引力推测承诺。' },
    { ids: ['the-emperor', 'the-empress'], text: '皇帝与皇后让结构与滋养相遇。清楚的责任和边界需要温柔来维持，关怀也需要实际安排才能持续；观察哪一端在当前牌位中更需要调整。' },
    { ids: ['swords-2', 'cups-7'], text: '宝剑二与圣杯七都触及选择：一边难以定夺，一边可能性太多。减少选项并补足事实，比继续预演每一种未来更有帮助。' },
    { ids: ['wands-10', 'swords-4'], text: '权杖十与宝剑四提醒责任和恢复的矛盾。把休息当成完成责任所需的资源，先减轻或分配负担，再讨论如何持续推进。' },
    { ids: ['pentacles-7', 'pentacles-8'], text: '星币七与星币八连结投入评估与持续练习。确认方向仍值得之后，用清楚反馈改善练习；耐心应伴随复盘，而不是机械重复。' },
    { ids: ['justice', 'swords-1'], text: '正义与宝剑王牌都要求事实与清楚判断。核对信息、责任和约定，再把结论说清楚；坦诚也需要照顾表达方式与实际后果。' },
    { ids: ['temperance', 'strength'], text: '节制与力量共同强调稳定、温柔和耐心。与其靠压抑或猛冲维持局面，不如找到身体、情绪与日常都能承受的节奏。' },
  ];
  return combinations.filter(item => item.ids.every(id => ids.has(id))).slice(0, 2).map(item => item.text);
}
