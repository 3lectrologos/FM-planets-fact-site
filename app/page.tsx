import { promises as fs } from 'fs'
import Structure from '@/app/Structure'
import { PlanetData } from '@/app/types'

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/public/data/data.json',
    'utf-8'
  )
  const data = JSON.parse(file) as PlanetData[]

  return <Structure data={data} />
}
