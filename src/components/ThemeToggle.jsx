import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const systemPrefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light")
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl border px-4 py-2 shadow-sm transition hover:-translate-y-0.5"
    >
      {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
}
