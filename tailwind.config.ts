import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default-primary': '#005CFF',
      },
      colors:{
        "text-color":'#005CFF',
        "text-black":"#222",
        "text-white":"fff"
      },
      backgroundImage: {
        "theme-secondary":"bg-gradient-to-tl(180deg, #FFFFFF 50%, #005CFF 50%)",
        //  "linear-gradient(180deg, #FFFFFF 50%, #005CFF 50%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
