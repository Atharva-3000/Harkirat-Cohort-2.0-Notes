import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",  since we are no longer using the pages directory, as we are using the app directory
    
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
export default config;
