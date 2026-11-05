import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF9F5",
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F3ED",
          accent: "#ECE8DC",
        },
        foreground: {
          DEFAULT: "#1A1815",
          muted: "#68645C",
          subtle: "#8A857B",
        },
        border: {
          DEFAULT: "#E3DFD5",
          strong: "#C8C2B3",
        },
        gold: {
          primary: "#9B783E",
          hover: "#846532",
          muted: "#D8C8A8",
          subtle: "#FBF7EE",
          border: "#E7DCB9",
        },
        status: {
          success: {
            bg: "#F0F7F2",
            border: "#CDE6D4",
            text: "#1E6536",
          },
          warning: {
            bg: "#FEF9EC",
            border: "#F5E1AA",
            text: "#8C6514",
          },
          danger: {
            bg: "#FDF2F2",
            border: "#F8CBCB",
            text: "#A62424",
          },
          info: {
            bg: "#F0F5FA",
            border: "#CDE0F3",
            text: "#1A538C",
          },
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(26, 24, 21, 0.04), 0 1px 2px -1px rgba(26, 24, 21, 0.02)",
        elevation: "0 4px 6px -1px rgba(26, 24, 21, 0.06), 0 2px 4px -2px rgba(26, 24, 21, 0.03)",
        popover: "0 10px 15px -3px rgba(26, 24, 21, 0.08), 0 4px 6px -4px rgba(26, 24, 21, 0.03)",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
      },
    },
  },
  plugins: [],
};

export default config;
