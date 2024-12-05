/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#FEFFFF", // Plain White
        lighter: "#DEF2F1", // Azureish White
        mid: "#3AAFA9", // Keppel
        dark: "#2B7A78", // Myrtle Green
        darkest: "#17252A", // Dark Greenish Black
        secondaryDark: '#141216',
      },
      backgroundImage: {
        "gradient-mid": "linear-gradient(135deg, #DEF2F1, #3AAFA9)",
      },
    },
  },
  plugins: [],
}