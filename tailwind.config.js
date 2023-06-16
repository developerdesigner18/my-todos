/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "todo-pink-300": "#E5447A",
        "todo-pink-400": "#DF2060",
        "todo-gray-300": "#C4BBBE",
        "todo-gray-400": "#86797D",
        "todo-white": "#F3F1F2",
        "todo-black": "#0E0C0C",
      },
      boxShadow: {
        "todo-shadow": "0px 2px 4px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
