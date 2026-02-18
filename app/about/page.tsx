"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";


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
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">About</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">About</span>
          </div>
        </motion.div>
      </section>






      {/* ================= WHO WE ARE SECTION ================= */}
      <section className="relative px-10 py-10 overflow-hidden bg-[#030014]">
        {/* Background Dot Pattern matching the image */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />


 {/* <div className="max-w-[1225px] mx-auto relative z-10"></div> */}
        <div className="max-w-[1225px] mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-center text-4xl md:text-5xl font-bold mb-20"
          >
            Who we are?
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-12"
          >
            {/* Logo Card - Pulled to the left margin */}
            <motion.div variants={item} className="w-full md:w-[450px] shrink-0">
              <div className="bg-white rounded-[40px] p-12 aspect-square flex items-center justify-center shadow-2xl">
                {/* Replace with your actual logo path */}
                <img 
                  src="./about.jpg" 
                  alt="Zfrozen Logo" 
                  className="w-full h-auto object-contain scale-110" 
                />
              </div>
            </motion.div>

            {/* Content Text - Positioned to the right of the image */}
            <motion.div variants={item} className="flex flex-col items-start pt-10 space-y-6">
              <div className="bg-[#63b3ed] px-8 py-2.5 rounded-full text-black font-bold text-sm uppercase tracking-wide">
                About Our Company
              </div>
              
              <p className="text-white text-lg md:text-xl leading-relaxed font-light opacity-90 text-justify">
                &quot;MOSFET (PVT) Ltd is a dynamic team of graduates from South Eastern University, Sri Lanka, 
                united by a common passion for IT-related projects. Established in January 2026, our journey 
                began as a collective vision to excel in the realm of technology. Rooted in our academic 
                foundation, we have evolved into a dedicated force, committed to delivering innovative and 
                impactful IT solutions. Explore our journey as we continue to push boundaries and shape the 
                future of technology.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>






      {/* ================= VISION SECTION ================= */}
      <section className="relative px-10 py-10 overflow-hidden bg-[#030014]">
        {/* Background Dot Pattern matching the image */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />


 {/* <div className="max-w-[1225px] mx-auto relative z-10"></div> */}
        <div className="max-w-[1225px] mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-center text-4xl md:text-5xl font-bold mb-20"
          >
            Vision
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-12"
          >
            {/* Logo Card - Pulled to the left margin */}
           <motion.div variants={item} className="w-full md:w-[450px] shrink-0">
              <div className="bg-white rounded-[40px] aspect-square flex items-center justify-center shadow-2xl overflow-hidden relative">
                {/* Removed p-12 so the image hits the edges */}
                <img 
                  src="https://www.cloud.studio/wp-content/uploads/2025/02/DeWatermarkai_1739974344189_enhanced-1024x683.webp" 
                  alt="Zfrozen Logo" 
                  className="w-full h-full object-cover" 
                  /* object-cover ensures the image fills the entire 450x450 area */
                />
              </div>
            </motion.div>

            {/* Content Text - Positioned to the right of the image */}
            <motion.div variants={item} className="flex flex-col items-start pt-10 space-y-6">
              <div className="bg-[#63b3ed] px-8 py-2.5 rounded-full text-black font-bold text-sm uppercase tracking-wide">
                Vision of Our Company
              </div>
              
              <p className="text-white text-lg md:text-xl leading-relaxed font-light opacity-90 text-justify">
                &quot;Empowering innovation, enriching lives" 
                <span> Our Vision is to be a leading provider of transformative IT solutions, pushing boundaries and enriching lives through innovation and excellence.&quot;</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      


 {/* ================= MISSION SECTION ================= */}
      <section className="relative  overflow-hidden bg-[#030014]">
        {/* Background Dot Pattern matching the image */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />


 {/* <div className="max-w-[1225px] mx-auto relative z-10"></div> */}
        <div className="max-w-[1225px] mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-center text-4xl md:text-5xl font-bold mb-20"
          >
            Mission
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center md:items-start gap-12"
          >
            {/* Logo Card - Pulled to the left margin */}
           <motion.div variants={item} className="w-full md:w-[450px] shrink-0">
              <div className="bg-white rounded-[40px] aspect-square flex items-center justify-center shadow-2xl overflow-hidden relative">
                {/* Removed p-12 so the image hits the edges */}
                <img 
                  src="https://img.freepik.com/photos-premium/homme-touchant-texte-mission-ecran_218381-4228.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="Zfrozen Logo" 
                  className="w-full h-full object-cover" 
                  /* object-cover ensures the image fills the entire 450x450 area */
                />
              </div>
            </motion.div>

            {/* Content Text - Positioned to the right of the image */}
            <motion.div variants={item} className="flex flex-col items-start pt-10 space-y-6">
              <div className="bg-[#63b3ed] px-8 py-2.5 rounded-full text-black font-bold text-sm uppercase tracking-wide">
                Mission of Our Company
              </div>
              
              <p className="text-white text-lg md:text-xl leading-relaxed font-light opacity-90 text-justify">
                &quot;At Mosfet, we are dedicated to delivering innovative and comprehensive IT solutions that empower businesses and individuals to overcome challenges and achieve their goals. From web and app development to loT, Al, Mobile App, Web, UI/UX, 3D Printing, Graphic Design, Electric & Solar, we specialize in creating tailored, technology-driven solutions that address diverse needs across industries. Our expertise extends to IT infrastructure design, custom software solutions, data analytics, automation, and advanced technology integration, ensuring our clients remain competitive in an ever-evolving digital landscape. Our mission is to transform ideas into impactful realities, prioritizing creativity, collaboration, and integrity to deliver solutions that make a lasting difference. Together, let's build thefuture of IT innovation
&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
    </>
  );
}