/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // Add custom text shadows here
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Default text-shadow
        lg: '4px 4px 6px rgba(0, 0, 0, 0.5)',      // Large text-shadow
        teal: '20px 20px 20px rgba(0, 128, 128, 0.7)', // Teal text shadow
        green: '20px 20px 20px rgba(0, 128, 0, 0.7)',  // Green text shadow
        rose: '20px 20px 20px rgba(255, 0, 128, 0.7)', // Rose text shadow using RGBA
        lime: '20px 20px 20px rgba(0, 255, 0, 0.7)',   // Lime text shadow
      },
      boxShadow: {
        teal: '0 4px 8px rgba(0, 128, 128, 0.7)',  // Teal box shadow
        green: '0 4px 8px rgba(0, 128, 0, 0.7)',   // Green box shadow
        rose: '0 4px 8px rgba(255, 0, 128, 0.7)',  // Rose box shadow
        lime: '0 4px 8px rgba(0, 255, 0, 0.7)',    // Lime box shadow
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '4px 4px 6px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-teal': {
          textShadow: '20px 20px 20px rgba(0, 128, 128, 0.7)',
        },
        '.text-shadow-green': {
          textShadow: '20px 20px 20px rgba(0, 128, 0, 0.7)', // Green shadow
        },
        '.text-shadow-rose': {
          textShadow: '20px 20px 20px rgba(255, 0, 128, 0.7)', // Rose shadow
        },
        '.text-shadow-lime': {
          textShadow: '20px 20px 20px rgba(0, 255, 0, 0.7)',   // Lime shadow
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
