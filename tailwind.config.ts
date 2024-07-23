import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/app/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-playfair-display)",
      secondary: "var(--font-lato)",
    },
    container: {
      padding: {
        DEFAULT: "10px",
        // lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        dark: "#0a0909",
        grey: {
          DEFAULT: "#777876",
          100: "#e4e4e3",
        },
        accent: {
          DEFAULT: "#fe7634",
          hover: "#F55304",
        },
      },
      backgroundImage: {
        pattern: "url('/img/body-bg-pattern.png')",
        hero: "url('/img/hero/bg.png')",
        menu: "url('/img/menu/bg.png')",
        testimonial: "url('/img/testimonial/bg.png')",
        newsletter: "url('/img/newsletter/bg.png')",
        footer: "url('/img/footer/bg.png')",
      },
    },
  },
  plugins: [],
}
export default config
