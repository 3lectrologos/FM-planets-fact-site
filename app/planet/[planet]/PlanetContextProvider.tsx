'use client'

import { PlanetMenuProvider } from '@/app/planet/[planet]/planetMenuContext'

export default function PlanetContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return <PlanetMenuProvider>{children}</PlanetMenuProvider>
}
