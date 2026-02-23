/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1"
      }
    },
    colors: {
      primary: {
        orange: {
          default: "#00ded9", // Buttons + Text in light buttons
          90: "#1ae1dd",
          80: "#33e5e1",
          60: "#66ebe8",
          40: "#99f2f0",
          20: "#ccf8f7"
        }
      },
      accent: {
        cyan: "#26C6DA",
        purple: "#BE63F9",
        green: "#1CE524",
        blue: "#1D5EF4",
        red: "#FF391A"
      },
      background: {
        merino: "#e6eaec", // Navbar background
        maize: "#99acb1", //  light buttons color
        graphite: "#00303d"
      },
      typography: {
        asphalt: "#001318",  // Logo Title
        graphite: "#002c2b",
        flint: "#1a4550", // Most of Texts
        hurricane: "#8A7001"
      },
      white: "#fdffff",
      transparent: "transparent"
    },
    listStyleImage: {
      checkmark: 'url("/src/assets/images/icons/check.svg")',
    },
  },
  plugins: [],
}