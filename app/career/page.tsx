"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

/* ================= ANIMATION ================= */
const container = {
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
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

/* ================= CONSTELLATIONS ================= */
const Constellations = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white opacity-20"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function Contact() {
  return (
    <div className="relative min-h-screen px-6 bg-[#030014] text-white overflow-hidden">

      <Constellations />

      {/* ================= TITLE ================= */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-4xl md:text-5xl pt-10 md:pt-20 font-bold text-center"
      >
        Career
      </motion.h1>

      {/* ================= CARD GRID ================= */}
      <motion.div
        variants={item}
        whileHover={{ y: -10 }}
        className="relative group w-full mt-12 max-w-sm mx-auto"
      >

        {/* ================= CARD BACKGROUND ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl transition-all duration-300">

          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-tr from-sky-500/20 via-purple-500/10 to-transparent blur-2xl"></div>

          {/* ================= CONTENT ================= */}
          <div className="relative p-8 flex flex-col items-center text-center">

            {/* ICON */}
            <div className="w-24 h-24 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition">
              <img
                src="https://static.vecteezy.com/system/resources/previews/014/768/945/non_2x/product-design-line-icon-vector.jpg"
                alt="Job Icon"
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Project Management Intern
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Assist in planning, organizing, and managing ongoing software, AI, IoT, and embedded system projects & Coordinate with developers, designers, and stakeholders to ensure smooth project execution and timely delivery.
            </p>

            {/* TAGS (optional modern touch) */}
            <div className="flex gap-2 mb-6 flex-wrap justify-center">
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-zinc-300">
                Remote
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-zinc-300">
                Full-time
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-zinc-300">
                Project Management
              </span>
            </div>

            {/* BUTTON */}
            <Link href="/career/frontend-dev" className="w-full">
              <button className="w-full bg-blue-400 hover:bg-blue-500 transition rounded-lg py-3 font-semibold text-white">
                Apply Now
              </button>
            </Link>

          </div>
        </div>
      </motion.div>

      
    </div>
  );
}