export const tokens = (mode) => {
  const isDark = mode === "dark";

  return {
    colors: {
      primary: "#E4002B",

      background: isDark ? "#000000" : "#F2F2F2",
      surface: isDark ? "#1C1816" : "#FFFFFF",

      textPrimary: isDark ? "#FFFFFF" : "#111111",
      textSecondary: isDark ? "#A3A3A3" : "#555555",

      border: isDark ? "#2A2A2A" : "#E0E0E0",
    },

    spacing: 8,

    radius: {
      sm: 8,
      md: 12,
      lg: 20,
    },

    shadows: {
      soft: isDark
        ? "0px 4px 20px rgba(0,0,0,0.35)"
        : "0px 4px 20px rgba(0,0,0,0.08)",

      strong: isDark
        ? "0px 10px 40px rgba(0,0,0,0.5)"
        : "0px 10px 40px rgba(0,0,0,0.15)",
    },

    typography: {
      fontFamily: `system-ui, -apple-system, "Segoe UI", Roboto,
        "Helvetica Neue", "Noto Sans", "Liberation Sans",
        Arial, "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", "Noto Color Emoji"`,

      h1: 48,
      h2: 36,
      h3: 28,
      body: 16,
      small: 14,
    },
  };
};
