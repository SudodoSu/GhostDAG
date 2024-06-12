import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
      center: true,

      screens: {
        sm: "42rem",
        md: "42rem",
        lg: "56rem",
        xl: "96rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-blue":
          "linear-gradient(43deg,#25ff6f -98.02%,#001dff 91.33%)",
        "gradient-blue-reverse":
          "linear-gradient(223deg,#25ff6f -98.02%,#001dff 91.33%)",
        "gradient-blue-180": "linear-gradient(180deg, #06f, #001638)",
      },
      fontWeight: {
        titleBold: "var(--titleBold)",
        PRegular: "var(--PRegular)",
        Bold: "var(--Bold)",
        medium: "var(--medium)",
        ExtraBold: "var(--ExtraBold)",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: "#0c45e7",
        green: "#25ff6f",
        blue: "#001dff",
        background: "#1b1b1c",
        gray_filter: "#0d1521",
        gray1: "#a6b1c5",
      },
    },
  },
  plugins: [],
};
export default config;
