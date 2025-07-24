// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to bottom right, hsl(var(--primary)), hsl(var(--primary-light)))',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        "primary-light": "hsl(var(--primary-light))",
        "primary-lighter": "hsl(var(--primary-lighter))",

        "accent-green": "hsl(var(--accent-green))",
        "accent-green-foreground": "hsl(var(--accent-green-foreground))",
        "accent-yellow": "hsl(var(--accent-yellow))",
        "accent-yellow-foreground": "hsl(var(--accent-yellow-foreground))",
      },
    },
  },
  plugins: [],
}

module.exports = config
