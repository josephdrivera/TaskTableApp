/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // assuming your pages are within a 'pages' directory at the root
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // for any files within the 'app' directory
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // for your components
    // "./public/**/*.html", // if you have HTML files in your public directory that use Tailwind classes
    // any other paths where you use Tailwind CSS classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
