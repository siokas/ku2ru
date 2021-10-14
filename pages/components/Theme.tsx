import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="h-12 w-24 order-2 md:order-3 logo-font text-black dark:text-white"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "LGT" : "DRK"}
      {/* 🌕🌑 */}
    </button>
  );
}
