import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
  reducedMotion: boolean;
  setReducedMotion: (reducedMotion: boolean) => void;
  toggleReducedMotion: () => void;
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType,
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [darkMode, _setDarkMode] = useState(false);
  const [reducedMotion, _setReducedMotion] = useState(false);

  useEffect(() => {
    // Theme
    const lsTheme = localStorage.theme;
    if (lsTheme === "dark") {
      setDarkMode(true);
    } else if (lsTheme === "light") {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }

    // Reduced motion
    const mediaPrefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const lsReducedMotion = localStorage.reducedMotion;
    if (mediaPrefersReducedMotion.matches || lsReducedMotion === "true") {
      setReducedMotion(true);
    } else {
      setReducedMotion(false);
    }

    setLoading(false);
  }, []);

  const setDarkMode = (dark: boolean) => {
    if (dark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      _setDarkMode(true);
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      _setDarkMode(false);
    }
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  const setReducedMotion = (reduced: boolean) => {
    localStorage.reducedMotion = reduced;
    _setReducedMotion(reduced);
  };

  const toggleReducedMotion = () => {
    if (reducedMotion) {
      setReducedMotion(false);
    } else {
      setReducedMotion(true);
    }
  };

  const memoedTheme = useMemo(
    () => ({
      darkMode,
      setDarkMode,
      toggleDarkMode,
      reducedMotion,
      setReducedMotion,
      toggleReducedMotion,
    }),
    [darkMode, reducedMotion],
  );

  return (
    <ThemeContext.Provider value={memoedTheme}>
      {!loading && children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
