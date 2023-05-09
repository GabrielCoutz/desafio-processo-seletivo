/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      fontFamily: {
        'primary': 'Poppins, sans-serif',
      },
      colors: {
        primary: {
          100: '#FF671F52',
          200: '#FF881F',
          300: '#FA641E',
          400: '#FF671F'
        },
        gray: {
          100: '#EEEEEE',
          200: '#F0F0F0',
          300: '#CCCCCC',
          400: '#9F9F9F',
          500: '#999999',
          600: '#666666',
          700: '#676767',
          800: '#333333'
        },
        black: '#000000',
        white: {
          100: '#FFFFFF',
          200: '#FAFAFA',
          300: '#00000014'
        },
      },
      fontSize: {
        'sm-1': ['10px', '16px'],
        'sm-2': ['11px', '11px'],

        'sm-3': ['13px', '25px'],
        'sm-4': ['13px', '21px'],
        'sm-5': ['13px', '40px'],

        'sm-6': ['14px', '30px'],
        'sm-7': ['14px', '24px'],
        'sm-8': ['14px', '21px'],

        'sm-9': ['15px', '18px'],
        'sm-10': ['15px', '21px'],

        'base-1': ['16px','25px'],
        'base-2': ['16px','24px'],
        'base-3': ['16px','40px'],

        'md-1': ['24px','40px'],
        'md-2': ['24px','80px'],

        'lg-1': ['28px','40px'],

        'xl-1': ['32px','40px'],
        'xl-2': ['40px','48px'],
      },
      backgroundImage: {
        intro: "url('../assets/burguer/burguer_2.png')"
      }
  },
  plugins: [],
}
