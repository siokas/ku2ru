import "tailwindcss/tailwind.css";
import "/styles/main.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class" storageKey="theme">
      <div className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 ">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;
