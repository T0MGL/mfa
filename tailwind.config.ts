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

        // Typography colors
        "text-label": "var(--text-label)",
        "text-hero": "var(--text-hero)",
        "text-heading": "var(--text-heading)",
        "text-body": "var(--text-body)",
        "text-list": "var(--text-list)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",

        // Gold system
        "gold-line": "var(--gold-line)",
        "gold-accent": "var(--gold-accent)",
        "gold-hover": "var(--gold-hover)",
        gold: "var(--gold-accent)",
        "gold-dim": "var(--gold-line)",
        "gold-bright": "var(--gold-hover)",

        // Borders & dividers
        divider: "var(--divider)",
        "divider-emphasis": "var(--divider-emphasis)",
        border: "var(--border)",
        "border-hover": "var(--border-hover)",

        // Surfaces
        surface: "var(--surface)",
        "surface-elevated": "var(--surface-elevated)",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 7vw + 1rem, 6.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display": ["clamp(2.25rem, 4vw + 0.5rem, 3.75rem)", { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 2.5vw + 0.25rem, 2.25rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        "heading": ["clamp(1.5rem, 3vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        "body-lg": ["clamp(1.25rem, 1.5vw, 1.375rem)", { lineHeight: "1.6", letterSpacing: "-0.01em" }],
        "body": ["clamp(1.0625rem, 1vw, 1.125rem)", { lineHeight: "1.65", letterSpacing: "-0.005em" }],
        "label": ["0.8125rem", { lineHeight: "1.5", letterSpacing: "0.12em" }],
      },
      spacing: {
        "section": "clamp(4rem, 8vh, 7rem)",
        "section-lg": "clamp(6rem, 12vh, 10rem)",
        "section-xl": "clamp(8rem, 16vh, 14rem)",
      },
      maxWidth: {
        "content": "1200px",
        "narrow": "800px",
        "reading": "680px",
      },
      fontWeight: {
        "light": "300",
        "normal": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700",
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
