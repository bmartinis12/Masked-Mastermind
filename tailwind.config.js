/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text': '#FDF5DD',
        'primary': '#A5D40C',
        'secondary': '#154304',
        'accent': '#59F221'
      }
    },
  },
  plugins: [],
}
