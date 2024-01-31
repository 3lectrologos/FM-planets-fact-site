import { twMerge } from 'tailwind-merge'
import { InfoMenuItem } from '@/app/types'
import Image from 'next/image'

export function HamburgerIcon({
  className = '',
  active,
}: {
  className?: string
  active: boolean
}) {
  return (
    <div
      className={twMerge(
        `flex flex-col w-[24px] h-[24px] justify-center transition-opacity`,
        `${active ? 'opacity-25' : ''}`,
        `${className}`
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
        <g fill="#FFF" fillRule="evenodd">
          <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
        </g>
      </svg>
    </div>
  )
}

export function ChevronIcon({ className = '' }: { className?: string }) {
  return (
    <div
      className={twMerge(
        `flex flex-col w-[8px] h-[8px] items-center justify-center`,
        `${className}`
      )}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
        <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
      </svg>
    </div>
  )
}
