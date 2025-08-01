import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-accent': 'radial-gradient(circle, #ee9707, #ffffff 90%)',
        'linear-accent-right': 'linear-gradient(to right, #ee9707 40%, #ffffff 60%)',
        'linear-accent-left': 'linear-gradient(to left, #ffffff 40%, #ee9707  60%)',
      },
      rotate: {
        '15': '15deg',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "primary-content": "#d6ce36",
          "secondary": "#ffffff",
          "secondary-content": "#000000",
          "accent": "#ee9707",
          "accent-content": "#000000",
          "neutral": "#DEE4CE",
          "neutral-content": "#12120f",
          "base-100": "#FFFFFF",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          "info": "#00ffff",
          "info-content": "#001616",
          "success": "#00ff00",
          "success-content": "#001600",
          "warning": "#00ff00",
          "warning-content": "#001600",
          "error": "#dc0b0b",
          "error-content": "#d6ce36",
        },
      },
    ],
  }, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  darkTheme: "dark", // name of one of the included themes for dark mode
  base: true, // applies background color and foreground color for root element by default
  styled: true, // include daisyUI colors and design decisions for all components
  utils: true, // adds responsive and modifier utility classes
  prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  themeRoot: ":root", // The element that receives theme color CSS variables
}