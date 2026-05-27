"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
  ];

  return (
    <nav className="w-full bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 text-2xl font-bold text-white"
        >
          <Image
            src="/MOSFET.webp"
            alt="MOSFET Logo"
            width={95}
            height={95}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-zinc-300 hover:text-white transition ${pathname === link.href
                ? "font-semibold text-white"
                : "font-normal"
                }`}
            >
              {link.name}

              {/* Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white transition-all duration-300 ${pathname === link.href
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </Link>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-white text-black px-4 py-2 rounded text-[14px] font-medium hover:bg-zinc-200 transition"
        >
          Get In Touch
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""
              }`}
          />

          <span
            className={`block h-0.5 w-6 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-black border-t border-zinc-800 pt-4">

          {links
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg pl-2 transition ${pathname === link.href
                    ? "text-white font-bold"
                    : "text-zinc-300"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="bg-white text-black px-4 py-3 rounded text-center text-sm font-medium hover:bg-zinc-200 transition"
            onClick={() => setIsOpen(false)}
          >
            Get In Touch
          </Link>
        </ul>
      )}
    </nav>
  );
}