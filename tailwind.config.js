/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#0F1E93",
          DEFAULT: "#3254FF"
        },
        dark: '#181A1C',
        light: {
          secondary: "#C1C2C4",
          disabled: "#9D9EA1",
        },
        other: {
          outline: {
            border: '#E7E3FC3B'
          },
          extra: "#3D4142"
        },
        info: {
          background: "#CDF1FF4D"
        }
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

