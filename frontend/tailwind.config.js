import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#506D51",
          "primary-content": "#DEE4CE",
          "secondary": "#DEE4CE",
          "secondary-content": "#506D51",
          "accent": "#143B5A",
          "accent-content": "#ccd5dc",
          "neutral": "#DEE4CE",
          "neutral-content": "#506D51",
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
          "error": "#ff0000",
          "error-content": "#160000",
          "--rounded-btn": "0 rem",
        },
        backgroundImage: {
                'my-gradient': 'radial-gradient(circle,rgba(222, 228, 206, 1) 0%, rgba(255, 255, 255, 1) 100%)',
            }
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}