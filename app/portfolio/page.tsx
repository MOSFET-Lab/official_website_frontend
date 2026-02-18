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
    { title: "Smart Home Water Quality Monitor Unit", img: "./two.jpg", category: "IOT" },
    { title: "Smart Home Hub", img: "./three.jpg", category: "IOT" },

    { title: "AI-based spaghetti failure detection system for 3D printers", img: "/four.jpg", category: "AI" },
    { title: "AI-based IoT Greenhouse", img: "/five.jpg", category: "AI" },
    { title: "Fake Banknote Recognition AI model", img: "/six.jpg", category: "AI" },
    { title: "SmartVision: Multi-Class Segmentation AI", img: "/thirteen.jpg", category: "AI" },

    { title: "Raspberry Pi 4 Enclosure", img: "./seven.jpg", category: "threeD" },
    { title: "Gear Mount Bracket", img: "./eight.jpg", category: "threeD" },
    { title: "Raspberry Pi 5 Desktop Enclosure", img: "./nine.jpg", category: "threeD" },
    { title: "Wearable Device Enclosure", img: "./ten.jpg", category: "threeD" },
    { title: "Mechanical Part with Servo Mount", img: "./eleven.jpg", category: "threeD" },
    { title: "Smart Sun Tracking System", img: "/twelve.jpg", category: "threeD" },
    { title: "Leaf Lamp", img: "https://preview.redd.it/i-designed-those-3d-printed-lamps-and-thought-some-of-you-v0-kgq2lu4t6sae1.jpg?width=640&crop=smart&auto=webp&s=60254865b65cbf6d29abc808299680a331a416f5", category: "threeD" },
    { title: "Night Lamp", img: "https://giftmebazar.com/uploads/items/19672/largeNight-Lamp-Base-Leaf-Rgb-red.jpg", category: "threeD" },
    { title: "MushRoom", img: "https://loxidesign.com/cdn/shop/products/image-1_1ff43f84-f6e5-411e-9192-6b0f5c6a58cf.png?v=1681856511", category: "threeD" },
    { title: "Cactus", img: "https://c10.patreonusercontent.com/4/patreon-media/p/post/108015814/2a1ad709523849acad6bd9b1da9d741a/eyJ3IjoxMDgwfQ%3D%3D/1.jpg?token-hash=jYV1JmHSEQD61zW2JBBuo4K61v9PH3wcCg2IvFRpKFA%3D&token-time=1771459200", category: "threeD" },
    { title: "Metal", img: "https://www.3dnatives.com/en/wp-content/uploads/sites/2/perfum_cover-1.jpg", category: "threeD" },
  ];

  // 3. Filter Logic
  const filteredProjects = filter === "ALL" 
    ? allProjects 
    : allProjects.filter(project => project.category === filter);


  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[20vh] sm:h-[22vh] md:h-[35vh] w-full overflow-hidden flex items-center justify-center bg-[#030014]">
        <div className="absolute inset-0 bg-linear-to-b from-[#030014] via-[#588be8] to-[#030014]" />
        
        <Constellations />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">Portfolio</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">Portfolio</span>
          </div>
        </motion.div>
      </section>

      {/* ================= Top Buttons ================= */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center mb-10">
        <button 
          onClick={() => setFilter("ALL")}
          className={`px-6 py-2 rounded-full font-medium transition ${filter === "ALL" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
        >
          ALL
        </button>

        <button 
          onClick={() => setFilter("IOT")}
          className={`px-6 py-2 rounded-full font-medium transition ${filter === "IOT" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
        >
          IOT
        </button>

        <button 
          onClick={() => setFilter("AI")}
          className={`px-6 py-2 rounded-full font-medium transition ${filter === "AI" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
        >
          AI and ML
        </button>

        <button 
          onClick={() => setFilter("threeD")}
          className={`px-6 py-2 rounded-full font-medium transition ${filter === "threeD" ? "bg-blue-400 text-white" : "bg-white text-black"}`}
        >
          3D
        </button>
      </div>

      {/* ================= PORTFOLIO GRID ================= */}
      <motion.div
        key={filter} // Adding a key here ensures the animation triggers when the list changes
        variants={container}
        initial="hidden"
        animate="show"
        className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-37 mt-12 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
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