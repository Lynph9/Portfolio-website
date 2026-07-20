import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#EFE9DB',
          light: '#F7F3E8',
          dark: '#E3DCC9',
        },
        ink: {
          DEFAULT: '#1C1A16',
          soft: '#3A352D',
          muted: '#6E6759',
          faint: '#9A917F',
        },
        accent: {
          DEFAULT: '#C93A2E',
          dark: '#A52D23',
        },
        screen: {
          DEFAULT: '#16302A',
          glow: '#7FB98A',
          dim: '#4E7A5E',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0 0 #1C1A16',
        'hard-sm': '2px 2px 0 0 #1C1A16',
        'hard-lg': '6px 6px 0 0 #1C1A16',
        'hard-accent': '4px 4px 0 0 #C93A2E',
      },
    },
  },
  plugins: [],
};

export default config;
