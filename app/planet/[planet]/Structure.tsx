'use client'

import { PlanetData } from '@/app/types'
import { usePlanetMenu } from '@/app/planet/[planet]/planetMenuContext'
import { HamburgerMenu } from '@/app/planet/[planet]/HamburgerMenu'
import Content from '@/app/planet/[planet]/Content'

export default function WithContext({
  planetData,
}: {
  planetData: PlanetData
}) {
  const planetMenuState = usePlanetMenu()
  const planet = planetData.name

  return (
    <>
      {planetMenuState.menuOpen && <HamburgerMenu planet={planet} />}
      {!planetMenuState.menuOpen && <Content planetData={planetData} />}
    </>
  )
}
