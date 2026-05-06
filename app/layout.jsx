import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "Raiyan Zannat | Full Stack Developer",
  description:
    "Portfolio of Raiyan Zannat — Full Stack Developer crafting modern web experiences with React, Next.js, and Node.js.",
  keywords: ["developer", "portfolio", "react", "nextjs", "full stack"],
  openGraph: {
    title: "Raiyan Zannat | Full Stack Developer",
    description: "Full Stack Developer crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
