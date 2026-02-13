"use client";

import React, { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AICore from "../../components/AICore";
import { projectsData } from "../data/project"; // Import your data!

export default function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  // 1. FIND THE SPECIFIC PROJECT
  const project = projectsData.find((p) => p.id === id);

  // 2. FALLBACK IF PROJECT NOT FOUND
  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project Not Found</h1>
          <Link href="/portfolio" className="text-blue-400">Return to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-20 font-sans">
      
      {/* 1. BACK BUTTON */}
      <Link 
        href="/portfolio" 
        className="px-4 md:px-15 inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-[#00bbff] transition-colors mb-16"
      >
        ← BACK TO PORTFOLIO
      </Link>

      {/* 2. DYNAMIC TITLE */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 md:px-15 text-4xl md:text-4xl font-bold text-[#00bbff] mb-12 uppercase leading-tight"
      >
        {project.title}
      </motion.h1>

      {/* 3. DYNAMIC INFO SECTION */}
      <div className="px-4 md:px-17 grid grid-cols-1 md:grid-cols-1 gap-12 mb-20 text-gray-300 ">
        <div className="space-y-4">
            <span className="text-blue-400 font-mono tracking-widest uppercase text-sm">{project.category} PROJECT</span>
            <p className="leading-relaxed text-xl text-justify">
              {project.description}
            </p>
        </div>
      </div>

{/* 4. DYNAMIC IMAGE */}
<div className="px-4 md:px-10 lg:px-[68px] mb-24 flex justify-start"> 
  <div className="inline-block rounded-[40px] border border-white/50 overflow-hidden bg-[#111] p-2 md:p-10">
    <div className="w-[480px] md:w-[480px] aspect-square overflow-hidden rounded-2xl">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>







      {/* AI CORE SECTION — Keep this as is for the "Contact" part */}
      <div className="relative">
        <div className="sticky top-[80px] flex justify-center items-center z-0 pointer-events-none">
          <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
            <AICore />
            <div className="absolute -bottom-12 w-full h-24 bg-yellow-600/20 blur-[80px] rounded-full scale-x-150"></div>
          </div>
        </div>

        <div className="relative z-10 flex justify-center px-6 md:px-[150px] -mt-[430px]"> 
          <div
            className="w-full text-center p-12 md:p-20 rounded-[30px] border border-blue-400/50 bg-white/5 backdrop-blur-sm"
            style={{ boxShadow: "inset 0 0 40px rgba(54, 42, 123, 0.55)" }}
          >
            <h2 className="text-4xl md:text-6xl text-white tracking-tight font-black mb-6">
              Hey! Let’s Talk
            </h2>
            <p className="mt-6 text-zinc-200 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
              Interested in {project.title}? Let's discuss how we can implement something similar for you.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all">
                Send us a message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

