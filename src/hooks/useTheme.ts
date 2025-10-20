import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Initiale Theme-Erkennung nach dem Mount
    if (document.documentElement.classList.contains("light")) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    // sets the theme by adding the html class
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return { theme, setTheme };
}