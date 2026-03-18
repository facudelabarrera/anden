import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f2ece0',
          light: '#f7f3e7',
        },
        blue: {
          brand: '#303994',
        },
        brown: {
          dark: '#390400',
        },
        orange: {
          brand: '#f9982f',
        },
        lime: {
          brand: '#e0e738',
        },
        gray: {
          card: '#dddddd',
        },
        body: '#2b2b2b',
      },
      fontFamily: {
        alfarn: ['Alfarn W05', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
        body: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1056px',
      },
    },
  },
  plugins: [
    // `zone:` variant — applies when inside .orange-zone
    plugin(({ addVariant }) => {
      addVariant('zone', '.orange-zone &')
    }),
  ],
}

export default config
