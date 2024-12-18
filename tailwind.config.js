/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "DMSerif": ["DM Serif Display", "serif"],
        "Roboto": ["Roboto", "serif"]
      },
      colors: {
        primary: '#F7F7F7',
        secondary: '#F8B7D0',
        tertiary: "#333333",
        higher: "#444444",
        extra: "#F5E6CA",
        testing: "#001F54",
        highlight: "#FFC107",
        whitelight: "#FAFAFA",
        neutralivory: "#FFF8E7"
      },
      backgroundImage: {
        'hero-pattern': "url('./images/IMG_4786.JPG')",
      }
    },
  },
  plugins: [],
}

