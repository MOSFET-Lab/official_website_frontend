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
          <h1 className="text-5xl md:text-4xl font-bold tracking-tight">Career</h1>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <span className="text-blue-400 font-medium">Career</span>
          </div>
        </motion.div>
      </section>




{/* ================= Job Card ================= */}
{/* Wrapper to match MOSFET margin (lg:px-37 as you requested) */}
<div className="w-full px-6 sm:px-12 lg:px-[148px] py-10"> 
  
  <motion.div
    className="
      /* 1. Square Shape & Size */
      aspect-square w-full max-w-[400px] sm:max-w-[350px]
      
      /* 2. CENTER EVERYTHING INSIDE THE CARD */
      flex flex-col items-center justify-between
      
      /* 3. Styling */
      rounded-3xl bg-white shadow-xl
      border border-gray-100
      hover:shadow-2xl transition-all duration-300
      
      /* 4. Padding */
      p-8 sm:p-10
    "
  >
    {/* Title - Centered */}
    <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 text-center leading-tight">
      Front End <span className="block">Developer</span>
    </h3>

    {/* ICON AREA: Dead Center Box */}
    <div className="
      flex-shrink-0
      w-20 h-20 sm:w-24 sm:h-24 
      /* This centers the SVG inside this gray box */
      flex items-center justify-center 
      rounded-3xl bg-gray-50 border border-gray-100
    ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        /* Fixed size prevents jumping */
        className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    </div>

    {/* Button - Spans full width inside the square */}
    <button className="
      w-full py-4
      rounded-2xl bg-blue-500  
      text-base font-bold text-white 
      hover:bg-purple-900 transition-all
    ">
      Apply Now
    </button>
    
  </motion.div>
</div>

      
    </>
  );
}















// "use client";

// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";


// /* ================= ANIMATION VARIANTS ================= */
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 60, scale: 0.95 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// /* ================= CONSTELLATIONS COMPONENT ================= */
// const Constellations = () => {
//   const count = 45; 
  
//   const stars = useMemo(() => 
//     Array.from({ length: count }).map((_, i) => ({
//       id: i,
//       x: Math.random() * 100,
//       y: Math.random() * 100,
//       size: Math.random() * 2 + 1.5,
//       driftX: (Math.random() - 0.5) * 12,
//       driftY: (Math.random() - 0.5) * 12,
//       duration: Math.random() * 15 + 10,
//     })), []);

//   const connections = useMemo(() => {
//     const lines = [];
//     for (let i = 0; i < stars.length - 1; i++) {
//       if (i % 3 === 0) { 
//         lines.push({ from: stars[i], to: stars[i + 1] });
//       }
//     }
//     return lines;
//   }, [stars]);

//   return (
//     <div className="absolute inset-0 pointer-events-none overflow-hidden">
//       <svg className="w-full h-full opacity-40">
//         {connections.map((line, i) => (
//           <motion.line
//             key={`line-${i}`}
//             stroke="white"
//             strokeWidth="0.6"
//             animate={{
//               x1: [`${line.from.x}%`, `${line.from.x + line.from.driftX}%`, `${line.from.x}%`],
//               y1: [`${line.from.y}%`, `${line.from.y + line.from.driftY}%`, `${line.from.y}%`],
//               x2: [`${line.to.x}%`, `${line.to.x + line.to.driftX}%`, `${line.to.x}%`],
//               y2: [`${line.to.y}%`, `${line.to.y + line.to.driftY}%`, `${line.to.y}%`],
//             }}
//             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//           />
//         ))}
//       </svg>

//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           className="absolute rounded-full bg-white shadow-[0_0_10px_#fff,0_0_15px_#fff]"
//           style={{
//             width: star.size,
//             height: star.size,
//             left: `${star.x}%`,
//             top: `${star.y}%`,
//           }}
//           animate={{
//             x: [0, `${star.driftX}vw`, 0],
//             y: [0, `${star.driftY}vh`, 0],
//             opacity: [0.4, 1, 0.4],
//             scale: [1, 1.4, 1],
//           }}
//           transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
//         />
//       ))}
//     </div>
//   );
// };

// export default function Contact() {
 

//   return (
//     <>
//       {/* ================= HERO SECTION ================= */}
//      <section className="relative h-[20vh] sm:h-[22vh] md:h-[35vh] w-full overflow-hidden flex items-center justify-center bg-[#030014]">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#588be8] to-[#030014]" />
        
//         <Constellations />

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 text-center text-white"
//         >
//           <h1 className="text-5xl md:text-4xl font-bold tracking-tight">Career</h1>
//           <div className="mt-2 flex items-center justify-center gap-2 text-sm font-light tracking-widest uppercase">
//             <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
//             <span className="text-white/20">|</span>
//             <span className="text-blue-400 font-medium">Career</span>
//           </div>
//         </motion.div>
//       </section>


      
//     </>
//   );
// }