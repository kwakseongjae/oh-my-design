import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dde7ff',
          500: '#4f46e5',
          600: '#4338ca',
          700: '#3730a3',
          900: '#312e81',
        },
        accent: '#22c55e',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '6px',
      },
    },
  },
};

export default config;
