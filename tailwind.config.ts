import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      background: '#070724',
      grayishBlue: '#38384F',
      lightGrayBlue: '#838391',
      mercury: '#419EBB',
      venus: '#EDA249',
      earth: '#6F2ED6',
      mars: '#D14C32',
      jupiter: '#D83A34',
      saturn: '#CD5120',
      uranus: '#1EC2A4',
      neptune: '#2D68F0',
    },
    fontFamily: {
      heading: ['var(--font-heading)'],
      body: ['var(--font-body)'],
    },
    screens: {
      tablet: '640px',
      desktop: '1280px',
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
export default config
