/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        myshadow: "10px 10px 20px rbga(0,0,0,1)",
      },
      backgroundImage: {
        mobile: "url('../images/bg-main-mobile.png')",
        desktop: "url('../images/bg-main-desktop.png')",
      },
      colors: {
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        VeryDarkViolet: "hsl(278, 68%, 11%)",
      },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        lg: "1114px",
        xl: "1114px",
        "2xl": "1114px",
      },
    },
  },
  plugins: [],
};
