/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./image/ken.jpg')",
      },
    },
    fontFamily: {
      signature: ['Great Vibes'],
    },
  },
  plugins: [],
}
