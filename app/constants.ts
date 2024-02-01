import { Planet } from '@/app/types'

/* Colors */

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

export const planetTabletBgColor = new Map<Planet, string>([
  ['Mercury', 'tablet:bg-mercury'],
  ['Venus', 'tablet:bg-venus'],
  ['Earth', 'tablet:bg-earth'],
  ['Mars', 'tablet:bg-mars'],
  ['Jupiter', 'tablet:bg-jupiter'],
  ['Saturn', 'tablet:bg-saturn'],
  ['Uranus', 'tablet:bg-uranus'],
  ['Neptune', 'tablet:bg-neptune'],
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

export const planetTabletBorderColor100 = new Map<Planet, string>([
  ['Mercury', 'tablet:border-mercury/100'],
  ['Venus', 'tablet:border-venus/100'],
  ['Earth', 'tablet:border-earth/100'],
  ['Mars', 'tablet:border-mars/100'],
  ['Jupiter', 'tablet:border-jupiter/100'],
  ['Saturn', 'tablet:border-saturn/100'],
  ['Uranus', 'tablet:border-uranus/100'],
  ['Neptune', 'tablet:border-neptune/100'],
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

export const planetDesktopHoverBorderColor100 = new Map<Planet, string>([
  ['Mercury', 'desktop:hover:border-mercury/100'],
  ['Venus', 'desktop:hover:border-venus/100'],
  ['Earth', 'desktop:hover:border-earth/100'],
  ['Mars', 'desktop:hover:border-mars/100'],
  ['Jupiter', 'desktop:hover:border-jupiter/100'],
  ['Saturn', 'desktop:hover:border-saturn/100'],
  ['Uranus', 'desktop:hover:border-uranus/100'],
  ['Neptune', 'desktop:hover:border-neptune/100'],
])

export const planetDesktopBorderColor0 = new Map<Planet, string>([
  ['Mercury', 'desktop:border-mercury/0'],
  ['Venus', 'desktop:border-venus/0'],
  ['Earth', 'desktop:border-earth/0'],
  ['Mars', 'desktop:border-mars/0'],
  ['Jupiter', 'desktop:border-jupiter/0'],
  ['Saturn', 'desktop:border-saturn/0'],
  ['Uranus', 'desktop:border-uranus/0'],
  ['Neptune', 'desktop:border-neptune/0'],
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

/* Sizes */

export const planetSVGSize = new Map<Planet, number>([
  ['Mercury', 290],
  ['Venus', 400],
  ['Earth', 450],
  ['Mars', 336],
  ['Jupiter', 582],
  ['Saturn', 668],
  ['Uranus', 458],
  ['Neptune', 450],
])

const sizeMultiplierMobile = 0.383
export const planetSVGSizeMobile = new Map<Planet, string>([
  ['Mercury', 'w-[111.07px] h-[111.07px]'],
  ['Venus', 'w-[153.2px] h-[153.2px]'],
  ['Earth', 'w-[172.35px] h-[172.35px]'],
  ['Mars', 'w-[128.64px] h-[128.64px]'],
  ['Jupiter', 'w-[222.51px] h-[222.51px]'],
  ['Saturn', 'w-[254.94px] h-[254.94px]'],
  ['Uranus', 'w-[174.99px] h-[174.99px]'],
  ['Neptune', 'w-[172.35px] h-[172.35px]'],
])
export const surfaceSVGSizeMobile = 'w-[80px] h-[80px]'

const sizeMultiplierTablet = 0.6325
export const planetSVGSizeTablet = new Map<Planet, string>([
  ['Mercury', 'tablet:w-[183.425px] tablet:h-[183.425px]'],
  ['Venus', 'tablet:w-[253px] tablet:h-[253px]'],
  ['Earth', 'tablet:w-[286.75px] tablet:h-[286.75px]'],
  ['Mars', 'tablet:w-[214px] tablet:h-[214px]'],
  ['Jupiter', 'tablet:w-[370.5px] tablet:h-[370.5px]'],
  ['Saturn', 'tablet:w-[423.5px] tablet:h-[423.5px]'],
  ['Uranus', 'tablet:w-[290.5px] tablet:h-[290.5px]'],
  ['Neptune', 'tablet:w-[286.75px] tablet:h-[286.75px]'],
])
export const surfaceSVGSizeTablet = 'tablet:w-[132px] tablet:h-[132px]'

const sizeMultiplierDesktop = 1
export const planetSVGSizeDesktop = new Map<Planet, string>([
  ['Mercury', 'desktop:w-[290px] desktop:h-[290px]'],
  ['Venus', 'desktop:w-[400px] desktop:h-[400px]'],
  ['Earth', 'desktop:w-[450px] desktop:h-[450px]'],
  ['Mars', 'desktop:w-[336px] desktop:h-[336px]'],
  ['Jupiter', 'desktop:w-[582px] desktop:h-[582px]'],
  ['Saturn', 'desktop:w-[668px] desktop:h-[668px]'],
  ['Uranus', 'desktop:w-[458px] desktop:h-[458px]'],
  ['Neptune', 'desktop:w-[450px] desktop:h-[450px]'],
])
export const surfaceSVGSizeDesktop = 'desktop:w-[200px] desktop:h-[200px]'
