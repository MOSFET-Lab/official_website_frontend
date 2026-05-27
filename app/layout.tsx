import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import type { ReactNode } from "react";
import "./globals.css";

import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black" suppressHydrationWarning>

        <Navbar />

        {children}

        <Footer />

        <ScrollToTopButton />

      </body>
    </html>
  );
}