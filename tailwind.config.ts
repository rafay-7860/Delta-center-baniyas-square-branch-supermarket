import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#102B46",
          light: "#1A3A5C",
          dark: "#0A1C2E",
        },
        royal: {
          DEFAULT: "#1769AA",
          light: "#2A7FC4",
          dark: "#125789",
        },
        gold: {
          DEFAULT: "#D6AD60",
          light: "#E4C888",
          dark: "#C49A4A",
        },
        charcoal: "#202B38",
        mist: "#F4F7FA",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "Tahoma", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(16,43,70,0.92) 0%, rgba(23,105,170,0.75) 55%, rgba(16,43,70,0.88) 100%)",
        "gold-shine":
          "linear-gradient(135deg, #D6AD60 0%, #E4C888 50%, #D6AD60 100%)",
        "navy-fade":
          "linear-gradient(180deg, #102B46 0%, #0A1C2E 100%)",
      },
      boxShadow: {
        premium: "0 20px 50px -15px rgba(16, 43, 70, 0.25)",
        glass: "0 8px 32px rgba(16, 43, 70, 0.12)",
        gold: "0 8px 24px rgba(214, 173, 96, 0.35)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "pulse-gold": "pulseGold 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(214, 173, 96, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(214, 173, 96, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
