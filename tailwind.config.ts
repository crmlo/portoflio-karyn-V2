import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        "ebony-clay": "#1F2933",
        malibu: "#8AA0FF",
        "malibu-lightest": "#F3F5FF",
        "background-primary": "#ffffff",
        "background-secondary": "#f5f5f5",
        "border-primary": "#e5e5e5",
      },
    },
  },
};

export default config;
