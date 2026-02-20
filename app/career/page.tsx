"use client";

import React, { useMemo, useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


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

/* ================= CONSTELLATIONS COMPONENT ================= */
type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  driftX: number;
  driftY: number;
  duration: number;
};


  const Constellations = () => {
  const count = 45;
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1.5,
      driftX: (Math.random() - 0.5) * 12,
      driftY: (Math.random() - 0.5) * 12,
      duration: Math.random() * 15 + 10,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generatedStars);
  }, []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < stars.length - 1; i++) {
      if (i % 3 === 0) {
        lines.push({ from: stars[i], to: stars[i + 1] });
      }
    }
    return lines;
  }, [stars]);

  if (stars.length === 0) return null;



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
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full px-6 sm:px-12 lg:px-[148px] py-10"
      > 
        <motion.div
          variants={item} // Item variant used here to fix the ESLint error
          className="
            aspect-square w-full max-w-[400px] sm:max-w-[350px]
            flex flex-col items-center justify-between
            rounded-3xl bg-white shadow-xl
            border border-gray-100
            hover:shadow-2xl transition-all duration-300
            p-8 sm:p-10
          "
        >

    
    {/* Title - Centered */}
    <h3 className="text-2xl sm:text-2xl font-bold text-gray-800 text-center leading-tight">
     Product Designer
      {/* <span className="block">Developer</span> */}
    </h3>

{/* ICON AREA: Dead Center Box */}
    <div className="
      flex-shrink-0
      w-20 h-20 sm:w-24 sm:h-24 
      /* This centers the image inside this gray box */
      flex items-center justify-center 
      rounded-3xl bg-gray-50 border border-gray-100
      overflow-hidden
    ">
     <Image
        src="https://static.vecteezy.com/system/resources/previews/014/768/945/non_2x/product-design-line-icon-vector.jpg"
        alt="Product Design Icon"
        width={64}
        height={64}
        className="w-14 h-14 sm:w-16 sm:h-16 object-contain mix-blend-multiply"
      />


    </div>

    {/* Button - Spans full width inside the square */}
    <Link href="/career/frontend-dev" className="w-full">
    <button className="
      w-full py-4
      rounded-2xl bg-[#4299e1]  
      text-base font-bold text-black 
      hover:bg-[#7cde9b] transition-all
    ">
      Apply Now
    </button></Link>
    
  </motion.div>
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
