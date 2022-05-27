module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: 'hsl(230, 35%, 7%)',
          800: 'hsl(230, 35%, 17%)',
          700: 'hsl(230, 35%, 27%)',
          600: 'hsl(230, 35%, 37%)',
          500: 'hsl(230, 35%, 47%)',
          400: 'hsl(230, 35%, 57%)',
          300: 'hsl(230, 35%, 67%)',
          200: 'hsl(230, 35%, 77%)',
          100: 'hsl(230, 35%, 87%)',
        },
        secondary: {
          900: 'hsl(231, 77%, 10%)',
          800: 'hsl(231, 77%, 20%)',
          700: 'hsl(231, 77%, 30%)',
          600: 'hsl(231, 77%, 40%)',
          500: 'hsl(231, 77%, 50%)',
          400: 'hsl(231, 77%, 60%)',
          300: 'hsl(231, 77%, 70%)',
          200: 'hsl(231, 77%, 80%)',
          100: 'hsl(231, 77%, 90%)',
        },
      },
      fontFamily: {
        primary: ['Bellefair', 'serif'],
        secondary: ['Barlow Condensed', 'sans-serif'],
        paragraph: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
