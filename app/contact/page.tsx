"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube
} from "react-icons/fa";

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= CONSTELLATIONS (UNCHANGED) ================= */
const Constellations = () => {
  const count = 45;

  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      driftX: (Math.random() - 0.5) * 12,
      driftY: (Math.random() - 0.5) * 12,
      duration: Math.random() * 15 + 10,
    })), []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < stars.length - 1; i++) {
      if (i % 3 === 0) {
        lines.push({ from: stars[i], to: stars[i + 1] });
      }
    }
    return lines;
  }, [stars]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-30">
        {connections.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            stroke="#60a5fa"
            strokeWidth="0.5"
            animate={{
              x1: [`${line.from.x}%`, `${line.from.x + line.from.driftX}%`, `${line.from.x}%`],
              y1: [`${line.from.y}%`, `${line.from.y + line.from.driftY}%`, `${line.from.y}%`],
              x2: [`${line.to.x}%`, `${line.to.x + line.to.driftX}%`, `${line.to.x}%`],
              y2: [`${line.to.y}%`, `${line.to.y + line.to.driftY}%`, `${line.to.y}%`],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            x: [0, `${star.driftX}vw`, 0],
            y: [0, `${star.driftY}vh`, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* ================= MAIN ================= */
export default function Contact() {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://web.facebook.com/MosfetOfficial", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/mosfet_official/", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/mosfetofficial/", label: "LinkedIn" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/", label: "TikTok" },
    { Icon: FaYoutube, href: "https://www.youtube.com/", label: "YouTube" },
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">

      <Constellations />

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center pt-16 md:pt-24"
      >
        Let’s Get In Touch
        <br />
        <span className="text-blue-400">to talk about your project</span>
      </motion.h1>

      {/* ================= CONTENT ================= */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-20 grid md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto"
      >

        {/* ================= FORM ================= */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-3xl p-px bg-linear-to-r from-blue-500/30 via-cyan-400/20 to-purple-500/30"
        >
          <div className="bg-white/10 backdrop-blur-xl text-white rounded-3xl p-8 shadow-2xl border border-white/10">

            <form className="space-y-4">
              {["Name", "Phone", "Email", "Subject"].map((f) => (
                <motion.input
                  key={f}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={f}
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-xl px-4 py-3 h-28 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Message"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-xl py-3 font-semibold text-white shadow-lg"
              >
                Send Message
              </motion.button>
            </form>

          </div>
        </motion.div>

        {/* ================= INFO ================= */}
        <motion.div
          variants={item}
          className="relative rounded-3xl p-px bg-linear-to-r from-blue-500/30 via-cyan-400/20 to-purple-500/30"
        >
          <div className="bg-white/10 h-full backdrop-blur-xl text-white rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between">

            <div className="space-y-6">

              {/* CALL */}
              <motion.a
                href="tel:+94767865190"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold">Call Anytime</p>
                  <p className="text-sm text-white/70">
                    +94 76 786 5190
                  </p>
                </div>
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href="https://wa.me/message/KRFV3QRCXYJFG1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold">Call WhatsApp</p>
                  <p className="text-sm text-white/70">
                    +94 76 786 5190
                  </p>
                </div>
              </motion.a>

              {/* EMAIL */}
              <motion.a
                href={`mailto:contact@mosfet.com?subject=Project Inquiry&body=Hello MOSFET,%0D%0A%0D%0AI would like to discuss my project with your team.`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold">Send Email</p>
                  <p className="text-sm text-white/70">
                    contact@mosfet.com
                  </p>
                </div>
              </motion.a>

              {/* LOCATION */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-sm text-white/70">
                    Anuradhapura, Sri Lanka
                  </p>
                </div>
              </motion.div>

            </div>

            {/* SOCIAL */}
            <div className="mt-10">
              <p className="font-semibold text-center mb-6 text-white/80">
                Follow us
              </p>

              <div className="flex justify-center gap-3 flex-wrap">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-500/20 border border-blue-400/30 p-3 rounded-xl text-white shadow-lg hover:bg-blue-500/40 transition"
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}