/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGrey: "rgb(255, 255, 255)",
      },
      spacing: {
        "custom-width-1": "1182px",
      },
    },
  },
  plugins: [],
};
