/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#FEFFFF", // Plain White
        lighter: "#9B74FF", // Azureish White
        mid: "#6A1E9C", // Keppel
        dark: "#6A1E9C", // Myrtle Green
        darkest: "#2C0E5F", // Dark Greenish Black
        secondaryDark: '#141216',
      },
      backgroundImage: {
        "gradient-mid": "linear-gradient(135deg, #DEF2F1, #3AAFA9)",
      },
    },
  },
  plugins: [],
}