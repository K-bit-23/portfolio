/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00e0ff',
          green: '#00ff41',
          purple: '#b026ff',
        },
        dark: {
          DEFAULT: '#05070a',
          lighter: '#0a0d14',
          card: 'rgba(255, 255, 255, 0.05)',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 224, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 224, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};
