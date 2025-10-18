/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e6fdb',
        'primary-light': '#4ea0ff',
        'primary-dark': '#0a2a74',
        secondary: '#ff6e6e',
        dark: '#0a0f2c',
        darker: '#070a1f',
        light: '#e0e7ff',
        lighter: '#f0f4ff',
        accent: '#00ffaa',
        success: '#4caf50',
        warning: '#ff9800',
        danger: '#f44336',
      },
      fontFamily: {
        main: ['Poppins', 'sans-serif'],
        heading: ['Orbitron', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
      },
      boxShadow: {
        'sm': '0 2px 8px rgba(0,0,0,0.1)',
        'md': '0 4px 16px rgba(0,0,0,0.2)',
        'lg': '0 8px 32px rgba(0,0,0,0.3)',
        'primary': '0 0 15px #4ea0ff',
        'accent': '0 0 15px #00ffaa',
      },
      borderRadius: {
        'xl': '12px',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(0deg, rgba(0, 123, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 123, 255, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        '40': '40px 40px',
      },
    },
  },
  plugins: [],
}
