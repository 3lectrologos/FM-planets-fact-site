import { twMerge } from 'tailwind-merge'

export default function NotFound() {
  return (
    <div
      className={twMerge(
        `flex flex-col min-h-dvh min-w-fit bg-background text-white`,
        `bg-[url('/images/background-stars.svg')] bg-left-top bg-no-repeat`,
        `justify-center items-center`
      )}
    >
      <h1 className={`textStyle-h3 mb-2`}>404</h1>
      <h1 className={`textStyle-h2`}>Page Not Found</h1>
    </div>
  )
}
