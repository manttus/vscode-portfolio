import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        foreground: "var(--foreground)",
        background: "var(--background)",
        bar: "var(--bar)",
        activity: "var(--activity)",
        footer: "var(--footer)",
        remote: "var(--remote)",
      },
      fontSize: {
        status: "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
