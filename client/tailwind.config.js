/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mind-dark": "#0f172a",
        "mind-soft": "#1e293b",
        "mind-accent": "#38bdf8",
      },
    },
  },
  plugins: [],
};
