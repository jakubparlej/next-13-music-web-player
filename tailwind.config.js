/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#1E1E1E',
        primary: '#307DB8',
        secondary: '#FACD66',
        light: '#EFEEE0',
        dark: '#1D2123',
        darkAlt: '#1A1E1F',
        alt: '#A4C7C6'
      },
    },
  },
  plugins: [],
}