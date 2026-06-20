"use client";

import React, { useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ================= ANIMATION ================= */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ================= BACKGROUND ================= */
const Constellations = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 50 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random(),
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

const services = [
  {
    title: "IoT & Embedded Systems",
    desc: "Smart automation, sensors, and real-time connected device systems.",
    image: "/service/Robotic services.jpg",
    price: "Starting from Rs. 1,500/hour | Minimum Rs. 15,000",
  },
  {
    title: "3D Product Manufacturing",
    desc: "Rapid prototyping and high-precision 3D printed hardware.",
    image: "/service/3D prints services.jpg",
    price: "Starting from Rs. 20 per gram",
  },
  {
    title: "AI & ML Projects",
    desc: "Embed intelligent AI into apps, systems, and IoT devices.",
    image: "/service/AI integratio services.jpg",
    price: "Starting from Rs. 2,000/hour | Minimum Rs. 20,000",
  },
  {
    title: "Research & Development",
    desc: "Turning innovative ideas into scalable real-world solutions.",
    image: "/service/IoT services.jpg",
    price: "Starting from Rs. 3,000/hour",
  },
  {
    title: "3D Modeling",
    desc:
      "3D product design, CAD modeling, and simulation using industry-standard tools.",
    image: "/service/3D services.jpg",
    price: "Starting from Rs. 2,500/hour",
  },
  {
    title: "PCB Designing",
    desc: "PCB schematic design, layout, and prototyping for embedded systems.",
    image: "/service/PCB services.jpg",
    price: "Starting from Rs. 1,500/hour",
  },
];

export default function ServicesPage() {
  return (
    <main className="md:pt-20 pt-6 px-6 md:px-2 lg:px-38 min-h-screen py-6 relative bg-[#030014] text-white overflow-hidden">

      {/* BACKGROUND */}
      <Constellations />

      {/* ================= HERO ================= */}
      <section className="pt-20 pb-16 text-center relative z-10 px-6">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-zinc-400 max-w-xl mx-auto"
        >
          We deliver cutting-edge IoT, AI, and hardware solutions to transform your ideas into powerful products.
        </motion.p>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-12 px-6 md:px-48 pb-20 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* IMAGE */}
            <Image
              src={service.image}
              alt={service.title}
              width={1200}
              height={1200}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

            {/* CONTENT */}
            <div className="absolute bottom-0 p-6 z-10 w-full">
              <h3 className="text-white text-xl font-semibold mb-1">
                {service.title}
              </h3>

              <p className="text-gray-200/80 text-sm font-bold tracking-tight">
                {service.desc}
              </p>

              {/* PRICING LABEL */}
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                  {service.price}
                </span>
              </div>
            </div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-tr from-sky-500/20 to-purple-500/20 blur-xl"></div>
          </motion.div>
        ))}
      </motion.section>

      {/* ================= CTA ================= */}
      <section className="text-center pb-20 px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-semibold mb-4"
        >
          Have a project in mind?
        </motion.h2>

        <p className="text-zinc-400 mb-6">
          Let’s build something innovative together.
        </p>

        <Link href="/contact">
          <button className="w-auto px-4 bg-blue-400 hover:bg-blue-500 transition rounded-lg py-3 font-semibold text-white">
            Contact Us
          </button>
        </Link>
      </section>

    </main>
  );
}