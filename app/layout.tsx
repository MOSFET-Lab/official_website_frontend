import Navbar from "./components/Navbar"; // Import the Navbar
import Footer from "./components/Footer";
import type { ReactNode } from "react";
// @ts-ignore: side-effect import of CSS file
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black" suppressHydrationWarning>

        <Navbar /> 
          {children}
        <Footer />
      
      </body>
    </html>
  );
}
