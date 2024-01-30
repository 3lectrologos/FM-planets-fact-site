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

export type Planet = (typeof planetList)[number]

export function isPlanet(planet: string): planet is Planet {
  return planetList.includes(planet as Planet)
}

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

export const planetCircleColor = new Map<Planet, string>([
  ['Mercury', 'bg-circle_mercury'],
  ['Venus', 'bg-circle_venus'],
  ['Earth', 'bg-circle_earth'],
  ['Mars', 'bg-circle_mars'],
  ['Jupiter', 'bg-circle_jupiter'],
  ['Saturn', 'bg-circle_saturn'],
  ['Uranus', 'bg-circle_uranus'],
  ['Neptune', 'bg-circle_neptune'],
])

export type InfoMenuItem = 'overview' | 'structure' | 'surface'
export const infoMenuItems = ['overview', 'structure', 'surface'] as const

export type PlanetData = {
  name: Planet
  overview: {
    content: string
    source: string
  }
  structure: {
    content: string
    source: string
  }
  surface: {
    content: string
    source: string
  }
  rotation: string
  revolution: string
  radius: string
  temperature: string
  images: {
    planet: string
    internal: string
    geology: string
  }
}
