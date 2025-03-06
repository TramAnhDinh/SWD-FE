/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#FF6B6B",
          secondary: "#1A202C",
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        width: {
          custom: "300px" // Thêm width tùy chỉnh
        }
      },
    },
    plugins: [],
  };
  