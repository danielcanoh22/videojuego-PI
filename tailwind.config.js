/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        minigameBackground: "url('/assets/img/phishing/bg-phishing2.png')",
        videogameBackground: "url('/assets/img/bg-game.png')",
      },
    },
  },
  plugins: [],
};
