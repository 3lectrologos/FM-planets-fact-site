import { twMerge } from 'tailwind-merge'

export default function Home() {
  return (
    <div
      className={twMerge(
        `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
        ``
      )}
    ></div>
  )
}
