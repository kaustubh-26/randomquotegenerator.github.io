/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // List all dynamically generated class names you use
    'bg-[#e74c3c]',
    'bg-[#77b1a9]',
    'bg-[#27ae60]',
    'bg-[#472e32]',
    'bg-[#73a857]',
    'bg-[#9b59b6]',
    'bg-[#bdbb99]',
    'bg-[#16a085]',
    'bg-[#2c3e50]',

    // Text Colors
    'text-[#e74c3c]',
    'text-[#77b1a9]',
    'text-[#27ae60]',
    'text-[#472e32]',
    'text-[#73a857]',
    'text-[#9b59b6]',
    'text-[#bdbb99]',
    'text-[#16a085]',
    'text-[#2c3e50]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
