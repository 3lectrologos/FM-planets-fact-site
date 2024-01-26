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
      skyBlue: '#419EBB',
      sandyOrange: '#EDA249',
      purple: '#6F2ED6',
      redOrange: '#D14C32',
      brightRed: '#D83A34',
      darkOrange: '#CD5120',
      teal: '#1EC2A4',
      brightBlue: '#2D68F0',
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
