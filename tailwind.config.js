/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-me': 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.2), rgba(255, 255, 255, 0.8)), url("path/to/images/me.png")'
      },
      fontFamily: {
        InterBlack: "InterBlack",
        InterBold: "InterBold",
        InterMedium: "InterMedium",
        InterRegular: "InterRegular",
      },
    },
  },
  plugins: [],
};