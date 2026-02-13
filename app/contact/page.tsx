"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube
} from "react-icons/fa";

/* ================= ANIMATION VARIANTS ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= CONSTELLATIONS COMPONENT ================= */
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
      <svg className="w-full h-full opacity-40">
        {connections.map((line, i) => (
          <motion.line
            key={`line-${i}`}
            stroke="white"
            strokeWidth="0.6"
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
          className="absolute rounded-full bg-white shadow-[0_0_10px_#fff,0_0_15px_#fff]"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            x: [0, `${star.driftX}vw`, 0],
            y: [0, `${star.driftY}vh`, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

export default function Contact() {
  const socialLinks = [
    { Icon: FaFacebookF, href: "https://web.facebook.com/MosfetOfficial", label: "Facebook" },
    { Icon: FaInstagram, href: "https://www.instagram.com/mosfet_official/", label: "Instagram" },
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/mosfetofficial/", label: "LinkedIn" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/", label: "TikTok" },
    { Icon: FaYoutube, href: "https://www.youtube.com/", label: "YouTube" },
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
  <section className="relative h-[20vh] sm:h-[22vh] md:h-[35vh] w-full overflow-hidden flex items-center justify-center bg-[#030014]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#588be8] to-[#030014]" />
        
        <Constellations />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">Contact</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">Contact</span>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <div className=" md:px-[150px] min-h-screen bg-zinc-950 py-5 text-white overflow-hidden">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Let’s Get In Touch
          <br />
          <span className="text-blue-400">to talk about your project</span>
        </motion.h1>

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          {/* FORM */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="bg-white text-black rounded-2xl p-8 shadow-2xl"
          >
            <form className="space-y-4">
              {["Name", "Phone", "Email", "Subject"].map((f) => (
                <motion.input
                  key={f}
                  whileFocus={{ scale: 1.03 }}
                  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder={f}
                />
              ))}

              <motion.textarea
                whileFocus={{ scale: 1.03 }}
                className="w-full border rounded-lg px-4 py-3 h-28 outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Message"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-400 hover:bg-purple-400 transition rounded-lg py-3 font-semibold text-white"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* INFO */}
          <motion.div
            variants={item}
            
            className="bg-white text-black rounded-2xl p-8 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Call Anytime",
                  text:  "+94 76 786 5190",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Send Email",
                  text: "contact@mosfet.com",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Us",
                  text: "No 23, Kandy-Jaffna Hwy, Anuradhapura, Sri Lanka, 50100",
                },
              ].map((i, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 cursor-pointer"
                >
                  <div className="bg-blue-400 p-3 rounded-xl text-white text-lg">
                    {i.icon}
                  </div>
                  <div>
                    <p className="font-semibold">{i.title}</p>
                    <p className="text-sm">{i.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SOCIAL */}
            <div className="mt-10">
              <p className="font-semibold mb-6 text-center">Follow us</p>
              <div className="flex justify-center mb-20 gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-400 p-3 rounded-xl cursor-pointer text-white flex items-center justify-center shadow-lg"
                    title={social.label}
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}