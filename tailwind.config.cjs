/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#F5F5F5",
      black: "#1A1110",
    },
    extend: {
      colors: {
        // 400
        "hot-pink": {
          50: "#fef1f8",
          100: "#fee5f2",
          200: "#ffcbe8",
          300: "#ffa1d3",
          400: "#ff69b4",
          500: "#fa3a95",
          600: "#ea1870",
          700: "#cc0a57",
          800: "#a80c47",
          900: "#8c0f3e",
          950: "#560121",
        },
        // 200
        "blizzard-blue": {
          50: "#eefcfd",
          100: "#d5f5f8",
          200: "#b2ebf2",
          300: "#79dae7",
          400: "#3ac0d6",
          500: "#1fa3bb",
          600: "#1c849e",
          700: "#1e6a80",
          800: "#215869",
          900: "#1f4a5a",
          950: "#0f303d",
        },
        // 300
        gorse: {
          50: "#fefee8",
          100: "#feffc2",
          200: "#fffc89",
          300: "#fff44f",
          400: "#fde512",
          500: "#ecca06",
          600: "#cc9f02",
          700: "#a37105",
          800: "#86590d",
          900: "#724811",
          950: "#432605",
        },
      },
    },
  },
  plugins: [],
};
