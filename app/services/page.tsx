"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function ServicesPage() {
 const [iotOpen, setIotOpen] = useState(false);

 const [hoveredSection, setHoveredSection] = useState(null);

  const services = [
    {
      id: "iot",
      title: "IOT",
      bgImg: "https://s3.ap-south-1.amazonaws.com/assets.reflections.live/1599392849328-ker0fuqb.png",
      focusImg: "https://circuitdigest.com/sites/default/files/inlineimages/u1/Blinking-the-LED-on-NodeMCU-through-OTA-Update.jpg",
      description: "Connect your devices for smarter living with our IoT solutions. We offer end-to-end services, from hardware integration to software development, enabling seamless automation.",
      sealText: "IOT • CONNECTING • SMART • SYSTEMS • "
    },
    {
      id: "ai",
      title: "AI",
      bgImg: "https://img.freepik.com/free-photo/portrait-futuristic-female-humanoid-with-advanced-technology_23-2151666348.jpg?semt=ais_hybrid&w=740&q=80",
      focusImg: "https://7wdata.be/wp-content/uploads/2025/05/1711995815350x945898066918280000-feature.jpg",
      description: "Empower your business with AI-driven insights and automation. From predictive analytics to custom ML models, we help you harness the power of AI to make smarter decisions.",
      sealText: "AI • CONNECTING • SMART • SYSTEMS • "
    },
    {
      id: "design",
      title: "3D Design",
      bgImg: "https://mainifesto.com/wp-content/uploads/2025/03/Ceramic-parametrics-fluid-forms-cast-from-3D-printed-molds-1.png",
      focusImg: "https://image.made-in-china.com/202f0j00QLHbGTRJYocw/New-Design-3D-Filament-Bulb-Colorful-Firework-LED-Illusion-3W-Star-LED-Lamp.webp",
      description: "Transform your ideas into reality with our 3D modeling and 3D printing services. Whether for prototyping or customized products, we provide precision and quality.",
      sealText: "3D • CONNECTING • SMART • SYSTEMS • "
    }
  ];

  return (
    
    <main className="min-h-screen bg-[#030014] text-white overflow-x-hidden pb-20">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[20vh] sm:h-[22vh] md:h-[35vh] w-full overflow-hidden flex items-center justify-center bg-[#030014]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#588be8] to-[#030014]" />
        
        <Constellations />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">Services</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">Services</span>
          </div>
        </motion.div>
      </section>


      

     {/* DYNAMIC SECTIONS */}
      {services.map((service, index) => (
        <section key={service.id} className={`max-w-7xl mx-auto px-6 relative ${index === 0 ? 'mt-16' : 'mt-40'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT SIDE: IMAGES (Safari Optimized) */}
            <div className="col-span-12 lg:col-span-6 relative h-[500px] md:h-[600px] [isolation:isolate]">
              <motion.div 
                className="absolute top-0 left-0 w-[75%] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-0 transform-gpu"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <img src={service.bgImg} className="w-full h-full object-cover opacity-70" alt="bg" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#9b8aff]/60 to-transparent" />
              </motion.div>

              <motion.div 
                className="absolute bottom-0 right-0 w-[68%] aspect-square rounded-3xl overflow-hidden border-[#030014] shadow-[0_30px_70px_rgba(0,0,0,0.9)] z-10 transform-gpu"
                style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
              >
                <img src={service.focusImg} className="w-full h-full object-cover" alt="focus" />
                
                {/* ROTATING SEAL with Unique Path IDs */}
                <div className="absolute bottom-8 right-8 w-32 h-32 flex items-center justify-center">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 w-full h-full">
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <defs>
                        <path id={`path-${service.id}`} d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text className="fill-white/80 text-[9px] font-black uppercase tracking-[0.25em]">
                        <textPath xlinkHref={`#path-${service.id}`}>{service.sealText}</textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="relative w-14 h-14 rounded-full border border-white/20 bg-black/40 backdrop-blur-xl flex items-center justify-center">
                    <span className="text-cyan-400 font-black text-sm z-10">{service.id.toUpperCase()}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: TEXT CARDS (Safari Optimized) */}
            <div className="col-span-12 lg:col-span-6 space-y-10 lg:pl-10">
              <div 
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredSection(service.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <motion.div
                  animate={{ 
                    height: hoveredSection === service.id ? "auto" : "110px",
                    borderColor: hoveredSection === service.id ? "#00f2ff" : "rgba(255,255,255,0.1)",
                    backgroundColor: hoveredSection === service.id ? "rgba(8, 8, 35, 1)" : "transparent",
                    backgroundImage: hoveredSection === service.id ? "none" : "linear-gradient(135deg, rgba(96, 165, 250, 0.88), rgba(168, 85, 247, 0.88), rgba(34, 211, 238, 0.88))",
                    boxShadow: hoveredSection === service.id ? "0 0 30px rgba(168, 85, 247, 0.4)" : "0 10px 40px rgba(96, 165, 250, 0.5)",
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="border-2 p-8 rounded-2xl shadow-2xl overflow-hidden transform-gpu"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-4xl font-black italic tracking-tighter text-white uppercase">{service.title}</h3>
                    <motion.div 
                      animate={{ scale: hoveredSection === service.id ? 1.4 : 1, opacity: hoveredSection === service.id ? 1 : 0.3 }}
                      className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
                    />
                  </div>
                  <AnimatePresence>
                    {hoveredSection === service.id && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="mt-6 border-t border-white/10 pt-6">
                        <p className="text-cyan-100/60 text-lg leading-relaxed font-light">{service.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}
   



    </main>
  );
}