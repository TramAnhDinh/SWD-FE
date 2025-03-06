/** @type {import('tailwindcss').Config} */
export const content = [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
];
export const theme = {
    extend: {
        colors: {
            primary: "#FF6B6B", // Màu chính (có thể tuỳ chỉnh)
            secondary: "#1A202C", // Màu phụ
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // Font mặc định (nếu cần)
        },
    },
};
export const plugins = [];
  