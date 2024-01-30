import {
  InfoMenuItem,
  infoMenuItems,
  Planet,
  planetBorderColor0,
  planetBorderColor100,
  PlanetData,
} from '@/app/types'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'
import Link from 'next/link'

function InfoMenu({
  planet,
  selected,
  onSelect,
}: {
  planet: Planet
  selected: InfoMenuItem
  onSelect: (info: InfoMenuItem) => void
}) {
  function onClick(info: InfoMenuItem) {
    onSelect(info)
  }

  return (
    <div className={`flex flex-col`}>
      <ul className={`flex flex-row justify-between px-6`} role="menubar">
        {infoMenuItems.map((item, index) => (
          <li
            className={twMerge(
              `textStyle-h3 w-[80px] pt-5 pb-4 text-center`,
              `cursor-pointer transition-colors`,
              item === selected ? `text-white` : `text-white/50`,
              item === selected
                ? `border-b-[4px] ${planetBorderColor100.get(planet)}`
                : `border-b-[4px] ${planetBorderColor0.get(planet)}`
            )}
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => onClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={`w-full h-px bg-white/20`} />
    </div>
  )
}

function PlanetNumber({ label, value }: { label: string; value: string }) {
  return (
    <div className={`w-full px-6 py-4 border border-1 border-white/20`}>
      <div className={`flex flex-row items-center justify-between`}>
        <span className={`textStyle-h4 text-white/50`}>{label}</span>
        <span className={`textStyle-h2`}>{value}</span>
      </div>
    </div>
  )
}

function PlanetNumbers({ planetData }: { planetData: PlanetData }) {
  return (
    <div className={`flex flex-col gap-2 px-6`}>
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
        `text-white font-body text-[14px] font-extralight tracking-wider`
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
  const planetNameLowercase = planetData.name.toLowerCase()

  return (
    <div className={`flex flex-col`}>
      <InfoMenu
        planet={planetData.name}
        selected={info}
        onSelect={onInfoSelect}
      />
      <div className={`flex flex-col w-full items-center mt-24 mb-6`}>
        {info !== 'structure' && (
          <Image
            src={`/images/planet-${planetNameLowercase}.svg`}
            alt={`Planet ${planetNameLowercase}`}
            width={111}
            height={111}
          />
        )}
        {info === 'structure' && (
          <Image
            src={`/images/planet-${planetNameLowercase}-internal.svg`}
            alt={`Planet ${planetNameLowercase}`}
            width={111}
            height={111}
          />
        )}
        <Image
          className={`-mt-6 ${info === 'surface' ? 'visible' : 'invisible'}`}
          src={`/images/geology-${planetNameLowercase}.png`}
          alt={`Planet ${planetNameLowercase} geology`}
          width={80}
          height={80}
        />
      </div>
      <span className={`textStyle-h1 text-center`}>{planetData.name}</span>
      <FixedHeight height={`h-4`} />
      <div className={`textStyle-body px-6 text-center text-white/85`}>
        {planetData[info]['content']}
      </div>
      <FixedHeight height={`h-8`} />
      <Source source={planetData[info]['source']} />
      <FixedHeight height={`h-8`} />
      <PlanetNumbers planetData={planetData} />
      <FixedHeight height={`h-12`} />
    </div>
  )
}
