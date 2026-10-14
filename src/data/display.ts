/**
 * 页面使用的展示数据入口。
 * 牌库本身已经包含页面所需的中文名、符号、正逆位牌义和反思问题；
 * 保留单独入口是为了让内容层和解读引擎之间有清晰的边界。
 */
export { tarotCards as displayCards, cardsById as displayCardsById } from './cards'
export type { Card as DisplayCard } from './cards'
