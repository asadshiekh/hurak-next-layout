/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        primary: '#0f7c90',     // Custom primary color
        secondary: '#e14958',   // Custom secondary color
      },
      backgroundImage:{
        'homebanner':"url('/images/banner.webp')"
      }
    },
  },
  plugins: [
    
  ],
};
