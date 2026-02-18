"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // For active link
  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    // { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo - THIS IS YOUR HOME BUTTON */}
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-black dark:text-white">
          <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10 shadow-lg">
           <Image 
              src="/mos.png" 
              alt="MOSFET Logo"
              width={35}  
              height={35} 
              className="object-cover"
              priority 
            />
          </div>
          <span className="tracking-tighter">MOSFET</span>
        </Link>

        {/* Desktop Menu - No "Home" word anymore */}
        <ul className="hidden md:flex items-center gap-12"> {/* Reduced gap from 18 to 12 for better spacing */}
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition ${
                pathname === link.href ? "font-semibold text-black dark:text-white" : "font-normal"
              }`}
            >
              {link.name}
              {/* Underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black dark:bg-white transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block rounded-full bg-black px-6 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
        >
          Get In Touch
        </Link>

        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-black dark:bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 pt-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg ${pathname === link.href ? "text-black dark:text-white font-bold" : "text-zinc-500"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-xl bg-blue-500 py-3 text-center text-sm font-bold text-white shadow-lg shadow-blue-500/30"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </Link>
        </ul>
      )}
    </nav>
  );
}