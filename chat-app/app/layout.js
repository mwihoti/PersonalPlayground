import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./provider";



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
        className={inter.className}
      >
        <Providers>
        <main>{children}</main>
        </Providers>
      
          
          
     
      </body>
    </html>
  );
}       