import { writeFileSync } from "node:fs";

const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;

const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;

writeFileSync("tailwind.config.js", tailwindConfig);
writeFileSync("postcss.config.js", postcssConfig);

console.log("Configs Tailwind générés ✅");
