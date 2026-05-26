"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";

/* ================= ANIMATION ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
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
        size: Math.random() * 2 + 1,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full opacity-20"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
          }}
        />
      ))}
    </div>
  );
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#030014] text-white overflow-hidden">

      <Constellations />

      {/* ================= WHO WE ARE ================= */}
      <Section
        title="Who we are?"
        badge="About Our Company"
        image="./about.jpg"
      >
        MOSFET is a dynamic startup company revolutionizing product manufacturing through the seamless integration of Artificial Intelligence (AI) and Internet of Things (IoT). Established in 2025, we specialize in building impactful digital and embedded systems solutions that merge software, AI, IoT, and hardware engineering. At the core of MOSFET's mission is our unwavering commitment to innovation and Research & Development (R&D). We harness cutting-edge AI algorithms to optimize design processes, predict potential manufacturing challenges, and elevate product performance. 
      </Section>

      {/* ================= VISION ================= */}
      <Section
        title="Vision"
        badge="Our Vision"
        image="https://www.cloud.studio/wp-content/uploads/2025/02/DeWatermarkai_1739974344189_enhanced-1024x683.webp"
        reverse
      >
        Empowering innovation, enriching lives — we aim to become a leading technology company delivering transformative digital and hardware solutions globally.
      </Section>

      {/* ================= MISSION ================= */}
      <Section
        title="Mission"
        badge="Our Mission"
        image="https://img.freepik.com/photos-premium/homme-touchant-texte-mission-ecran_218381-4228.jpg"
      >
        We deliver innovative IT solutions across IoT, AI, Web, Mobile, 3D printing, and embedded systems. Our mission is to transform ideas into real-world impactful technology through creativity, engineering excellence, and continuous innovation.
      </Section>

    </main>
  );
}

/* ================= REUSABLE SECTION ================= */
function Section({
  title,
  badge,
  image,
  children,
  reverse = false,
}: {
  title: string;
  badge: string;
  image: string;
  children: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="relative px-4 sm:px-6 md:px-10 py-14 md:py-20">

      {/* background dots */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl md:text-5xl font-bold mb-10 md:mb-16"
        >
          {title}
        </motion.h2>

        {/* CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >

          {/* IMAGE */}
          <motion.div variants={item} className="w-full max-w-sm lg:max-w-md">
            <div className="rounded-3xl overflow-hidden aspect-square bg-white shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={item}
            className="flex flex-col text-center lg:text-left space-y-5"
          >
            <div className="bg-[#63b3ed] px-5 py-2 rounded-full text-black font-bold text-xs sm:text-sm w-fit mx-auto lg:mx-0">
              {badge}
            </div>

            <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
              {children}
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}