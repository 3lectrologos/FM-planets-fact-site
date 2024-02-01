import { twMerge } from 'tailwind-merge'
import Title from '@/app/planet/[planet]/Title'
import { FullMenu } from '@/app/planet/[planet]/FullMenu'
import PlanetContextProvider from '@/app/planet/[planet]/PlanetContextProvider'

function FixedHeight({ height }: { height: string }) {
  return <div className={`w-full ${height}`}></div>
}

export default function Planet({ children }: { children: React.ReactNode }) {
  return (
    <PlanetContextProvider>
      <div
        className={twMerge(
          `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
          `bg-[url('/images/background-stars.svg')] bg-left-top bg-repeat`
        )}
      >
        <div className={`flex flex-col justify-center`}>
          <FixedHeight height={`h-4 tablet:h-8 desktop:hidden`} />
          <div
            className={twMerge(
              `flex flex-col desktop:flex-row`,
              `desktop:items-center desktop:justify-between desktop:pl-8 desktop:pr-10`
            )}
          >
            <Title className={`px-6 desktop:px-0`} />
            <FixedHeight height={`h-4 tablet:h-10 desktop:hidden`} />
            <nav>
              <FullMenu className={`hidden tablet:flex`} />
            </nav>
          </div>
          <FixedHeight height={`h-0 tablet:h-[27px] desktop:hidden`} />
          <div className={`w-full h-px bg-white/20`} />
        </div>
        {children}
      </div>
    </PlanetContextProvider>
  )
}
