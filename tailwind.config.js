module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E4002B",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        foreground: "var(--color-text-primary)",
        muted: "var(--color-text-secondary)",
        "border-color": "var(--color-border)",
      },
      borderRadius: {
        md: "12px",
        lg: "20px",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Noto Sans",
          "Liberation Sans",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      boxShadow: {
        soft: "0px 4px 20px rgba(0,0,0,0.25)",
      },
    },
  },
};
