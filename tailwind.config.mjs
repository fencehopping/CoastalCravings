/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf7ef',
        shell: '#f3eadc',
        sand: '#d8c2a3',
        driftwood: '#8d735b',
        tide: '#9bb8c5',
        harbor: '#24465a',
        ink: '#25313a',
        cranberry: '#9b4c44',
        sage: '#7c8d78',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(37, 49, 58, 0.14)',
      },
    },
  },
  plugins: [],
};
