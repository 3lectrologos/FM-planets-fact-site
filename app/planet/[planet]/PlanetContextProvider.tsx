'use client'

import { PlanetMenuProvider } from '@/app/planet/[planet]/planetMenuContext'
import React from 'react'

export default function PlanetContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PlanetMenuProvider>{children}</PlanetMenuProvider>
}
