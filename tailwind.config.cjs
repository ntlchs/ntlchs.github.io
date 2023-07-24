/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    boxShadow: {
      xs: "0 2px 3px -1px rgba(250, 58, 149, 0.3)",
      sm: "0 3px 5px -2px rgba(250, 58, 149, 0.3)",
      md: "0 5px 8px -3px rgba(250, 58, 149, 0.3)",
      lg: "0 8px 13px -5px rgba(250, 58, 149, 0.3)",
      xl: "0 13px 21px -8px rgba(250, 58, 149, 0.3)",
      "2xl": "0 21px 34px -13px rgba(250, 58, 149, 0.3)",
      "3xl": "0 34px 55px -21px rgba(250, 58, 149, 0.3)",
    },

    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1350px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      white: "#F5F5F5",
      black: "#1A1110",
    },
    extend: {
      fontFamily: {
        primary: "Arial",
      },
      spacing: {
        // golden ratio
        xs: "0.25rem", // 4px
        sm: "0.375rem", // 6px (4px * 1.618 ≈ 6)
        md: "0.625rem", // 10px (6px * 1.618 ≈ 10)
        lg: "1rem", // 16px (10px * 1.618 ≈ 16)
        xl: "1.625rem", // 26px (16px * 1.618 ≈ 26)
        "2xl": "2.625rem", // 42px (26px * 1.618 ≈ 42)
        "3xl": "4.25rem", // 68px (42px * 1.618 ≈ 68)
      },
      fontSize: {
        // golden ratio
        xs: "0.75rem", //
        sm: "1rem", // 16px (10px * 1.618 ≈ 16)
        md: "1.625rem", // 26px (16px * 1.618 ≈ 26)
        lg: "2.625rem", // 42px (26px * 1.618 ≈ 42)
        xl: "4.25rem", // 68px (42px * 1.618 ≈ 68)
        "2xl": "6.875rem", // 110px (68px * 1.618 ≈ 110)
      },
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
