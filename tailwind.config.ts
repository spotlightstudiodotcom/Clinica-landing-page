
import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Inter": ["Inter", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "1440": "1440px",
      },
    },
  },
  plugins: [],
});
export default config;
