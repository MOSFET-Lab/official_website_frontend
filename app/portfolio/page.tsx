"use client";

import React, { useMemo, useState } from "react"; // Added useState
import { motion } from "framer-motion";
import Link from "next/link";
import { easeOut } from "framer-motion";


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
    transition: { duration: 0.7, ease: easeOut },
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

  // 1. Setup State for filtering
  const [filter, setFilter] = useState("ALL");

  // 2. Your project array with categories added
  const allProjects = [
    { title: "Expressway Vehicle Monitoring System for Speed Limit Violations", img: "./one.jpg", category: "IOT" },
    { title: "NFC based Dual-Factor Authentication Device", img: "./NFC based Dual-Factor Authentication Device.jpg", category: "IOT" },
    { title: "Smart Home Hub", img: "./three.jpg", category: "IOT" },
    { title: "SafeZone Obstacle Alert System - Smart Home", img: "./SafeZone Obstacle Alert System - Smart Home.jpg", category: "IOT" },

    { title: "AI-Powered Smart Fitness Wear for Sports", img: "/AI-Powered Smart Fitness Wear for Sports.jpg", category: "AI" },
    { title: "Geer Wheel", img: "/Geer Wheel.jpg", category: "threeD" },
    { title: "Fake Banknote Recognition AI model", img: "/six.jpg", category: "AI" },
    { title: "AI-Based Plant Leaf Disease Detection System", img: "/AI-Based Plant Leaf Disease Detection System.jpg", category: "AI" },

    { title: "Gear Box Parts", img: "./Gear Box Parts.jpg", category: "threeD" },
    { title: "Gear Mount Bracket", img: "./eight.jpg", category: "threeD" },
    { title: "Raspberry Pi 5 Desktop Enclosure", img: "./nine.jpg", category: "threeD" },
    { title: "Wearable Device Enclosure", img: "./ten.jpg", category: "threeD" },
    { title: "Mechanical Part with Servo Mount", img: "./eleven.jpg", category: "threeD" },
    { title: "Smart Sun Tracking System", img: "/twelve.jpg", category: "threeD" },
  ];

  // 3. Filter Logic
  const filteredProjects = filter === "ALL"
    ? allProjects
    : allProjects.filter(project => project.category === filter);


  return (
    <>
      {/* ================= HERO SECTION ================= */}

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl pt-6 font-bold text-center text-white md:pt-20"
      >
        Portfolio
      </motion.h1>

      {/* ================= Top Buttons ================= */}
      {/* ================= Top Buttons ================= */}
      <div className="mt-8 md:mt-10 mb-8 md:mb-10 px-2">

        <div className="flex justify-center">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto no-scrollbar max-w-full">

            {[
              { key: "ALL", label: "ALL" },
              { key: "IOT", label: "IOT" },
              { key: "AI", label: "AI & ML" },
              { key: "threeD", label: "3D" },
            ].map((btn) => (
              <button
                key={btn.key}
                onClick={() => setFilter(btn.key)}
                className={`
            whitespace-nowrap
            px-4 sm:px-5 md:px-6
            py-2 sm:py-2.5
            text-xs sm:text-sm md:text-base
            rounded-full font-medium
            transition-all duration-300
            ${filter === btn.key
                    ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                    : "bg-white/90 text-black hover:bg-white"
                  }
          `}
              >
                {btn.label}
              </button>
            ))}

          </div>
        </div>

      </div>

      {/* ================= PORTFOLIO GRID ================= */}
      <motion.div
        key={filter} // Adding a key here ensures the animation triggers when the list changes
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-37 mt-12 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
      >
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            href={`/portfolio/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <motion.div
              variants={item}
              className="relative rounded-3xl overflow-hidden group cursor-pointer aspect-square"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold tracking-tight">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </>
  );
}