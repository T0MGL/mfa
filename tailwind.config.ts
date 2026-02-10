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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "var(--gold)",
        "gold-dim": "var(--gold-dim)",
        "gold-bright": "var(--gold-bright)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
      },
      spacing: {
        "section": "clamp(6rem, 12vh, 10rem)",
        "section-lg": "clamp(8rem, 16vh, 14rem)",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "800px",
        "reading": "640px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        "fade-in": "fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
