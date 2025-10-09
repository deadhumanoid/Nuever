/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // If you decide to use the `app` directory later
  ],
  theme: {
    extend: {
      colors: {
        // Neuver's Refined Futuristic Y2K Palette
        'neuver-bg-dark': '#1A1A2E', // Deep charcoal/dark blue for primary background
        'neuver-text-light': '#E0E0E0', // Light grey for primary text
        'neuver-accent-blue': '#00F0FF', // Electric Blue
        'neuver-accent-purple': '#BF00FF', // Vibrant Purple
        'neuver-accent-green': '#A7FF00', // Lime Green
        'neuver-accent-pink': '#FF00A7', // Hot Pink
        'neuver-silver-light': '#CCCCCC', // Metallic light silver for subtle accents
        'neuver-silver-dark': '#888888', // Metallic dark silver
      },
      fontFamily: {
        // Modern Sans-serif for body text
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        // Futuristic/Display font for headlines or key elements (use sparingly)
        display: ['Oxanium', 'monospace'],
        // Optional pixelated font for a very specific Y2K touch (use with extreme caution)
        // pixel: ['"Press Start 2P"', 'cursive'],
      },
      // You can add custom animations, keyframes, etc., here later
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 5px var(--tw-shadow-color))' },
          '50%': { filter: 'drop-shadow(0 0 15px var(--tw-shadow-color))' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
      animation: {
        'text-glow': 'glow 1.5s infinite ease-in-out',
        'text-glitch': 'glitch 0.3s infinite alternate',
      },
    },
  },
  plugins: [],
};
