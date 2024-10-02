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
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      addUtilities({
        '.fontsherif': {
          letterSpacing: '-4px',
          fontFamily: 'var(--font-barlow-condensed)',
        },
        '.text-10xl': {
          fontSize: "10rem",
          lineHeight: "1",
        }
      });
    },
  ],
};

export default config;
