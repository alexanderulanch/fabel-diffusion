// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if window is defined (client-side rendering)
    if (typeof window !== "undefined") {
      // Initialize isDarkMode based on user's preference or localStorage value
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const initialIsDarkMode =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) && prefersDarkMode);
      setIsDarkMode(initialIsDarkMode);

      if (initialIsDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;
