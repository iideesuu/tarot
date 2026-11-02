/**
 * 本地星盘计算：没有网络、星历文件或第三方依赖。
 * 采用 Jean Meeus/Paul Schlyter 的低精度轨道公式，适合网页上的星座、宫位和
 * 相位阅读（行星经度通常误差在几度以内；冥王星为长期平均轨道）。
 */

export interface BirthData {
  date: string // YYYY-MM-DD
  time: string // HH:mm
  latitude: number // north +, south -
  longitude: number // east +, west -
  timezone: number // UTC offset, e.g. 8 or -5
  location?: string // display-only city or place label
}

export interface ZodiacSign {
  id: string
  name: string
  nameEn: string
  symbol: string
  element: '火' | '土' | '风' | '水'
  quality: '本位' | '固定' | '变动'
}

export interface PlanetPosition {
  id: string
  name: string
  nameEn: string
  symbol: string
  longitude: number
  sign: ZodiacSign
  degree: number
  minute: number
  formatted: string
  house: number
  retrograde: boolean
  description: string
}

export interface ChartAspect {
  planetA: string
  planetB: string
  type: '合相' | '六合' | '刑相' | '拱相' | '对冲'
  angle: number
  orb: number
  tone: 'harmonious' | 'challenging' | 'neutral'
}

export interface NatalChart {
  birth: BirthData
  julianDay: number
  planets: PlanetPosition[]
  ascendant: PlanetPosition
  midheaven: PlanetPosition
  houses: number[]
  aspects: ChartAspect[]
}

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { id: 'aries', name: '白羊座', nameEn: 'Aries', symbol: '♈', element: '火', quality: '本位' },
  { id: 'taurus', name: '金牛座', nameEn: 'Taurus', symbol: '♉', element: '土', quality: '固定' },
  { id: 'gemini', name: '双子座', nameEn: 'Gemini', symbol: '♊', element: '风', quality: '变动' },
  { id: 'cancer', name: '巨蟹座', nameEn: 'Cancer', symbol: '♋', element: '水', quality: '本位' },
  { id: 'leo', name: '狮子座', nameEn: 'Leo', symbol: '♌', element: '火', quality: '固定' },
  { id: 'virgo', name: '处女座', nameEn: 'Virgo', symbol: '♍', element: '土', quality: '变动' },
  { id: 'libra', name: '天秤座', nameEn: 'Libra', symbol: '♎', element: '风', quality: '本位' },
  { id: 'scorpio', name: '天蝎座', nameEn: 'Scorpio', symbol: '♏', element: '水', quality: '固定' },
  { id: 'sagittarius', name: '射手座', nameEn: 'Sagittarius', symbol: '♐', element: '火', quality: '变动' },
  { id: 'capricorn', name: '摩羯座', nameEn: 'Capricorn', symbol: '♑', element: '土', quality: '本位' },
  { id: 'aquarius', name: '水瓶座', nameEn: 'Aquarius', symbol: '♒', element: '风', quality: '固定' },
  { id: 'pisces', name: '双鱼座', nameEn: 'Pisces', symbol: '♓', element: '水', quality: '变动' },
]

const PLANET_META: Record<string, { name: string; nameEn: string; symbol: string; description: string }> = {
  sun: { name: '太阳', nameEn: 'Sun', symbol: '☉', description: '自我核心、生命力与表达方式' },
  moon: { name: '月亮', nameEn: 'Moon', symbol: '☽', description: '情绪需求、安全感与本能反应' },
  mercury: { name: '水星', nameEn: 'Mercury', symbol: '☿', description: '思考、学习与沟通方式' },
  venus: { name: '金星', nameEn: 'Venus', symbol: '♀', description: '关系、审美与价值感' },
  mars: { name: '火星', nameEn: 'Mars', symbol: '♂', description: '行动、欲望与边界' },
  jupiter: { name: '木星', nameEn: 'Jupiter', symbol: '♃', description: '成长、信念与扩张' },
  saturn: { name: '土星', nameEn: 'Saturn', symbol: '♄', description: '责任、结构与长期功课' },
  uranus: { name: '天王星', nameEn: 'Uranus', symbol: '♅', description: '革新、自由与突变' },
  neptune: { name: '海王星', nameEn: 'Neptune', symbol: '♆', description: '想象、共情与理想' },
  pluto: { name: '冥王星', nameEn: 'Pluto', symbol: '♇', description: '深层转化、权力与重生' },
}

const ORBITAL: Record<string, [number, number, number, number, number, number, number, number, number, number, number, number]> = {
  // N, i, w, a, e, M and their daily rates (degrees / AU). The perihelion
  // and eccentricity rates are needed for reasonable inner-planet positions.
  mercury: [48.3313, 3.24587e-5, 7.0047, 5.00e-8, 29.1241, 1.01444e-5, .387098, 0, .205635, 5.59e-10, 168.6562, 4.0923344368],
  venus: [76.6799, 2.46590e-5, 3.3946, 2.75e-8, 54.8910, 1.38374e-5, .723330, 0, .006773, -1.302e-9, 48.0052, 1.6021302244],
  mars: [49.5574, 2.11081e-5, 1.8497, -1.78e-8, 286.5016, 2.92961e-5, 1.523688, 0, .093405, 2.516e-9, 18.6021, .5240207766],
  jupiter: [100.4542, 2.76854e-5, 1.3030, -1.557e-7, 273.8777, 1.64505e-5, 5.20256, 0, .048498, 4.469e-9, 19.8950, .0830853001],
  saturn: [113.6634, 2.38980e-5, 2.4886, -1.081e-7, 339.3939, 2.97661e-5, 9.55475, 0, .055546, -9.499e-9, 316.9670, .0334442282],
  uranus: [74.0005, 1.3978e-5, .7733, 1.9e-8, 96.6612, 3.0565e-5, 19.18171, -1.55e-8, .047318, 7.45e-9, 142.5905, .011725806],
  neptune: [131.7806, 3.0173e-5, 1.7700, -2.55e-7, 272.8461, -6.027e-6, 30.05826, 3.313e-8, .008606, 2.15e-9, 260.2471, .005995147],
}

const RAD = Math.PI / 180
const DEG = 180 / Math.PI
const normalize = (n: number) => ((n % 360) + 360) % 360
const sinD = (n: number) => Math.sin(n * RAD)
const cosD = (n: number) => Math.cos(n * RAD)

function solveKepler(meanAnomaly: number, eccentricity: number): number {
  let E = meanAnomaly * RAD
  for (let i = 0; i < 8; i += 1) E -= (E - eccentricity * Math.sin(E) - meanAnomaly * RAD) / (1 - eccentricity * Math.cos(E))
  return E
}

/** Heliocentric ecliptic rectangular coordinates from the Schlyter orbital elements. */
function orbitPosition(key: string, days: number): [number, number, number] {
  let [N, nN, i, ni, w, nw, a, na, e, ne, M, nM] = ORBITAL[key]
  N += nN * days; i += ni * days; w += nw * days; a += na * days; e += ne * days; M += nM * days
  // Slow changes not listed in the compact table have negligible impact at UI precision.
  const E = solveKepler(normalize(M), e)
  const xv = a * (Math.cos(E) - e)
  const yv = a * Math.sqrt(1 - e * e) * Math.sin(E)
  const v = Math.atan2(yv, xv) * DEG
  const r = Math.sqrt(xv * xv + yv * yv)
  const vw = (v + w) * RAD
  const inc = i * RAD
  return [
    r * (cosD(N) * Math.cos(vw) - sinD(N) * Math.sin(vw) * Math.cos(inc)),
    r * (sinD(N) * Math.cos(vw) + cosD(N) * Math.sin(vw) * Math.cos(inc)),
    r * Math.sin(vw) * Math.sin(inc),
  ]
}

function earthPosition(days: number): [number, number, number] {
  const w = 282.9404 + 4.70935e-5 * days
  const e = .016709 - 1.151e-9 * days
  const M = normalize(356.0470 + .9856002585 * days)
  const E = solveKepler(M, e)
  const xv = Math.cos(E) - e
  const yv = Math.sqrt(1 - e * e) * Math.sin(E)
  const v = Math.atan2(yv, xv) * DEG
  const r = Math.sqrt(xv * xv + yv * yv)
  // The compact solar elements describe the apparent Sun vector. Negate it
  // here to obtain the Earth's heliocentric position used by planet vectors.
  return [-r * cosD(v + w), -r * sinD(v + w), 0]
}

function sunLongitude(T: number): number {
  const L0 = normalize(280.46646 + 36000.76983 * T + .0003032 * T * T)
  const M = normalize(357.52911 + 35999.05029 * T - .0001537 * T * T)
  const C = (1.914602 - .004817 * T - .000014 * T * T) * sinD(M)
    + (.019993 - .000101 * T) * sinD(2 * M) + .000289 * sinD(3 * M)
  const omega = 125.04 - 1934.136 * T
  return normalize(L0 + C - .00569 - .00478 * sinD(omega))
}

function moonLongitude(days: number): number {
  // Low precision geocentric lunar orbit, adequate for sign/house display.
  const N = 125.1228 - .0529538083 * days
  const i = 5.1454
  const w = 318.0634 + .1643573223 * days
  const a = 60.2666
  const e = .0549
  const M = normalize(115.3654 + 13.0649929509 * days)
  const E = solveKepler(M, e)
  const xv = a * (Math.cos(E) - e)
  const yv = a * Math.sqrt(1 - e * e) * Math.sin(E)
  const v = Math.atan2(yv, xv) * DEG
  const r = Math.sqrt(xv * xv + yv * yv)
  const vw = (v + w) * RAD
  const x = r * (cosD(N) * Math.cos(vw) - sinD(N) * Math.sin(vw) * cosD(i))
  const y = r * (sinD(N) * Math.cos(vw) + cosD(N) * Math.sin(vw) * cosD(i))
  return normalize(Math.atan2(y, x) * DEG)
}

function parseBirthDate(birth: BirthData): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(birth.date) || !/^\d{2}:\d{2}$/.test(birth.time)) throw new Error('请输入有效的出生日期和时间')
  const [year, month, day] = birth.date.split('-').map(Number)
  const [hour, minute] = birth.time.split(':').map(Number)
  if (month < 1 || month > 12 || day < 1 || day > 31 || hour > 23 || minute > 59) throw new Error('请输入有效的出生日期和时间')
  // Construct UTC directly to avoid host/browser timezone differences.
  const utc = Date.UTC(year, month - 1, day, hour, minute) - birth.timezone * 3600000
  const result = new Date(utc)
  if (Number.isNaN(result.getTime())) throw new Error('出生时间无法解析')
  const check = new Date(Date.UTC(year, month - 1, day, hour, minute))
  if (check.getUTCFullYear() !== year || check.getUTCMonth() !== month - 1 || check.getUTCDate() !== day || check.getUTCHours() !== hour || check.getUTCMinutes() !== minute) {
    throw new Error('请输入真实存在的出生日期和时间')
  }
  return result
}

function zodiac(longitude: number): ZodiacSign {
  return ZODIAC_SIGNS[Math.floor(normalize(longitude) / 30)]
}

function anglePosition(id: string, longitude: number, house: number): PlanetPosition {
  const meta = id === 'ascendant'
    ? { name: '上升', nameEn: 'Ascendant', symbol: 'ASC', description: '外在气质、第一印象与自我开启方式' }
    : id === 'midheaven'
      ? { name: '天顶', nameEn: 'Midheaven', symbol: 'MC', description: '事业方向、公众形象与人生志向' }
      : PLANET_META[id]
  const sign = zodiac(longitude)
  const withinSign = normalize(longitude) - ZODIAC_SIGNS.indexOf(sign) * 30
  const degree = Math.floor(withinSign)
  const minute = Math.round((withinSign - degree) * 60) % 60
  return { id, ...meta, longitude: normalize(longitude), sign, degree, minute, formatted: `${sign.name} ${degree}°${String(minute).padStart(2, '0')}′`, house, retrograde: false, description: meta.description }
}

function ascendantAndMc(julianDay: number, latitude: number, longitude: number): [number, number] {
  const t = julianDay - 2451545
  const gmst = normalize(280.46061837 + 360.98564736629 * t)
  const lst = normalize(gmst + longitude)
  const eps = 23.439291 * RAD
  const phi = Math.max(-89.8, Math.min(89.8, latitude)) * RAD
  // This branch is the ecliptic point on the eastern horizon. The +180 is
  // required because atan2's conventional branch yields the descendant here.
  const asc = normalize(DEG * Math.atan2(-Math.cos(lst * RAD), Math.sin(lst * RAD) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps)) + 180)
  // MC is the ecliptic longitude whose right ascension equals local sidereal
  // time: invert RA = atan2(sin(lambda) cos(eps), cos(lambda)).
  const mc = normalize(DEG * Math.atan2(Math.sin(lst * RAD), Math.cos(lst * RAD) * Math.cos(eps)))
  return [asc, mc]
}

function houseFor(longitude: number, ascendant: number): number {
  return Math.floor(normalize(longitude - ascendant) / 30) + 1
}

export function calculateNatalChart(birth: BirthData): NatalChart {
  if (!Number.isFinite(birth.latitude) || birth.latitude < -90 || birth.latitude > 90 || !Number.isFinite(birth.longitude) || birth.longitude < -180 || birth.longitude > 180 || !Number.isFinite(birth.timezone) || birth.timezone < -14 || birth.timezone > 14) throw new Error('请检查地点坐标与时区')
  const date = parseBirthDate(birth)
  const julianDay = date.getTime() / 86400000 + 2440587.5
  const days = julianDay - 2451543.5
  const T = (julianDay - 2451545) / 36525
  const earth = earthPosition(days)
  const ascLonMc = ascendantAndMc(julianDay, birth.latitude, birth.longitude)
  const asc = ascLonMc[0]
  const planetIds = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto']
  const longitudes: Record<string, number> = { sun: sunLongitude(T), moon: moonLongitude(days) }
  for (const id of planetIds.slice(2, 9)) {
    const p = orbitPosition(id, days)
    const lon = normalize(Math.atan2(p[1] - earth[1], p[0] - earth[0]) * DEG)
    longitudes[id] = lon
  }
  // Pluto's 248-year mean longitude is intentionally stable and dependency-free.
  longitudes.pluto = normalize(238.9508 + .0039757 * days)

  const planets = planetIds.map((id) => anglePosition(id, longitudes[id], houseFor(longitudes[id], asc)))
  // Estimate retrograde from the local orbital speed; it is informative, not used in geometry.
  for (let i = 2; i < planets.length; i += 1) {
    const id = planets[i].id
    if (id === 'pluto') continue
    const nextDays = days + .5
    const ep = earthPosition(nextDays)
    const p = orbitPosition(id, nextDays)
    const next = normalize(Math.atan2(p[1] - ep[1], p[0] - ep[0]) * DEG)
    const delta = normalize(next - longitudes[id])
    planets[i].retrograde = delta > 180
  }
  const ascendant = anglePosition('ascendant', asc, 1)
  const midheaven = anglePosition('midheaven', ascLonMc[1], 10)
  const houses = Array.from({ length: 12 }, (_, index) => normalize(asc + index * 30))

  const aspectDefs: Array<[number, ChartAspect['type'], ChartAspect['tone'], number]> = [
    [0, '合相', 'neutral', 8], [60, '六合', 'harmonious', 5], [90, '刑相', 'challenging', 6], [120, '拱相', 'harmonious', 6], [180, '对冲', 'challenging', 8],
  ]
  const aspects: ChartAspect[] = []
  for (let i = 0; i < planets.length; i += 1) for (let j = i + 1; j < planets.length; j += 1) {
    const distance = Math.abs(normalize(planets[i].longitude - planets[j].longitude))
    const separation = Math.min(distance, 360 - distance)
    const nearest = aspectDefs.reduce((best, current) => Math.abs(separation - current[0]) < Math.abs(separation - best[0]) ? current : best)
    const orb = Math.abs(separation - nearest[0])
    if (orb <= nearest[3]) aspects.push({ planetA: planets[i].id, planetB: planets[j].id, type: nearest[1], angle: nearest[0], orb, tone: nearest[2] })
  }
  aspects.sort((a, b) => a.orb - b.orb)
  return { birth, julianDay, planets, ascendant, midheaven, houses, aspects }
}

export const planetMeta = PLANET_META
