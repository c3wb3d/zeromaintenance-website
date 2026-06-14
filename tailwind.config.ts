import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        "ink-2": "#0C0C0C",
        surface: "#141414",
        text: "#F2F5F1",
        muted: "#9DA89F",
        green: {
          DEFAULT: "var(--color-green)",
          deep: "var(--color-green-deep)",
        },
        amber: {
          DEFAULT: "#E8B04B",
        },
        line: "rgba(255,255,255,0.10)",
        "line-2": "rgba(255,255,255,0.17)",
        "cta-muted": "#9BB5A8",
        "before-accent": "#C9A47A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        panel: "18px",
        cta: "24px",
      },
      maxWidth: {
        wrap: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
