export interface SpreadPosition {
  id: string;
  label: string;
  meaning: string;
}
export interface SpreadDefinition {
  id: string;
  name: string;
  description: string;
  positions: SpreadPosition[];
}
export const spreadDefinitions: SpreadDefinition[] = [
  {
    id: 'single', name: '一张牌 · 今日指引',
    description: '让一个清晰的问题，与当下最需要的提醒相遇。',
    positions: [{ id: 'guidance', label: '当下指引', meaning: '现在最值得关注的主题，以及可以采取的一小步。' }],
  },
  {
    id: 'three', name: '三张牌 · 时间之河',
    description: '梳理过去的影响、现在的状态与沿当前方向发展的可能。',
    positions: [
      { id: 'past', label: '过去 · 来处', meaning: '已经发生的经历、形成的习惯，以及仍在影响你的根源。' },
      { id: 'present', label: '现在 · 当下', meaning: '此刻的核心状态、需要看见的事实与可以掌握的资源。' },
      { id: 'future', label: '未来 · 趋势', meaning: '如果沿当前方式继续，这件事可能呈现的趋势；它仍会随你的选择改变。' },
    ],
  },
  {
    id: 'five', name: '五张牌 · 心灵罗盘',
    description: '从处境与阻碍出发，看见支援、行动和可调整的发展方向。',
    positions: [
      { id: 'situation', label: '处境 · 核心', meaning: '这件事此刻真正的中心，以及你正处于怎样的状态。' },
      { id: 'challenge', label: '阻碍 · 阴影', meaning: '让事情受阻的习惯、担忧或现实难点；不是判定好坏，而是识别需要处理的部分。' },
      { id: 'support', label: '助力 · 资源', meaning: '可以调用的能力、外部帮助或尚未被重视的支持。' },
      { id: 'action', label: '行动 · 下一步', meaning: '一个更有建设性的应对方式，以及适合开始的具体行动。' },
      { id: 'direction', label: '趋势 · 远方', meaning: '在当前条件与行动下可能形成的方向，而非固定不变的结局。' },
    ],
  },
];
export const spreadsById: Record<string, SpreadDefinition> = Object.fromEntries(spreadDefinitions.map(spread => [spread.id, spread]));
