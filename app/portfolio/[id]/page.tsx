"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AICore from "../../components/AICore";
import { projectsData } from "../data/project";
import Image from "next/image";

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-400">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20 font-sans">

      {/* BACK BUTTON */}
      <Link
        href="/portfolio"
        className="px-4 md:px-15 inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-[#00bbff] transition-colors mb-16"
      >
        ← BACK TO PORTFOLIO
      </Link>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 md:px-15 text-2xl sm:text-3xl md:text-4xl font-bold text-[#00bbff] mb-12 uppercase leading-tight"
      >
        {project.title}
      </motion.h1>

      {/* INFO SECTION */}
      <div className="px-4 md:px-17 grid grid-cols-1 gap-12 mb-20 text-gray-300">
        <div className="space-y-4">
          <span className="text-blue-400 font-mono tracking-widest uppercase text-xs sm:text-sm">
            {project.category} PROJECT
          </span>

          <p className="leading-relaxed text-base sm:text-lg md:text-xl text-justify">
            {project.description}
          </p>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div className="px-4 md:px-10 lg:px-[68px] mb-24 flex justify-center md:justify-start">
        <div className="w-full sm:w-[400px] md:w-[480px] rounded-[40px] border border-white/50 overflow-hidden bg-[#111] p-2 md:p-10">
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>
      </div>

      {/* AI CORE SECTION */}
      <div className="relative">
        <div className="sticky top-[8 0px] flex justify-center items-center z-0 pointer-events-none">
          <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
            <AICore />
            <div className="absolute -bottom-12 w-full h-24 bg-yellow-600/20 blur-[80px] rounded-full scale-x-150"></div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center px-6 md:px-[150px] -mt-[200px] sm:-mt-[300px] md:-mt-[430px]">
          <div
            className="w-full text-center p-8 sm:p-12 md:p-20 rounded-[30px] border border-blue-400/50 bg-white/5 backdrop-blur-sm"
            style={{ boxShadow: "inset 0 0 40px rgba(54, 42, 123, 0.55)" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl text-white tracking-tight font-black mb-6">
              Hey! Let’s Talk
            </h2>

            <p className="mt-6 text-zinc-200 text-sm sm:text-base md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
              Interested in {project.title}? Let&apos;s discuss how we can implement something similar for you.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all">
                Send us a message
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
