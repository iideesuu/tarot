<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { calculateNatalChart } from '../domain/astrology'

type ChartInput = {
  name?: string
  date: string
  time: string
  timezone: number
  latitude: number
  longitude: number
  location: string
}

type NormalizedPlanet = {
  key: string
  name: string
  glyph: string
  sign: string
  signSymbol: string
  degree: number
  minute: number
  house: number | string
  longitude: number
  retrograde: boolean
  meaning?: string
}

type NormalizedChart = {
  planets: NormalizedPlanet[]
  ascendant: { sign: string; signSymbol: string; degree: number; minute: number; longitude: number }
  midheaven: { sign: string; signSymbol: string; degree: number; minute: number; longitude: number }
  aspects: Array<{ from: string; to: string; type: string; orb: number; color: string }>
  location: string
}

const ZODIAC = [
  { name: '白羊', symbol: '♈', en: 'Aries', element: '火' },
  { name: '金牛', symbol: '♉', en: 'Taurus', element: '土' },
  { name: '双子', symbol: '♊', en: 'Gemini', element: '风' },
  { name: '巨蟹', symbol: '♋', en: 'Cancer', element: '水' },
  { name: '狮子', symbol: '♌', en: 'Leo', element: '火' },
  { name: '处女', symbol: '♍', en: 'Virgo', element: '土' },
  { name: '天秤', symbol: '♎', en: 'Libra', element: '风' },
  { name: '天蝎', symbol: '♏', en: 'Scorpio', element: '水' },
  { name: '射手', symbol: '♐', en: 'Sagittarius', element: '火' },
  { name: '摩羯', symbol: '♑', en: 'Capricorn', element: '土' },
  { name: '水瓶', symbol: '♒', en: 'Aquarius', element: '风' },
  { name: '双鱼', symbol: '♓', en: 'Pisces', element: '水' }
]

const PLANET_META: Record<string, { name: string; glyph: string; focus: string }> = {
  sun: { name: '太阳', glyph: '☉', focus: '核心意志与自我表达' },
  moon: { name: '月亮', glyph: '☽', focus: '情绪、安全感与本能' },
  mercury: { name: '水星', glyph: '☿', focus: '思考方式与沟通' },
  venus: { name: '金星', glyph: '♀', focus: '关系、审美与价值感' },
  mars: { name: '火星', glyph: '♂', focus: '行动力、欲望与边界' },
  jupiter: { name: '木星', glyph: '♃', focus: '成长、信念与机遇' },
  saturn: { name: '土星', glyph: '♄', focus: '责任、结构与长期功课' },
  uranus: { name: '天王星', glyph: '♅', focus: '自由、变化与觉醒' },
  neptune: { name: '海王星', glyph: '♆', focus: '想象、共情与理想' },
  pluto: { name: '冥王星', glyph: '♇', focus: '深层转化与力量' }
}

const PLANET_ORDER = Object.keys(PLANET_META)
const CITY_PRESETS = [
  // 中国省级行政区首府与直辖市。坐标用于本地计算，不会调用地理编码服务。
  { id: 'beijing', label: '北京·北京', latitude: 39.9042, longitude: 116.4074, timezone: 8 },
  { id: 'tianjin', label: '天津·天津', latitude: 39.3434, longitude: 117.3616, timezone: 8 },
  { id: 'hebei-shijiazhuang', label: '河北·石家庄', latitude: 38.0428, longitude: 114.5149, timezone: 8 },
  { id: 'shanxi-taiyuan', label: '山西·太原', latitude: 37.8706, longitude: 112.5489, timezone: 8 },
  { id: 'inner-mongolia-hohhot', label: '内蒙古·呼和浩特', latitude: 40.8426, longitude: 111.7492, timezone: 8 },
  { id: 'liaoning-shenyang', label: '辽宁·沈阳', latitude: 41.8057, longitude: 123.4315, timezone: 8 },
  { id: 'jilin-changchun', label: '吉林·长春', latitude: 43.8171, longitude: 125.3235, timezone: 8 },
  { id: 'heilongjiang-harbin', label: '黑龙江·哈尔滨', latitude: 45.8038, longitude: 126.5349, timezone: 8 },
  { id: 'shanghai', label: '上海·上海', latitude: 31.2304, longitude: 121.4737, timezone: 8 },
  { id: 'jiangsu-nanjing', label: '江苏·南京', latitude: 32.0603, longitude: 118.7969, timezone: 8 },
  { id: 'zhejiang-hangzhou', label: '浙江·杭州', latitude: 30.2741, longitude: 120.1551, timezone: 8 },
  { id: 'anhui-hefei', label: '安徽·合肥', latitude: 31.8206, longitude: 117.2272, timezone: 8 },
  { id: 'fujian-fuzhou', label: '福建·福州', latitude: 26.0745, longitude: 119.2965, timezone: 8 },
  { id: 'jiangxi-nanchang', label: '江西·南昌', latitude: 28.6820, longitude: 115.8579, timezone: 8 },
  { id: 'shandong-jinan', label: '山东·济南', latitude: 36.6512, longitude: 117.1201, timezone: 8 },
  { id: 'henan-zhengzhou', label: '河南·郑州', latitude: 34.7466, longitude: 113.6254, timezone: 8 },
  { id: 'hubei-wuhan', label: '湖北·武汉', latitude: 30.5928, longitude: 114.3055, timezone: 8 },
  { id: 'hunan-changsha', label: '湖南·长沙', latitude: 28.2282, longitude: 112.9388, timezone: 8 },
  { id: 'guangdong-guangzhou', label: '广东·广州', latitude: 23.1291, longitude: 113.2644, timezone: 8 },
  { id: 'guangxi-nanning', label: '广西·南宁', latitude: 22.8170, longitude: 108.3669, timezone: 8 },
  { id: 'hainan-haikou', label: '海南·海口', latitude: 20.0440, longitude: 110.1983, timezone: 8 },
  { id: 'chongqing', label: '重庆·重庆', latitude: 29.5630, longitude: 106.5516, timezone: 8 },
  { id: 'sichuan-chengdu', label: '四川·成都', latitude: 30.5728, longitude: 104.0668, timezone: 8 },
  { id: 'guizhou-guiyang', label: '贵州·贵阳', latitude: 26.6470, longitude: 106.6302, timezone: 8 },
  { id: 'yunnan-kunming', label: '云南·昆明', latitude: 25.0389, longitude: 102.7183, timezone: 8 },
  { id: 'tibet-lhasa', label: '西藏·拉萨', latitude: 29.6500, longitude: 91.1000, timezone: 8 },
  { id: 'shaanxi-xian', label: '陕西·西安', latitude: 34.3416, longitude: 108.9398, timezone: 8 },
  { id: 'gansu-lanzhou', label: '甘肃·兰州', latitude: 36.0611, longitude: 103.8343, timezone: 8 },
  { id: 'qinghai-xining', label: '青海·西宁', latitude: 36.6171, longitude: 101.7782, timezone: 8 },
  { id: 'ningxia-yinchuan', label: '宁夏·银川', latitude: 38.4872, longitude: 106.2309, timezone: 8 },
  { id: 'xinjiang-urumqi', label: '新疆·乌鲁木齐', latitude: 43.8256, longitude: 87.6168, timezone: 8 },
  { id: 'taiwan-taipei', label: '台湾·台北', latitude: 25.0330, longitude: 121.5654, timezone: 8 },
  { id: 'hong-kong', label: '香港·香港', latitude: 22.3193, longitude: 114.1694, timezone: 8 },
  { id: 'macao', label: '澳门·澳门', latitude: 22.1987, longitude: 113.5439, timezone: 8 },
  { id: 'guangdong-shenzhen', label: '广东·深圳', latitude: 22.5431, longitude: 114.0579, timezone: 8 },
  { id: 'jiangsu-suzhou', label: '江苏·苏州', latitude: 31.2990, longitude: 120.5853, timezone: 8 },
  { id: 'shandong-qingdao', label: '山东·青岛', latitude: 36.0671, longitude: 120.3826, timezone: 8 },
  { id: 'zhejiang-ningbo', label: '浙江·宁波', latitude: 29.8683, longitude: 121.5440, timezone: 8 },
  { id: 'liaoning-dalian', label: '辽宁·大连', latitude: 38.9140, longitude: 121.6147, timezone: 8 },
  { id: 'fujian-xiamen', label: '福建·厦门', latitude: 24.4798, longitude: 118.0894, timezone: 8 },
  { id: 'guangdong-dongguan', label: '广东·东莞', latitude: 23.0207, longitude: 113.7518, timezone: 8 },
  { id: 'hainan-sanya', label: '海南·三亚', latitude: 18.2528, longitude: 109.5119, timezone: 8 },
  { id: 'tokyo', label: '日本·东京', latitude: 35.68, longitude: 139.69, timezone: 9 },
  { id: 'new-york', label: '美国·纽约', latitude: 40.71, longitude: -74.01, timezone: -5 }
]
const chinaCapitalIds = new Set([
  'beijing', 'tianjin', 'hebei-shijiazhuang', 'shanxi-taiyuan', 'inner-mongolia-hohhot', 'liaoning-shenyang', 'jilin-changchun', 'heilongjiang-harbin',
  'shanghai', 'jiangsu-nanjing', 'zhejiang-hangzhou', 'anhui-hefei', 'fujian-fuzhou', 'jiangxi-nanchang', 'shandong-jinan', 'henan-zhengzhou',
  'hubei-wuhan', 'hunan-changsha', 'guangdong-guangzhou', 'guangxi-nanning', 'hainan-haikou', 'chongqing', 'sichuan-chengdu', 'guizhou-guiyang',
  'yunnan-kunming', 'tibet-lhasa', 'shaanxi-xian', 'gansu-lanzhou', 'qinghai-xining', 'ningxia-yinchuan', 'xinjiang-urumqi'
])
const specialRegionIds = new Set(['taiwan-taipei', 'hong-kong', 'macao'])
const chinaCityPresets = CITY_PRESETS.filter((city) => chinaCapitalIds.has(city.id))
const otherChinaCityPresets = CITY_PRESETS.filter((city) => city.timezone === 8 && !chinaCapitalIds.has(city.id))
const specialRegionPresets = CITY_PRESETS.filter((city) => specialRegionIds.has(city.id))
const otherCityPresets = CITY_PRESETS.filter((city) => city.timezone !== 8)
const quickCityIds = ['beijing', 'shanghai', 'guangdong-guangzhou', 'guangdong-shenzhen', 'sichuan-chengdu', 'zhejiang-hangzhou', 'shandong-qingdao', 'hubei-wuhan', 'shaanxi-xian', 'chongqing']
const quickCityPresets = quickCityIds
  .map((id) => CITY_PRESETS.find((city) => city.id === id))
  .filter((city): city is (typeof CITY_PRESETS)[number] => Boolean(city))
const SIGN_ALIASES: Record<string, string> = {
  Aries: '白羊', Taurus: '金牛', Gemini: '双子', Cancer: '巨蟹', Leo: '狮子', Virgo: '处女',
  Libra: '天秤', Scorpio: '天蝎', Sagittarius: '射手', Capricorn: '摩羯', Aquarius: '水瓶', Pisces: '双鱼',
  白羊座: '白羊', 金牛座: '金牛', 双子座: '双子', 巨蟹座: '巨蟹', 狮子座: '狮子', 处女座: '处女',
  天秤座: '天秤', 天蝎座: '天蝎', 射手座: '射手', 摩羯座: '摩羯', 水瓶座: '水瓶', 双鱼座: '双鱼'
}

const form = ref<ChartInput>({
  name: '', date: '2000-01-01', time: '00:00', timezone: 8,
  latitude: 39.9042, longitude: 116.4074, location: '北京·北京'
})
const selectedCityId = ref('beijing')
const selectedCity = computed(() => CITY_PRESETS.find((city) => city.id === selectedCityId.value))
const chart = ref<NormalizedChart | null>(null)
const errorMessage = ref('')
const isCalculating = ref(false)
const resultTitle = ref<HTMLElement | null>(null)

function numberValue(value: unknown, fallback = 0) {
  const number = Number(value)
  return Number.isFinite(number) ? number : fallback
}

function canonicalKey(value: unknown) {
  const text = String(value || '').toLowerCase().replace(/[\s_-]/g, '')
  const map: Record<string, string> = {
    sun: 'sun', 太阳: 'sun', moon: 'moon', 月亮: 'moon', mercury: 'mercury', 水星: 'mercury',
    venus: 'venus', 金星: 'venus', mars: 'mars', 火星: 'mars', jupiter: 'jupiter', 木星: 'jupiter',
    saturn: 'saturn', 土星: 'saturn', uranus: 'uranus', 天王星: 'uranus', neptune: 'neptune', 海王星: 'neptune',
    pluto: 'pluto', 冥王星: 'pluto'
  }
  return map[text] || text
}

function signData(value: unknown, longitude: number) {
  const objectValue = value && typeof value === 'object' ? value as { name?: unknown; nameEn?: unknown; id?: unknown } : undefined
  const candidates = [
    typeof value === 'string' ? value : '',
    String(objectValue?.name || ''),
    String(objectValue?.nameEn || ''),
    String(objectValue?.id || '')
  ].filter(Boolean)
  const matched = candidates.map((candidate) => {
    const alias = SIGN_ALIASES[candidate]
    return alias || ZODIAC.find((sign) => sign.name === candidate || sign.en.toLowerCase() === candidate.toLowerCase() || sign.name.startsWith(candidate))?.name
  }).find(Boolean)
  const fallback = ZODIAC[Math.floor(((longitude % 360) + 360) % 360 / 30)].name
  return ZODIAC.find((sign) => sign.name === (matched || fallback)) || ZODIAC[0]
}

function angleData(value: any) {
  const longitude = numberValue(value?.longitude ?? value?.lon ?? value?.absoluteLongitude ?? value?.degreeAbsolute)
  const sign = signData(value?.signName ?? value?.sign ?? value?.zodiac, longitude)
  const inSign = ((longitude % 30) + 30) % 30
  return { sign: sign.name, signSymbol: sign.symbol, degree: Math.floor(numberValue(value?.degree, inSign)), minute: Math.round(numberValue(value?.minute, (inSign % 1) * 60)), longitude }
}

function normalizeChart(raw: any): NormalizedChart {
  const source = Array.isArray(raw?.planets) ? raw.planets : Array.isArray(raw?.placements) ? raw.placements : Object.entries(raw?.planets || {}).map(([key, value]) => ({ ...(value as object), key }))
  const planets = source.map((item: any) => {
    const key = canonicalKey(item.key ?? item.id ?? item.planet ?? item.nameEn ?? item.name)
    const meta = PLANET_META[key] || { name: String(item.name || key), glyph: item.glyph || '✦', focus: '星盘中的个人主题' }
    const angle = angleData(item)
    return { key, name: item.name || meta.name, glyph: item.glyph || item.symbol || meta.glyph, ...angle, house: item.house ?? item.houseNumber ?? '—', retrograde: Boolean(item.retrograde ?? item.isRetrograde), meaning: item.meaning || item.interpretation }
  }).filter((item: NormalizedPlanet) => PLANET_ORDER.includes(item.key))

  const byKey = new Map(planets.map((item) => [item.key, item]))
  const complete = PLANET_ORDER.map((key) => byKey.get(key) || ({ key, ...PLANET_META[key], sign: '—', signSymbol: '·', degree: 0, minute: 0, house: '—', longitude: 0, retrograde: false } as NormalizedPlanet))
  const asc = angleData(raw?.ascendant ?? raw?.angles?.ascendant ?? raw?.asc)
  const mc = angleData(raw?.midheaven ?? raw?.angles?.midheaven ?? raw?.mc)
  const aspects = (raw?.aspects || []).map((item: any) => ({
    from: canonicalKey(item.from ?? item.planet1 ?? item.planetA ?? item.a), to: canonicalKey(item.to ?? item.planet2 ?? item.planetB ?? item.b),
    type: item.typeName || item.type || item.aspect || '相位', orb: numberValue(item.orb), color: item.color || (item.tone === 'challenging' ? '#c47b82' : item.tone === 'harmonious' ? '#76a88b' : '#8f78ac')
  }))
  return { planets: complete, ascendant: asc, midheaven: mc, aspects, location: raw?.location || form.value.location }
}

function calculate() {
  errorMessage.value = ''
  if (!form.value.date || !form.value.time) { errorMessage.value = '请填写出生日期和出生时间。'; return }
  if (!Number.isFinite(form.value.latitude) || form.value.latitude < -90 || form.value.latitude > 90 || !Number.isFinite(form.value.longitude) || form.value.longitude < -180 || form.value.longitude > 180) {
    errorMessage.value = '所选出生城市的坐标无效，请重新选择城市。'; return
  }
  isCalculating.value = true
  window.setTimeout(() => {
    try {
      chart.value = normalizeChart(calculateNatalChart({ ...form.value }))
      nextTick(() => resultTitle.value?.focus())
    } catch (error) {
      errorMessage.value = error instanceof Error ? error.message : '星盘计算没有完成，请检查输入。'
    } finally { isCalculating.value = false }
  }, 160)
}

function applyCityPreset() {
  const preset = selectedCity.value
  if (!preset) return
  form.value.location = preset.label
  form.value.latitude = preset.latitude
  form.value.longitude = preset.longitude
  form.value.timezone = preset.timezone
}

function chooseCity(id: string) {
  selectedCityId.value = id
  applyCityPreset()
}

function reset() { chart.value = null; errorMessage.value = '' }

function polar(radius: number, angle: number) {
  const radians = (angle - 90) * Math.PI / 180
  return { x: 260 + radius * Math.cos(radians), y: 260 + radius * Math.sin(radians) }
}

function zodiacPath(index: number) {
  const ascendant = chart.value?.ascendant.longitude || 0
  const start = index * 30 - ascendant - 15
  const end = start + 30
  const a = polar(226, start); const b = polar(226, end); const c = polar(176, end); const d = polar(176, start)
  return `M ${a.x} ${a.y} A 226 226 0 0 1 ${b.x} ${b.y} L ${c.x} ${c.y} A 176 176 0 0 0 ${d.x} ${d.y} Z`
}

function planetPoint(planet: NormalizedPlanet, index: number) {
  const angle = (planet.longitude || (index * 36)) - (chart.value?.ascendant.longitude || 0)
  return polar(145 + (index % 2) * 18, angle)
}

function aspectPoint(key: string) {
  const item = chart.value?.planets.find((planet) => planet.key === key)
  return item ? planetPoint(item, PLANET_ORDER.indexOf(item.key)) : polar(100, 0)
}

function signLabel(sign: string) { return sign || '—' }
function formatPosition(item: NormalizedPlanet) { return `${signLabel(item.sign)} ${String(item.degree).padStart(2, '0')}°${String(item.minute).padStart(2, '0')}′` }
function interpretation(item: NormalizedPlanet) {
  const meta = PLANET_META[item.key] || { focus: '个人主题' }
  const sign = ZODIAC.find((entry) => entry.name === item.sign)
  const focus = item.meaning || meta.focus
  if (!sign) return `${focus}仍等待更精确的出生资料。`
  const style = sign.element === '火' ? '直接而有行动力' : sign.element === '土' ? '务实而稳定' : sign.element === '风' ? '灵活而重视交流' : '敏感而重视感受'
  const house = typeof item.house === 'number' ? `第${item.house}宫` : '宫位待定'
  return `${focus}落在${sign.name}${house}，带有${sign.element}象气质：你会以更${style}的方式处理这部分生命经验。`
}

const majorAspects = computed(() => (chart.value?.aspects || []).slice(0, 8))
const chartTitle = computed(() => form.value.name ? `${form.value.name}的本命星盘` : '你的本命星盘')
const elementInsight = computed(() => {
  if (!chart.value) return ''
  const counts = chart.value.planets.reduce<Record<string, number>>((result, planet) => {
    const sign = ZODIAC.find((entry) => entry.name === planet.sign)
    if (sign) result[sign.element] = (result[sign.element] || 0) + 1
    return result
  }, {})
  const [dominant, count] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0] || ['', 0]
  const elementText: Record<string, string> = { 火: '行动、热情与创造', 土: '现实、耐心与落地', 风: '思考、交流与连接', 水: '感受、直觉与共情' }
  return dominant ? `你的十颗星体中有 ${count} 颗落在${dominant}象，${elementText[dominant]}是这张星盘反复强调的资源。` : ''
})
const firstAspectInsight = computed(() => {
  const aspect = majorAspects.value[0]
  if (!aspect) return '暂未形成适合在此处重点展示的主要相位，先从三大核心位置开始观察。'
  const a = PLANET_META[aspect.from]?.name || aspect.from
  const b = PLANET_META[aspect.to]?.name || aspect.to
  const tone = aspect.type === '刑相' || aspect.type === '对冲' ? '张力会促使你调整方式' : aspect.type === '合相' ? '两种主题会被你集中地体验' : '两种主题容易互相支持'
  return `${a}与${b}形成${aspect.type}（容许度 ${aspect.orb.toFixed(1)}°），${tone}。`
})
</script>

<template>
  <div class="astro-app">
    <div v-if="!chart" class="astro-setup">
      <div class="astro-setup-heading"><p class="eyebrow">输入出生资料</p><h2>让天空回到你出生的那一刻</h2><p>出生时间越准确，上升星座与宫位越可靠。资料只在当前浏览器中计算，不会上传。</p></div>
      <div class="astro-form-grid">
        <label class="astro-field"><span>称呼（可选）</span><input v-model="form.name" maxlength="30" placeholder="例如：小满" /></label>
        <label class="astro-field"><span>出生日期</span><input v-model="form.date" type="date" /></label>
        <label class="astro-field"><span>出生时间</span><input v-model="form.time" type="time" /></label>
        <label class="astro-field astro-field-wide astro-city-field"><span>出生城市</span><select v-model="selectedCityId" aria-label="出生城市" @change="applyCityPreset"><option value="" disabled>请选择出生城市…</option><optgroup label="中国省会及直辖市"><option v-for="city in chinaCityPresets" :key="city.id" :value="city.id">{{ city.label }}</option></optgroup><optgroup label="中国其他常用城市"><option v-for="city in otherChinaCityPresets" :key="city.id" :value="city.id">{{ city.label }}</option></optgroup><optgroup label="港澳台城市"><option v-for="city in specialRegionPresets" :key="city.id" :value="city.id">{{ city.label }}</option></optgroup><optgroup label="境外城市"><option v-for="city in otherCityPresets" :key="city.id" :value="city.id">{{ city.label }}</option></optgroup></select><div class="astro-city-readout" aria-live="polite"><span class="astro-city-marker" aria-hidden="true">⌖</span><div><strong>{{ selectedCity?.label || form.location }}</strong><small>自动匹配 {{ selectedCity ? `${selectedCity.latitude.toFixed(2)}°${selectedCity.latitude >= 0 ? 'N' : 'S'} · ${selectedCity.longitude.toFixed(2)}°${selectedCity.longitude >= 0 ? 'E' : 'W'} · UTC${selectedCity.timezone >= 0 ? '+' : ''}${String(selectedCity.timezone).padStart(2, '0')}` : '城市坐标与时区' }}</small></div></div><small class="astro-field-hint">城市会同时带入经纬度和时区，不需要手动填写。</small></label>
        <div class="astro-field astro-field-wide astro-quick-field"><span>快速选择城市</span><div class="astro-quick-cities" role="group" aria-label="快速选择常用城市"><button v-for="city in quickCityPresets" :key="city.id" type="button" class="astro-city-chip" :class="{ active: city.id === selectedCityId }" :aria-pressed="city.id === selectedCityId" @click="chooseCity(city.id)">{{ city.label.split('·')[1] }}</button></div><small class="astro-field-hint">常用城市一键带入；更多省会和境外城市可在上方列表选择。</small></div>
        <div class="astro-field"><span>时区</span><div class="astro-city-readout"><strong>UTC{{ form.timezone >= 0 ? '+' : '' }}{{ String(form.timezone).padStart(2, '0') }}:00</strong><small>随出生城市自动匹配</small></div></div>
      </div>
      <p v-if="errorMessage" class="astro-error" role="alert">{{ errorMessage }}</p>
      <button class="button button-primary astro-submit" :disabled="isCalculating" @click="calculate"><span v-if="isCalculating" class="astro-spinner"></span><span v-else>✦</span>{{ isCalculating ? '正在排列星体…' : '生成我的星盘' }} <b>→</b></button>
      <p class="astro-form-note">包含太阳、月亮、上升，以及水星至冥王星的完整位置与主要相位。</p>
    </div>

    <div v-else class="astro-result">
      <div class="astro-result-header"><div><p class="eyebrow">星体已经就位</p><h2 ref="resultTitle" tabindex="-1">{{ chartTitle }}</h2><p>{{ form.date }} · {{ form.time }} · {{ form.location }}</p></div><button class="button button-ghost" @click="reset">重新输入</button></div>
      <div class="astro-main-grid">
        <section class="astro-wheel-panel" aria-label="本命星盘图"><div class="astro-wheel-wrap"><svg class="astro-wheel" viewBox="0 0 520 520" role="img" :aria-label="`${chartTitle}星盘图`">
          <defs><radialGradient id="astroWheelBg"><stop offset="0" stop-color="#29214b" /><stop offset="1" stop-color="#0c1024" /></radialGradient></defs>
          <circle cx="260" cy="260" r="246" fill="url(#astroWheelBg)" stroke="#a57827" stroke-opacity=".55" />
          <path v-for="(sign, index) in ZODIAC" :key="sign.name" :d="zodiacPath(index)" :fill="index % 2 ? 'rgba(184,169,229,.09)' : 'rgba(230,189,99,.07)'" stroke="rgba(230,189,99,.28)" />
          <circle cx="260" cy="260" r="176" fill="none" stroke="rgba(233,231,245,.24)" /><circle cx="260" cy="260" r="105" fill="none" stroke="rgba(233,231,245,.14)" />
          <line v-for="index in 12" :key="`house-${index}`" x1="260" y1="260" :x2="polar(176, (index - 1) * 30 - (chart.ascendant.longitude || 0)).x" :y2="polar(176, (index - 1) * 30 - (chart.ascendant.longitude || 0)).y" stroke="rgba(233,231,245,.21)" />
          <line v-for="aspect in majorAspects" :key="`${aspect.from}-${aspect.to}`" :x1="aspectPoint(aspect.from).x" :y1="aspectPoint(aspect.from).y" :x2="aspectPoint(aspect.to).x" :y2="aspectPoint(aspect.to).y" :stroke="aspect.color" stroke-opacity=".62" stroke-width="1.15" />
          <text v-for="(sign, index) in ZODIAC" :key="`label-${sign.name}`" :x="polar(210, index * 30 + 15 - (chart.ascendant.longitude || 0)).x" :y="polar(210, index * 30 + 15 - (chart.ascendant.longitude || 0)).y" text-anchor="middle" dominant-baseline="middle" class="astro-zodiac-symbol">{{ sign.symbol }}</text>
          <g v-for="(planet, index) in chart.planets" :key="planet.key"><line x1="260" y1="260" :x2="planetPoint(planet, index).x" :y2="planetPoint(planet, index).y" stroke="rgba(230,189,99,.22)" /><circle :cx="planetPoint(planet, index).x" :cy="planetPoint(planet, index).y" r="14" fill="#171d3d" stroke="#e6bd63" stroke-opacity=".7" /><text :x="planetPoint(planet, index).x" :y="planetPoint(planet, index).y + 1" text-anchor="middle" dominant-baseline="middle" class="astro-planet-glyph">{{ planet.glyph }}</text></g>
          <text x="260" y="252" text-anchor="middle" class="astro-axis-label">ASC</text><text x="260" y="273" text-anchor="middle" class="astro-axis-value">{{ chart.ascendant.sign }} {{ chart.ascendant.degree }}°</text>
        </svg></div><p class="astro-wheel-caption">热带黄道 · 十二宫位示意 · 相位线仅展示主要相位</p></section>
        <section class="astro-summary"><div class="astro-big-three"><article><span>☉</span><small>太阳</small><strong>{{ chart.planets[0]?.sign }}</strong><em>{{ chart.planets[0]?.degree }}°</em></article><article><span>☽</span><small>月亮</small><strong>{{ chart.planets[1]?.sign }}</strong><em>{{ chart.planets[1]?.degree }}°</em></article><article><span>ASC</span><small>上升</small><strong>{{ chart.ascendant.sign }}</strong><em>{{ chart.ascendant.degree }}°</em></article></div><div class="astro-axis-card"><p class="eyebrow">四轴</p><div><span>上升 ASC</span><strong>{{ chart.ascendant.sign }} {{ chart.ascendant.degree }}°{{ chart.ascendant.minute }}′</strong></div><div><span>天顶 MC</span><strong>{{ chart.midheaven.sign }} {{ chart.midheaven.degree }}°{{ chart.midheaven.minute }}′</strong></div></div><div v-if="majorAspects.length" class="astro-aspects"><p class="eyebrow">主要相位</p><div v-for="aspect in majorAspects" :key="`${aspect.from}-${aspect.to}`"><span>{{ PLANET_META[aspect.from]?.glyph || '✦' }} {{ PLANET_META[aspect.from]?.name || aspect.from }} {{ aspect.type }} {{ PLANET_META[aspect.to]?.name || aspect.to }}</span><small>{{ aspect.orb.toFixed(1) }}°</small></div></div></section>
      </div>
      <section class="astro-placements"><div class="astro-section-heading"><div><p class="eyebrow">你的星体地图</p><h3>十颗星体落在哪里</h3></div><span>位置 · 宫位 · 主题</span></div><div class="astro-placement-grid"><article v-for="planet in chart.planets" :key="planet.key" class="astro-placement"><div class="astro-placement-icon">{{ planet.glyph }}</div><div><strong>{{ planet.name }}</strong><small>{{ formatPosition(planet) }} · {{ planet.house }}宫</small><p>{{ interpretation(planet) }}</p></div><i v-if="planet.retrograde">℞</i></article></div></section>
      <section class="astro-reading"><article><p class="eyebrow">莫里i的解读</p><h3>你的星盘，像一封写给自己的信</h3><p>星盘不是固定的命运表，而是你与世界互动时反复出现的倾向。先从太阳、月亮、上升这三个入口开始：它们分别指向你想成为谁、如何感受，以及别人最先看见的你。</p><div class="astro-reading-points"><span>✦ {{ chart.planets[0]?.sign }}太阳：把意志放在你愿意持续的地方</span><span>✦ {{ chart.planets[1]?.sign }}月亮：给情绪一个可以安放的容器</span><span>✦ {{ chart.ascendant.sign }}上升：用适合你的节奏走进关系</span><span v-if="elementInsight">✦ {{ elementInsight }}</span><span>✦ {{ firstAspectInsight }}</span></div></article><article class="astro-reading-note"><p class="eyebrow">如何阅读</p><h3>从三个问题开始</h3><ul><li>什么事情会让我恢复能量？</li><li>我正在把哪一种需要藏起来？</li><li>我想用什么方式被世界记住？</li></ul></article></section>
      <p class="astro-disclaimer">星盘计算与解读用于自我观察和学习参考。出生时间或地点存在误差时，上升与宫位可能变化。</p>
    </div>
  </div>
</template>

