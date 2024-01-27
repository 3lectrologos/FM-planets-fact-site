'use client'

import { twMerge } from 'tailwind-merge'
import { useState } from 'react'

function Title({ className = '' }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `flex flex-row items-center justify-between`,
        `${className}`
      )}
    >
      <h1 className={`textStyle-title`}>The planets</h1>
      <button className={``}>
        <HamburgerIcon />
      </button>
    </div>
  )
}

function HamburgerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
      <g fill="#FFF" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
      </g>
    </svg>
  )
}

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

type InfoMenuItem = 'Overview' | 'Structure' | 'Surface'
const infoMenuItems: InfoMenuItem[] = ['Overview', 'Structure', 'Surface']

type Planet =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Uranus'
  | 'Neptune'

const planetBorderColor100 = new Map<Planet, string>([
  ['Mercury', 'border-mercury/100'],
  ['Venus', 'border-venus/100'],
  ['Earth', 'border-earth/100'],
  ['Mars', 'border-mars/100'],
  ['Jupiter', 'border-jupiter/100'],
  ['Saturn', 'border-saturn/100'],
  ['Uranus', 'border-uranus/100'],
  ['Neptune', 'border-neptune/100'],
])

const planetBorderColor0 = new Map<Planet, string>([
  ['Mercury', 'border-mercury/0'],
  ['Venus', 'border-venus/0'],
  ['Earth', 'border-earth/0'],
  ['Mars', 'border-mars/0'],
  ['Jupiter', 'border-jupiter/0'],
  ['Saturn', 'border-saturn/0'],
  ['Uranus', 'border-uranus/0'],
  ['Neptune', 'border-neptune/0'],
])

function InfoMenu({ planet }: { planet: Planet }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className={`flex flex-col`}>
      <div className={`w-full h-px bg-white/20`} />
      <ul className={`flex flex-row justify-between px-6`} role="menubar">
        {infoMenuItems.map((item, index) => (
          <li
            className={twMerge(
              `textStyle-h3 w-[80px] pt-5 pb-4 text-center`,
              `cursor-pointer transition-colors`,
              index === activeIndex ? `text-white` : `text-white/50`,
              index === activeIndex
                ? `border-b-[4px] ${planetBorderColor100.get(planet)}`
                : `border-b-[4px] ${planetBorderColor0.get(planet)}`
            )}
            key={index}
            role="menuitem"
            tabIndex={0}
            onClick={() => setActiveIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className={`w-full h-px bg-white/20`} />
    </div>
  )
}

export default function Home() {
  const [planet, setPlanet] = useState<Planet>('Earth')

  return (
    <div
      className={twMerge(
        `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
        `bg-[url('/images/background-stars.svg')] bg-left-top bg-no-repeat`
      )}
    >
      <div className={``}>
        <FixedHeight height={`h-4`} />
        <Title className={`px-6`} />
        <FixedHeight height={`h-4`} />
        <InfoMenu planet={planet} />
      </div>
    </div>
  )
}
