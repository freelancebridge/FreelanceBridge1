/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-purple': {
          DEFAULT: '#4c1d95',
          light: '#5b21b6',
          dark: '#3b0764',
        },
        'brand-orange': {
          DEFAULT: '#f97316',
          light: '#fb923c',
          dark: '#ea580c',
        },
      },
      animation: {
        'orb-bounce': 'orb-bounce 3s ease-in-out infinite',
        'blob-pulse': 'blob-pulse 4s ease-in-out infinite',
        'sun-pulse': 'sun-pulse 5s ease-in-out infinite',
      },
      keyframes: {
        'orb-bounce': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'blob-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
        },
        'sun-pulse': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            boxShadow: '0 0 20px 10px rgba(255, 255, 200, 0.8), 0 0 60px 30px rgba(255, 200, 50, 0.5), 0 0 100px 60px rgba(255, 150, 0, 0.3)'
          },
          '50%': { 
            transform: 'translateY(-10px) scale(1.05)',
            boxShadow: '0 0 30px 15px rgba(255, 255, 200, 0.9), 0 0 80px 40px rgba(255, 200, 50, 0.6), 0 0 130px 80px rgba(255, 150, 0, 0.4)'
          },
        },
      },
    },
  },
  plugins: [],
}
