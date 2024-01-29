export type Planet =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune'

export const planetList = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
] as const

export const planetBgColor = new Map<Planet, string>([
  ['Mercury', 'bg-mercury'],
  ['Venus', 'bg-venus'],
  ['Earth', 'bg-earth'],
  ['Mars', 'bg-mars'],
  ['Jupiter', 'bg-jupiter'],
  ['Saturn', 'bg-saturn'],
  ['Uranus', 'bg-uranus'],
  ['Neptune', 'bg-neptune'],
])

export const planetBorderColor100 = new Map<Planet, string>([
  ['Mercury', 'border-mercury/100'],
  ['Venus', 'border-venus/100'],
  ['Earth', 'border-earth/100'],
  ['Mars', 'border-mars/100'],
  ['Jupiter', 'border-jupiter/100'],
  ['Saturn', 'border-saturn/100'],
  ['Uranus', 'border-uranus/100'],
  ['Neptune', 'border-neptune/100'],
])

export const planetBorderColor0 = new Map<Planet, string>([
  ['Mercury', 'border-mercury/0'],
  ['Venus', 'border-venus/0'],
  ['Earth', 'border-earth/0'],
  ['Mars', 'border-mars/0'],
  ['Jupiter', 'border-jupiter/0'],
  ['Saturn', 'border-saturn/0'],
  ['Uranus', 'border-uranus/0'],
  ['Neptune', 'border-neptune/0'],
])

export type InfoMenuItem = 'Overview' | 'Structure' | 'Surface'
export const infoMenuItems = ['Overview', 'Structure', 'Surface'] as const
