"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";


/* ================= ANIMATION VARIANTS ================= */
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
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">3D</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/portfolio" className="hover:text-blue-400 transition-colors">PORTFOLIO</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">3D</span>
          </div>
        </motion.div>
      </section>




 {/* ================= Top Buttons ================= */}
{/* <div className="mt-10 flex flex-wrap gap-3 justify-center mb-10">
  
  <Link href="/portfolio/">
    <button className="px-6 py-2 rounded-full bg-blue-400 font-medium">
      ALL
    </button>
  </Link>

  <Link href="/portfolio/iot">
    <button className="px-6 py-2 rounded-full bg-white font-medium">
      IOT
    </button>
  </Link>

  <Link href="/portfolio/ai">
    <button className="px-6 py-2 rounded-full bg-white font-medium">
      AI and ML
    </button>
  </Link>

  <Link href="/portfolio/threeD">
    <button className="px-6 py-2 rounded-full bg-white font-medium">
      3D
    </button>
  </Link>

 

</div> */}



       {/* ================= PORTFOLIO GRID ================= */}
   <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="
    container mx-auto
    px-4 sm:px-5 md:px-6 lg:px-37
    mt-12 mb-20
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-4
    gap-5 sm:gap-6 md:gap-7 lg:gap-8
  "
>

      {[
        { title: "Raspberry Pi 4 Enclosure", img: "/seven.jpg" },
        { title: "Gear Mount Bracket | 3D-Printed Manufacturing", img: "/eight.jpg" },
        { title: "Raspberry Pi 5 Desktop Enclosure", img: "/nine.jpg" },
        { title: "Wearable Device Enclosure", img: "/ten.jpg" },
        
        { title: "Mechanical Part with Servo Mount", img: "/eleven.jpg" },
        { title: "Smart Sun Tracking System", img: "/twelve.jpg" },
        { title: "Leaf Lamp", img: "https://preview.redd.it/i-designed-those-3d-printed-lamps-and-thought-some-of-you-v0-kgq2lu4t6sae1.jpg?width=640&crop=smart&auto=webp&s=60254865b65cbf6d29abc808299680a331a416f5" },
        { title: "Night Lamp", img: "https://giftmebazar.com/uploads/items/19672/largeNight-Lamp-Base-Leaf-Rgb-red.jpg" },
        { title: "Yoga Poses Detection using OpenPose", img: "https://loxidesign.com/cdn/shop/products/image-1_1ff43f84-f6e5-411e-9192-6b0f5c6a58cf.png?v=1681856511" },
      


        
      ].map((project, index) => (
        <motion.div
          key={index}
          variants={item}
          className="relative rounded-3xl overflow-hidden group cursor-pointer"
        >
         <img
  src={project.img}
  alt={project.title}
  className="
    w-full
    aspect-square
    object-cover
    group-hover:scale-110
    transition duration-300
  "
/>



          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <h3 className="text-white text-xl font-bold tracking-tight">
              {project.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
    </>
  );




}