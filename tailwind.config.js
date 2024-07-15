/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/**/*.{js,ts,jsx,tsx,css}' // Add the content patterns from the second file
  ],
  corePlugins: {
    preflight: false, // Set to false as in the second file
  },
  important: '#__next', // Set to '#__next' as in the second file
  plugins: [
    require('tailwindcss-logical'), // Add the plugins from the second file
    require('./src/@core/tailwind/plugin')
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Add any other theme extensions from the first file
    },
    // Ensure to include any theme extensions or modifications from the second file
  },
};
