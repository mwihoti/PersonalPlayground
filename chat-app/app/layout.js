import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./theme-prodiver";
import { ThemeSwitcher } from "./components";
import { switchThemeDuration } from "./constants";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "chat-app",
  description: "chat-app by mwihoti",
};
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}       