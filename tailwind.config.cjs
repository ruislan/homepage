module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        wave: {
          '0%, 50%, to': { transform: 'rotate(0deg)' },
          '10%, 30%': { transform: 'rotate(-6deg)' },
          '20%': { transform: 'rotate(8deg)' },
          '40%': { transform: 'rotate(5deg)' }
        }
      },
      animation: {
        'wave': 'wave 0.6s 1',
        'wiggle': 'wiggle 1s infinite',
      },
      boxShadow: {
        'halo': '0px 0px 10px #427ed1, 0px 0px 10px #427ed1',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
