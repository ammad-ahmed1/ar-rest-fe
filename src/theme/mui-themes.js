import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

export const buildTheme = (mode = "dark") => {
  const themeTokens = tokens(mode);
  return createTheme({
  spacing: themeTokens.spacing,

  palette: {
    mode,
    primary: {
      main: themeTokens.colors.primary,
    },
    background: {
      default: themeTokens.colors.background,
      paper: themeTokens.colors.surface,
    },
    text: {
      primary: themeTokens.colors.textPrimary,
      secondary: themeTokens.colors.textSecondary,
    },
    divider: themeTokens.colors.border,
  },

  shape: {
    borderRadius: themeTokens.radius.md,
  },

  typography: {
    fontFamily: themeTokens.typography.fontFamily,

    h1: {
      fontSize: themeTokens.typography.h1,
      fontWeight: 700,
    },
    h2: {
      fontSize: themeTokens.typography.h2,
      fontWeight: 600,
    },
    h3: {
      fontSize: themeTokens.typography.h3,
      fontWeight: 600,
    },
    body1: {
      fontSize: themeTokens.typography.body,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: themeTokens.radius.md,
          padding: "12px 24px",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: themeTokens.colors.surface,
          boxShadow: themeTokens.shadows.soft,
        },
      },
    },
  },
});
};
