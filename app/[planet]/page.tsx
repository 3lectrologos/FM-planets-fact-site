import { promises as fs } from 'fs'
import Structure from '@/app/[planet]/Structure'
import { isPlanet, Planet, PlanetData } from '@/app/types'
import { notFound } from 'next/navigation'

export default async function Home({ params }: { params: { planet: string } }) {
  if (!isPlanet(params.planet)) {
    notFound()
  }

  const file = await fs.readFile(
    process.cwd() + '/public/data/data.json',
    'utf-8'
  )
  const data = JSON.parse(file) as PlanetData[]
  const planetData = data.find((planet) => planet.name === params.planet)!

  return <Structure planetData={planetData} />
}
