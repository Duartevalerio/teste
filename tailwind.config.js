/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'on-primary': '#ffffff',
        'inverse-primary': '#b3c5ff',
        'surface-dim': '#d9dadb',
        'on-secondary': '#ffffff',
        'on-background': '#191c1d',
        'surface-tint': '#435b9f',
        'tertiary-fixed-dim': '#ffb59e',
        'surface-container-high': '#e7e8e9',
        primary: '#00113a',
        'tertiary-fixed': '#ffdbd0',
        'inverse-on-surface': '#f0f1f2',
        'primary-fixed-dim': '#b3c5ff',
        'on-surface': '#191c1d',
        'on-primary-fixed': '#00174a',
        'secondary-fixed-dim': '#e9c349',
        background: '#f8f9fa',
        tertiary: '#2d0700',
        'on-tertiary-container': '#d37758',
        'on-tertiary-fixed': '#390b00',
        'on-primary-fixed-variant': '#2a4386',
        'on-error-container': '#93000a',
        surface: '#f8f9fa',
        error: '#ba1a1a',
        'on-tertiary': '#ffffff',
        'on-secondary-container': '#745c00',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
        'surface-container-low': '#f3f4f5',
        'on-secondary-fixed': '#241a00',
        'on-tertiary-fixed-variant': '#783018',
        'surface-bright': '#f8f9fa',
        'inverse-surface': '#2e3132',
        outline: '#757682',
        'surface-container': '#edeeef',
        'tertiary-container': '#501300',
        'surface-container-highest': '#e1e3e4',
        'on-primary-container': '#758dd5',
        'primary-fixed': '#dbe1ff',
        'surface-container-lowest': '#ffffff',
        'outline-variant': '#c5c6d2',
        secondary: '#735c00',
        'secondary-fixed': '#ffe088',
        'on-surface-variant': '#444650',
        'primary-container': '#002366',
        'secondary-container': '#fed65b',
        'surface-variant': '#e1e3e4',
        'on-secondary-fixed-variant': '#574500',
        champagne: '#c9a76b',
        'champagne-light': '#e6cfa1',
        'champagne-dark': '#9a7d47',
        ink: '#0a1628',
        cream: '#f6f1e8',
        'cream-dark': '#ebe3d2'
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem'
      },
      fontFamily: {
        headline: ['"Noto Serif"', 'serif'],
        body: ['Montserrat', 'sans-serif'],
        label: ['Montserrat', 'sans-serif'],
        serif: ['"Noto Serif"', 'serif']
      },
      maxWidth: {
        '8xl': '1920px'
      },
      letterSpacing: {
        'ultra': '0.5em'
      },
      keyframes: {
        'shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite'
      }
    }
  },
  plugins: []
}
