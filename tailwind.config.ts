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
        sm: "36rem",
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

        "gradient-66": "linear-gradient(to top right, #d0e8fb, #0370ca)",
        "gradient-33": "linear-gradient(to top right, #bcf9d9, #03ca61)",
        "gradient-1": "linear-gradient(to top right, #b276ff, #5a03ca)",
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
        gray2: "#26262a",
      },
    },
  },
  plugins: [],
};
export default config;
