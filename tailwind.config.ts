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
        ink: "#0B0F0D",
        "ink-2": "#121714",
        surface: "#161C18",
        text: "#F2F5F1",
        muted: "#9DA89F",
        green: {
          DEFAULT: "#34C77B",
          deep: "#2BA866",
        },
        amber: {
          DEFAULT: "#E8B04B",
        },
        line: "rgba(255,255,255,0.09)",
        "line-2": "rgba(255,255,255,0.16)",
        "cta-muted": "#A9C6B5",
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
