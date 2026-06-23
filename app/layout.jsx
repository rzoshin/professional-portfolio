import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import TerminalBoot from "@/components/TerminalBoot";
import TabTitleAnimator from "@/components/TabTitleAnimator";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Raiyan Zannat | Full Stack Developer",
  description:
    "Portfolio of Raiyan Zannat — Full Stack Developer crafting modern web experiences with React, Next.js, and Node.js.",
  keywords: ["developer", "portfolio", "react", "nextjs", "full stack"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Raiyan Zannat | Full Stack Developer",
    description: "Full Stack Developer crafting modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <TerminalBoot />
          <TabTitleAnimator />
          {children}
        </Providers>
      </body>
    </html>
  );
}
