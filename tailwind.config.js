/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#07162e', navy: '#0b2144', gold: '#d9aa52', cream: '#fbf8f1' },
      fontFamily: { display: ['Poppins', 'sans-serif'], body: ['Inter', 'sans-serif'] },
      boxShadow: { premium: '0 20px 60px rgba(4, 17, 38, .16)' }
    }
  },
  plugins: []
}
