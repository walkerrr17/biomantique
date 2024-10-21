import { type Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#77CC11',
          900: '#77CC11',
          800: '#77cb10',
          700: '#89d13c', 
          600: '#9ad758',
          500: '#aadd71', 
          400: '#b9e38a', 
          300: '#c8e9a1',
          200: '#d6eeb8',
          100: '#e4f4d0',
          50: '#f2fae7'
        },
        indigo: {
          DEFAULT: '#FF4411',
          900: '#FF4411',
          800: '#ff430f',
          700: '#ff5f2e', 
          600: '#ff7648',
          500: '#ff8b61', 
          400: '#ffa17c', 
          300: '#ffb495',
          200: '#ffc7ae',
          100: '#ffd9c9',
          50: '#ffece4'
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
