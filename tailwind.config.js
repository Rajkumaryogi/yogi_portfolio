module.exports = {
   darkMode: "class", // enable class-based dark mode
  content: [
    "./index.html", // For vanilla projects
    "./src/**/*.{js,ts,jsx,tsx}", // For React, Vite, etc.
    "./pages/**/*.{js,ts,jsx,tsx}", // For Next.js
    "./components/**/*.{js,ts,jsx,tsx}", // For Next.js
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #0f6ebe,#11ffc0 )",
      },
      colors: {
        paragraph: "#252525", // Added here under `colors`
        textThemeColor: "#06d6a0",
        textWhiteColor: "#d8d1e2",
        inputColor: "#241c34",
        // backgroundColor: "#",
        backgroundColor: "rgb(11 1 28 / var(--tw-bg-opacity, 0.7))",
      },
      boxShadow: {
        navbar: '0px 0px 4px 0px rgba(255, 255, 255,0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      keyframes: {
        bounceHover: {
          "0%, 50%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-20px)" },
          "75%": { transform: "translateY(-7px)" },
        },
      },
    },
  },
  plugins: [],
};
