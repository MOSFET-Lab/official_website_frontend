"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-6 z-50 p-4 rounded-full bg-blue-400 text-white shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-110
      ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <FaArrowUp />
    </button>
  );
}