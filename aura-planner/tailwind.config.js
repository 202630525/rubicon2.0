// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: {
          light: "rgba(255, 255, 255, 0.15)",
          base: "rgba(255, 255, 255, 0.25)",
          dark: "rgba(15, 23, 42, 0.45)",
          border: "rgba(255, 255, 255, 0.3)",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.18)",
        'glass-hover': "0 12px 40px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
