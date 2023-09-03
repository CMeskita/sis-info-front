import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
      primaryLight:'#A5DBDD',
      primaryDark:'#407C87',
      primaryWhite:'#EEF1E6',
      primaryGray:'#D3E1E2'}
     

    },
  },
  plugins: [],
}
export default config
