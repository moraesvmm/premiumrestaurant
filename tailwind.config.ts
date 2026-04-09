import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf9f5',
          100: '#f5f2e8',
          200: '#ebe3d0',
          300: '#ddcfad',
          400: '#d0b685',
          500: '#c4a05f',
          600: '#b38846',
          700: '#956d38',
          800: '#7c5732',
          900: '#66472e',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#ebebeb',
          200: '#d4d4d4',
          300: '#b8b8b8',
          400: '#8a8a8a',
          500: '#666666',
          600: '#4d4d4d',
          700: '#3a3a3a',
          800: '#262626',
          900: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
