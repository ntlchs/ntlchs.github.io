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
      xs: "0 2px 3px -1px rgba(29, 46, 204, 0.3)",
      sm: "0 3px 5px -2px rgba(29, 46, 204, 0.3)",
      md: "0 5px 8px -3px rgba(29, 46, 204, 0.3)",
      lg: "0 8px 13px -5px rgba(29, 46, 204, 0.3)",
      xl: "0 13px 21px -8px rgba(29, 46, 204, 0.3)",
      "2xl": "0 21px 34px -13px rgba(29, 46, 204, 0.3)",
      "3xl": "0 34px 55px -21px rgba(29, 46, 204, 0.3)",
    },

    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1350px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        black: "#1f1f1f",
        gray: "#808084",
        white: "#fefefe",
        primary: "#8870ff",
      },
      fontFamily: {
        merri: ["Merriweather", "serif"],
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
    },
    animation: {
      "color-change": "color-change 10s linear infinite",
      "bg-color-change": "bg-color-change 10s linear infinite",
      "border-color-change": "border-color-change 10s linear infinite",
    },
    keyframes: {
      "color-change": {
        "0%": { color: "#ffb6c1" } /* Light Pink */,
        "25%": { color: "#add8e6" } /* Light Blue */,
        "50%": { color: "#98fb98" } /* Pale Green */,
        "75%": { color: "#ffdab9" } /* Peach Puff */,
        "100%": { color: "#ffb6c1" } /* Light Pink */,
      },
      "border-color-change": {
        "0%": { borderColor: "#ffb6c1" } /* Light Pink */,
        "25%": { borderColor: "#add8e6" } /* Light Blue */,
        "50%": { borderColor: "#98fb98" } /* Pale Green */,
        "75%": { borderColor: "#ffdab9" } /* Peach Puff */,
        "100%": { borderColor: "#ffb6c1" } /* Light Pink */,
      },
      "bg-color-change": {
        "0%": { backgroundColor: "#ffb6c1" } /* Light Pink */,
        "25%": { backgroundColor: "#add8e6" } /* Light Blue */,
        "50%": { backgroundColor: "#98fb98" } /* Pale Green */,
        "75%": { backgroundColor: "#ffdab9" } /* Peach Puff */,
        "100%": { backgroundColor: "#ffb6c1" } /* Light Pink */,
      },
    },
  },
  plugins: [],
};
