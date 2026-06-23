"use client";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      themes={["dark", "light", "hacker"]}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  );
}
