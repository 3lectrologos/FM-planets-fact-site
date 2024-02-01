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

export const infoMenuItemList = ['overview', 'structure', 'surface'] as const

export type InfoMenuItem = (typeof infoMenuItemList)[number]

export const infoMenuItemExtendedList = [
  'overview',
  'internal structure',
  'surface geology',
] as const

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
