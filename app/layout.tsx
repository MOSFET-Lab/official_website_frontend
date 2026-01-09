import Navbar from "./components/Navbar"; // Import the Navbar
import type { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50 dark:bg-black">
        <Navbar /> {/* Navbar will show on every page */}
        {children}
      </body>
    </html>
  );
}
