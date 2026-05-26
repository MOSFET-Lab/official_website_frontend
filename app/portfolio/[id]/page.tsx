"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "../data/project";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-400">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* BACK */}
      <Link
        href="/portfolio"
        className="px-4 md:px-15 mt-6 inline-flex items-center gap-2 text-[11px] sm:text-[13px] md:text-[15px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/50 hover:text-[#00bbff] transition-colors mb-10 md:mb-16"
      >
        ← BACK TO PORTFOLIO
      </Link>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 md:px-15 text-2xl sm:text-3xl md:text-4xl font-bold text-[#00bbff] mb-8 md:mb-12 uppercase leading-tight"
      >
        {project.title}
      </motion.h1>

      {/* DESCRIPTION */}
      <div className="px-4 md:px-17 grid grid-cols-1 gap-8 md:gap-12 mb-14 md:mb-20 text-gray-300">
        <div className="space-y-3 md:space-y-4">
          <span className="text-blue-400 font-mono tracking-widest uppercase text-[10px] sm:text-xs">
            {project.category} PROJECT
          </span>
          <p className="leading-relaxed text-sm sm:text-base md:text-xl text-justify">
            {project.description}
          </p>
        </div>
      </div>

      {/* ================= SIDE BY SIDE SECTION ================= */}
      <div className="
        px-4 md:px-10 lg:px-17 
        mb-20 md:mb-24 
        grid grid-cols-1 lg:grid-cols-2 
        gap-8 md:gap-10 lg:gap-16 
        items-center
      ">

        {/* ================= SECTION A (IMAGE) ================= */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="inline-block rounded-[40px] border border-white/50 overflow-hidden bg-[#111] p-2 md:p-10">
            <div className="w-65 sm:w-[320px] md:w-105 lg:w-full aspect-square overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ================= SECTION B (CTA) ================= */}
        <div className="w-full">
          <section className="py-6 md:py-10 lg:py-0 rounded-2xl h-full flex items-center">
            <div className="w-full">
              <div className="group bg-zinc-900 p-8 sm:p-10 md:p-16 rounded-2xl shadow-lg border border-zinc-800 text-center transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">

                <div className="w-16 h-16 md:w-20 md:h-20 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-sky-500/30 transition-colors duration-300 group-hover:animate-pulse">
                  <ArrowRight className="size-7 md:size-10 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-105 text-sky-100">
                  {"Hey! Let's Talk"}
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-sky-200/80 font-medium tracking-wide mb-6 md:mb-8 max-w-xl mx-auto">
                  Interested in{" "}
                  <span className="text-sky-400 font-semibold">
                    {project.title}
                  </span>
                  ? Let's discuss how we can implement something similar for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 md:py-6 px-6 md:px-8 rounded-xl text-sm md:text-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    Send us a message
                  </Button>

                  <Button
                    variant="outline"
                    className="border-2 border-sky-500/50 text-sky-400 font-bold py-4 md:py-6 px-6 md:px-8 rounded-xl text-sm md:text-lg hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Schedule a call
                  </Button>
                </div>

              </div>
            </div>
          </section>
        </div>

      </div>
      {/* ================= END SIDE BY SIDE ================= */}

    </div>
  );
}