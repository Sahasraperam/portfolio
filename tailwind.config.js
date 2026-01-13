/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#0A0A0A",
        bgSecondary: "#121212",
        bgCard: "#161616",
        borderSubtle: "#1F1F1F",
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1A1",
        textMuted: "#7D7D7D",
        goldMain: "#FFBF00",
        goldLight: "#FFCF40",
        goldMuted: "#CC9900",
        goldDeep: "#664D00",
      },
      fontFamily: {
        main: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
