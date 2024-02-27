/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [daisyui],
  darkMode: 'class',
  daisyui: {
    // https://daisyui.com/docs/colors/
    themes: [
      {
        dark: {
          'color-scheme': 'dark',
          primary: '#292929',
          'primary-content': '#0C141D',
          secondary: '#F2F4F7',
          'secondary-content': '#ffffff',
          accent: '#FFD447',
          'accent-content': '#ffffff',
          black: '#111111',
          neutral: '#35363A',
          'neutral-content': '#B1B1B1',
          'base-100': '#22252B',
          'base-200': '#17191D',
          'base-300': '#15161A',
          'base-content': '#FFFFFF',
          '*': { 'border-color': '#2D3139' }
        }
      },
      {
        light: {
          'color-scheme': 'light',
          primary: '#F2F4F7',
          'primary-content': '#ffffff',
          secondary: '#000000',
          'secondary-content': '#ffffff',
          accent: '#FFD447',
          'accent-content': '#07312D',
          black: '#111111',
          neutral: '#D0D0D1',
          'neutral-content': '#3D3D3D',
          'base-100': '#ffffff',
          'base-200': '#fafafb',
          'base-300': '#f5f5f7',
          'base-content': '#212121',
          '*': { 'border-color': '#e5e7eb' }
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
      }
    }
  }
}