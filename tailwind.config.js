/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      aspectRatio: {
        image: '4/5',
        landscape: '5/4'
      },
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem'
      },
      boxShadow: {
        '3xl': '-3px 5px 10px -1px rgba(0,0,0,0.40)'
      },
      dropShadow: {
        '3xl': '-3px 5px 10px rgba(0,0,0,0.40)'
      },
      colors: {
        sage: {
          DEFAULT: '#99A98F',
          50: '#F8F9F7',
          100: '#EDF0EB',
          200: '#D8DED4',
          300: '#C3CCBD',
          400: '#AEBBA6',
          500: '#99A98F',
          600: '#7C916F',
          700: '#617157',
          800: '#46513E',
          900: '#2A3226',
          950: '#1D221A'
        },
        scotch: {
          DEFAULT: '#FFFCDC',
          50: '#FFFEF0',
          100: '#FFFCDC',
          200: '#FFF7A4',
          300: '#FFF26C',
          400: '#FFEE34',
          500: '#FBE500',
          600: '#C3B200',
          700: '#8A7F00',
          800: '#524B00',
          900: '#1A1800',
          950: '#000000'
        }
      }
    }
  },
  plugins: []
}
