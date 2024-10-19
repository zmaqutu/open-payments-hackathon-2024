/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      wallPaperImage: {
        'phoneBackground': "url('/src/assets/react.svg')",
      },
    },
  },
  plugins: [],
}