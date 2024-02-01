import {
  InfoMenuItem,
  infoMenuItemList,
  infoMenuItemExtendedList,
  Planet,
  PlanetData,
} from '@/app/types'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import Link from 'next/link'
import {
  planetBorderColor0,
  planetBorderColor100,
  planetSVGSize,
  planetSVGSizeDesktop,
  planetSVGSizeMobile,
  planetSVGSizeTablet,
  planetTabletBgColor,
  planetTabletBorderColor100,
  surfaceSVGSizeDesktop,
  surfaceSVGSizeMobile,
  surfaceSVGSizeTablet,
} from '@/app/constants'
import { SourceIcon } from '@/app/icons'
import { usePlanetMenu, usePlanetMenuDispatch } from '@/app/PlanetMenuContext'

function InfoMenu({
  planet,
  className = '',
}: {
  planet: Planet
  className?: string
}) {
  const planetMenuState = usePlanetMenu()
  const planetMenuDispatch = usePlanetMenuDispatch()
  const selectedInfo = planetMenuState.info

  function onClick(info: InfoMenuItem) {
    planetMenuDispatch({ type: 'SET_INFO', info })
  }

  return (
    <div className={twMerge(`flex flex-col desktop:w-full`, `${className}`)}>
      <ul
        className={twMerge(
          `flex flex-row justify-between px-6`,
          `tablet:flex-col tablet:px-0 tablet:gap-y-4`
        )}
        role="menubar"
      >
        {infoMenuItemList.map((item, index) => (
          <li
            className={twMerge(
              `textStyle-h3 w-[80px] pt-5 pb-4 text-center`,
              `cursor-pointer transition-colors`,
              `tablet:w-[281px] tablet:h-10 tablet:px-5`,
              `tablet:flex tablet:flex-col tablet:justify-center tablet:py-0`,
              item === selectedInfo ? `text-white` : `text-white/50`,
              item === selectedInfo
                ? `border-b-[4px] ${planetBorderColor100.get(planet)}`
                : `border-b-[4px] ${planetBorderColor0.get(planet)}`,
              `tablet:text-white tablet:text-left`,
              item !== selectedInfo
                ? `tablet:border-[1px] tablet:border-white/20`
                : `tablet:border-[1px] ${planetTabletBorderColor100.get(planet)}`,
              item === selectedInfo &&
                `tablet:border-0 ${planetTabletBgColor.get(planet)}`,
              `desktop:w-full`,
              `desktop:h-12 desktop:px-[28px]`,
              item !== selectedInfo && `tablet:hover:bg-gray/20`
            )}
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => onClick(item)}
          >
            <div className={`flex flex-row items-center`}>
              <span
                className={`hidden tablet:inline mr-[14px] text-white/50 desktop:mr-[25px]`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={`w-full tablet:hidden`}>{item}</div>
              <span className={`hidden tablet:inline`}>
                {infoMenuItemExtendedList[index]}
              </span>
            </div>
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
      className={twMerge(
        `w-full px-6 py-4 border border-white/20`,
        `tablet:px-4 tablet:pt-4 tablet:pb-5`,
        `desktop:flex desktop:flex-col desktop:justify-center desktop:w-[255px] desktop:h-32 desktop:py-0 desktop:px-6`
      )}
    >
      <div
        className={twMerge(
          `flex flex-row items-center justify-between`,
          `tablet:flex-col tablet:items-start tablet:gap-y-2`,
          `desktop:gap-y-1`
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
        `tablet:flex-row tablet:gap-x-3 tablet:px-10`,
        `desktop:px-0 desktop:gap-x-[30px]`
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
        `tablet:justify-start`,
        `desktop:text-[16px]`
      )}
    >
      <span className={`opacity-50 mr-0.5`}>Source</span>
      <span className={`opacity-50 mr-1`}>:</span>
      <Link
        className={`font-medium underline opacity-50 mr-1 desktop:mr-2`}
        href={source}
      >
        Wikipedia
      </Link>
      <SourceIcon className={`mb-0.5`} />
    </div>
  )
}

function PlanetImage({ planet }: { planet: Planet }) {
  const planetMenuState = usePlanetMenu()
  const info = planetMenuState.info
  const planetNameLowercase = planet.toLowerCase()

  return (
    <div
      className={twMerge(
        `relative flex flex-col h-[300px] items-center justify-center`,
        `tablet:h-[460px]`,
        `desktop:h-[754px] desktop:w-[670px]`
      )}
    >
      {info !== 'structure' && (
        <div
          className={twMerge(
            `relative`,
            planetSVGSizeMobile.get(planet),
            planetSVGSizeTablet.get(planet),
            planetSVGSizeDesktop.get(planet)
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
            planetSVGSizeTablet.get(planet),
            planetSVGSizeDesktop.get(planet)
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
          `tablet:bottom-12 desktop:bottom-24`,
          `${info === 'surface' ? 'visible' : 'invisible'}`,
          surfaceSVGSizeMobile,
          surfaceSVGSizeTablet,
          surfaceSVGSizeDesktop
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

function PlanetText({ planetData }: { planetData: PlanetData }) {
  const info = usePlanetMenu().info

  return (
    <div>
      <div className={`textStyle-h1 text-center tablet:text-left`}>
        {planetData.name}
      </div>
      <FixedHeight height={`h-4 tablet:h-6`} />
      <div
        className={twMerge(
          `textStyle-body px-6 text-center text-white/85 text-pretty`,
          `tablet:px-0 tablet:text-left tablet:min-h-[110px]`
        )}
      >
        {planetData[info]['content']}
      </div>
      <FixedHeight height={`h-5`} />
      <Source source={planetData[info]['source']} />
    </div>
  )
}

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

export function Content({ planetData }: { planetData: PlanetData }) {
  const planet = planetData.name

  return (
    <div className={`flex flex-col desktop:items-center`}>
      <InfoMenu planet={planet} className={`tablet:hidden`} />
      <div className={`desktop:flex desktop:flex-col desktop:items-end`}>
        <div className={`flex flex-col desktop:flex-row desktop:gap-x-[112px]`}>
          <PlanetImage planet={planet} />
          <div
            className={twMerge(
              `flex flex-row items-center`,
              `tablet:px-10 tablet:gap-x-[69px]`,
              `desktop:flex-col desktop:w-[350px] desktop:px-0 desktop:pb-[87px] desktop:pt-32 justify-between`
            )}
          >
            <PlanetText planetData={planetData} />
            <InfoMenu planet={planet} className={`hidden tablet:flex`} />
          </div>
        </div>
        <FixedHeight height={`h-8 tablet:h-[28px] desktop:hidden`} />
        <PlanetNumbers planetData={planetData} />
      </div>
      <FixedHeight height={`h-12`} />
    </div>
  )
}
