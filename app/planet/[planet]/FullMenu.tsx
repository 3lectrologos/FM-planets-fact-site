'use client'

import { twMerge } from 'tailwind-merge'
import { Planet, planetList } from '@/app/types'
import Link from 'next/link'
import {
  planetDesktopBorderColor0,
  planetDesktopHoverBorderColor100,
} from '@/app/constants'
import { usePathname } from 'next/navigation'

export function FullMenu({ className = '' }: { className?: string }) {
  const planet = usePathname().split('/')[2] as Planet

  return (
    <div className={`w-full flex flex-col items-center desktop:w-fit`}>
      <ul
        className={twMerge(`flex flex-row gap-x-[33px]`, `${className}`)}
        role="menu"
      >
        {planetList.map((nextPlanet, index) => (
          <li
            key={index}
            className={twMerge(`desktop:flex desktop:flex-col`)}
            role="menuitem"
            aria-label={nextPlanet}
          >
            <Link
              className={twMerge(
                `desktop:flex desktop:flex-col desktop:justify-center desktop:h-[85px] desktop:hover:pt-[8px]`,
                `cursor-pointer`,
                `desktop:transition-[border-color,opacity,padding] desktop:ease-linear`,
                `desktop:hover:transition-[border-color,opacity,padding] desktop:hover:ease-linear`,
                `${planetDesktopBorderColor0.get(nextPlanet)}`,
                `desktop:hover:border-t-[4px] ${planetDesktopHoverBorderColor100.get(nextPlanet)}`
              )}
              href={`/planet/${nextPlanet}`}
            >
              <span
                className={`textStyle-menu ${planet === nextPlanet ? 'opacity-100' : 'opacity-60'}`}
              >
                {nextPlanet}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
