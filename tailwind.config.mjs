/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        linen: {
          DEFAULT: '#FAF7F2',
          light: '#FDFBF7',
          dark: '#F0ECE4',
        },
        rose: {
          dust: '#D48B96',
          light: '#F3D9DC',
          soft: '#E8B4BC',
          dark: '#B76E79',
        },
        peach: {
          DEFAULT: '#E8A598',
          light: '#F7D7D0',
          soft: '#F2BFB5',
          dark: '#CD8375',
        },
        sage: {
          DEFAULT: '#6B705C',
          light: '#A5A58D',
          pale: '#E9EBE4',
          dark: '#474A3D',
        },
        softblack: {
          DEFAULT: '#2B2625',
          muted: '#5A5452',
          light: '#88807D',
        },
      },
      fontFamily: {
        serif: ['Arsenal', 'system-ui', 'sans-serif'],
        sans: ['Arsenal', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(43, 38, 37, 0.05), 0 2px 6px -1px rgba(43, 38, 37, 0.03)',
        'soft-lg': '0 10px 30px -4px rgba(43, 38, 37, 0.08), 0 4px 12px -2px rgba(43, 38, 37, 0.04)',
        'rose-glow': '0 8px 25px -4px rgba(212, 139, 150, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

