"use client";

// 1. Import the icons at the very top
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {

  /* ================= EMAIL STATE ================= */
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  /* ================= AUTO HIDE MESSAGE ================= */
  useEffect(() => {

    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setMessageType("");
      }, 3000);

      return () => clearTimeout(timer);
    }

  }, [message]);

  /* ================= SUBMIT FUNCTION ================= */
  const handleSubmit = async () => {

    // Reset messages
    setMessage("");
    setMessageType("");

    // Remove spaces
    const trimmedEmail = email.trim();

    // Empty validation
    if (!trimmedEmail) {
      setMessage("Please enter your email");
      setMessageType("error");

      // Clear input
      setEmail("");

      return;
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");

      // Clear input
      setEmail("");

      return;
    }

    try {
      setLoading(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbygx_pMnZa07co0hG5cMzD1o6cuGj2W0P7DsELDTMu8u8G3bcrFoOAifOZfwJ7G5TJw/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: trimmedEmail,
          }),
        }
      );

      // Clear input
      setEmail("");

      // Success message
      setMessage("Subscribed Successfully!");
      setMessageType("success");

    } catch (error) {
      console.error(error);

      setMessage("Something went wrong");
      setMessageType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto px-10 py-20 grid gap-16 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-white flex items-center gap-2">
            MOSFET
          </h2>

          <p className="mt-4 text-sm leading-relaxed">
            A leading product manufacturer in AI, IoT, and advanced R&D prototypes.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex flex-wrap gap-2 mt-6">

            {/* Facebook */}
            <a
              href="https://web.facebook.com/MosfetOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg"
              title="Facebook"
            >
              <FaFacebookF className="text-xl" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mosfet_official/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg"
              title="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/mosfetofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg"
              title="LinkedIn"
            >
              <FaLinkedinIn className="text-xl" />
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@MosfetOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg"
              title="TikTok"
            >
              <FaTiktok className="text-xl" />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@MosfetOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center text-white cursor-pointer hover:scale-110 transition shadow-lg"
              title="YouTube"
            >
              <FaYoutube className="text-xl" />
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Services
          </h3>

          <div className="w-12 h-1 bg-black dark:bg-white rounded mt-2 mb-6"></div>

          <ul className="space-y-3 text-sm">
            <li>IoT Embedded System</li>
            <li>3D-Printed Manufacturing</li>
            <li>AI-Integrations</li>
            <li>Research & Development</li>
            <li>Mobile App Development</li>
            <li>Web App Development</li>
          </ul>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Quick Links
          </h3>

          <div className="w-12 h-1 bg-black dark:bg-white rounded mt-2 mb-6"></div>

          <ul className="space-y-3 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Our Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white">
            Subscribe Us
          </h3>

          <div className="w-12 h-1 bg-black dark:bg-white rounded mt-2 mb-6"></div>

          <p className="text-sm mb-4">
            Stay Updated with the Latest!
            <br />
            Subscribe Now for Exclusive Updates and Offers.
          </p>

          {/* EMAIL INPUT */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-zinc-200 dark:bg-zinc-800 outline-none mb-4 border border-transparent focus:border-blue-400"
            required
          />

          {/* MESSAGE */}
          {message && (
            <p
              className={`text-sm mb-4 font-medium ${messageType === "success"
                ? "text-green-500"
                : "text-red-500"
                }`}
            >
              {message}
            </p>
          )}

          {/* SUBMIT BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-500 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t bg-sky-500/20 border-zinc-200 dark:border-zinc-800 py-6 text-center text-[10px] sm:text-sm px-4">
        Copyright © 2026 MOSFET (Pvt) Ltd | All Rights Reserved.
      </div>
    </footer>
  );
}