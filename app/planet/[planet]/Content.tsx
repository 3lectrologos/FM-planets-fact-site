import {
  InfoMenuItem,
  infoMenuItems,
  Planet,
  planetBgColor,
  planetBorderColor0,
  planetBorderColor100,
  PlanetData,
  planetSVGSize,
  planetSVGSizeMobile,
  planetSVGSizeTablet,
  planetTabletBgColor,
  surfaceSVGSizeMobile,
  surfaceSVGSizeTablet,
} from '@/app/types'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import Link from 'next/link'

function InfoMenu({
  planet,
  selected,
  onSelect,
  className = '',
}: {
  planet: Planet
  selected: InfoMenuItem
  onSelect: (info: InfoMenuItem) => void
  className?: string
}) {
  function onClick(info: InfoMenuItem) {
    onSelect(info)
  }

  return (
    <div className={twMerge(`flex flex-col`, `${className}`)}>
      <ul
        className={twMerge(
          `flex flex-row justify-between px-6`,
          `tablet:flex-col tablet:px-0 tablet:gap-y-4`
        )}
        role="menubar"
      >
        {infoMenuItems.map((item, index) => (
          <li
            className={twMerge(
              `textStyle-h3 w-[80px] pt-5 pb-4 text-center`,
              `cursor-pointer transition-colors`,
              item === selected ? `text-white` : `text-white/50`,
              item === selected
                ? `border-b-[4px] ${planetBorderColor100.get(planet)}`
                : `border-b-[4px] ${planetBorderColor0.get(planet)}`,
              `tablet:text-white tablet:text-left`,
              `tablet:w-[281px] tablet:h-10 tablet:py-2 tablet:px-5`,
              item !== selected
                ? `tablet:border-[1px] tablet:border-white/20`
                : `tablet:border-[1px] tablet:border-venus`,
              item === selected && `tablet:border-0 tablet:bg-venus`
            )}
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => onClick(item)}
          >
            <span className={`hidden tablet:inline mr-[14px] text-white/50`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            {item}
          </li>
        ))}
      </ul>
      <div className={`w-full h-px bg-white/20 tablet:hidden`} />
    </div>
  )
}

function PlanetNumber({ label, value }: { label: string; value: string }) {
  return (
    <div
      className={`w-full px-6 py-4 border border-1 border-white/20 tablet:px-4 tablet:pt-4 tablet:pb-5`}
    >
      <div
        className={twMerge(
          `flex flex-row items-center justify-between`,
          `tablet:flex-col tablet:items-start tablet:gap-y-[6px]`
        )}
      >
        <span className={`textStyle-h4 text-white/50`}>{label}</span>
        <span className={`textStyle-h2`}>{value}</span>
      </div>
    </div>
  )
}

function PlanetNumbers({ planetData }: { planetData: PlanetData }) {
  return (
    <div
      className={twMerge(
        `flex flex-col gap-y-2 px-6`,
        `tablet:flex-row tablet:gap-x-3 tablet:px-10`
      )}
    >
      <PlanetNumber label={`rotation time`} value={planetData.rotation} />
      <PlanetNumber label={`revolution time`} value={planetData.revolution} />
      <PlanetNumber label={`radius`} value={planetData.radius} />
      <PlanetNumber label={`average temp.`} value={planetData.temperature} />
    </div>
  )
}

function Source({ source }: { source: string }) {
  return (
    <div
      className={twMerge(
        `flex flex-row items-center justify-center`,
        `text-white font-body text-[14px] font-extralight tracking-wider`,
        `tablet:justify-start`
      )}
    >
      <span className={`opacity-50 mr-0.5`}>Source</span>
      <span className={`opacity-50 mr-1`}>:</span>
      <Link className={`font-medium underline opacity-50 mr-1`} href={source}>
        Wikipedia
      </Link>
      <div className={`w-3 h-3`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox={'0 0 12 12'}>
          <path
            fill="#FFF"
            d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
            opacity=".5"
          />
        </svg>
      </div>
    </div>
  )
}

function PlanetImage({ planet, info }: { planet: Planet; info: InfoMenuItem }) {
  const planetNameLowercase = planet.toLowerCase()
  const sizeRatio = 0.383
  const size = sizeRatio * planetSVGSize.get(planet)!

  return (
    <div
      className={twMerge(
        `relative flex flex-col h-[300px] items-center justify-center`,
        `tablet:h-[460px]`
      )}
    >
      {info !== 'structure' && (
        <div
          className={twMerge(
            `relative`,
            planetSVGSizeMobile.get(planet),
            planetSVGSizeTablet.get(planet)
          )}
        >
          <Image
            src={`/images/planet-${planetNameLowercase}.svg`}
            alt={`Planet ${planetNameLowercase}`}
            fill={true}
          />
        </div>
      )}
      {info === 'structure' && (
        <div
          className={twMerge(
            `relative`,
            planetSVGSizeMobile.get(planet),
            planetSVGSizeTablet.get(planet)
          )}
        >
          <Image
            src={`/images/planet-${planetNameLowercase}-internal.svg`}
            alt={`Planet ${planetNameLowercase}`}
            fill={true}
          />
        </div>
      )}
      <div
        className={twMerge(
          `absolute bottom-10 left-1/2 transform -translate-x-1/2`,
          `tablet:bottom-12`,
          `${info === 'surface' ? 'visible' : 'invisible'}`,
          surfaceSVGSizeMobile,
          surfaceSVGSizeTablet
        )}
      >
        <Image
          className={`object-contain`}
          src={`/images/geology-${planetNameLowercase}.png`}
          alt={`Planet ${planetNameLowercase} geology`}
          fill={true}
        />
      </div>
    </div>
  )
}

function PlanetText({
  planetData,
  info,
}: {
  planetData: PlanetData
  info: InfoMenuItem
}) {
  return (
    <div>
      <div className={`textStyle-h1 text-center tablet:text-left`}>
        {planetData.name}
      </div>
      <FixedHeight height={`h-4 tablet:h-6`} />
      <div
        className={twMerge(
          `textStyle-body px-6 text-center text-white/85 text-pretty`,
          `tablet:px-0 tablet:text-left`
        )}
      >
        {planetData[info]['content']}
      </div>
      <FixedHeight height={`h-8`} />
      <Source source={planetData[info]['source']} />
    </div>
  )
}

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

export function Content({
  planetData,
  info,
  onInfoSelect,
}: {
  planetData: PlanetData
  info: InfoMenuItem
  onInfoSelect: (info: InfoMenuItem) => void
}) {
  return (
    <div className={`flex flex-col`}>
      <InfoMenu
        className={`tablet:hidden`}
        planet={planetData.name}
        selected={info}
        onSelect={onInfoSelect}
      />
      <PlanetImage planet={planetData.name} info={info} />
      <div
        className={`flex flex-row items-center tablet:px-10 tablet:gap-x-[69px]`}
      >
        <PlanetText planetData={planetData} info={info} />
        <InfoMenu
          className={`hidden tablet:flex`}
          planet={planetData.name}
          selected={info}
          onSelect={onInfoSelect}
        />
      </div>
      <FixedHeight height={`h-8 tablet:h-[28px]`} />
      <PlanetNumbers planetData={planetData} />
      <FixedHeight height={`h-12`} />
    </div>
  )
}
