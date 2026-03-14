import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { buildTheme } from "../theme/mui-themes";
import { tokens } from "../theme/tokens";

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

const applyCSSVariables = (mode) => {
  const t = tokens(mode);
  const root = document.documentElement;
  root.style.setProperty("--color-background", t.colors.background);
  root.style.setProperty("--color-surface", t.colors.surface);
  root.style.setProperty("--color-text-primary", t.colors.textPrimary);
  root.style.setProperty("--color-text-secondary", t.colors.textSecondary);
  root.style.setProperty("--color-border", t.colors.border);
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("themeMode") || "dark"
  );

  const setThemeMode = (newMode) => {
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
    applyCSSVariables(newMode);
  };

  // Apply on initial load
  useEffect(() => {
    applyCSSVariables(mode);
  }, []);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setThemeMode }}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
};
