"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FrontendJobPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Optional: Simple Header to get back */}
      <nav className="py-6 px-6 sm:px-12 lg:px-[148px] border-b border-gray-100">
        <Link href="/career" className="text-blue-600 flex items-center gap-2 hover:underline">
          ← Back to Careers
        </Link>
      </nav>

      <main className="py-12 px-6 sm:px-12 lg:px-[148px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT COLUMN: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements :</h2>
              <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Proven 1+ years of experience with Fusion 360, SolidWorks.</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Design high-quality 3D models for consumer products, enclosures, and mechanical parts.</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Prepare 3D printable files (STL, STEP, OBJ) optimized for FDM/SLA printing.</span>
                </li>
                 <li className="flex gap-2">
                  <span>-</span>
                  <span>Proficiency in creating dimensionally accurate and optimized models.</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Create visual mockups, product renders, and working prototypes.</span>
                </li>
                <li className="flex gap-2">
                  <span>-</span>
                  <span>Bonus: Knowledge of electronics and integration with PCBs, microcontrollers, sensors etc.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Responsibilities:</h2>
              <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
                <li>- API implementation</li>
                <li>- Experience in html, CSS, ReactJS and Angular Framework</li>
                <li>- Experience in using Git</li>
                <li>- Strong logical and analytical thinking</li>
                <li>- Willing to learn new technology</li>
                <li>- Fresh Graduated are welcome</li>
              </ul>
            </section>
          </motion.div>

          {/* RIGHT COLUMN: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[40px] border border-gray-200 shadow-2xl shadow-gray-200/50"
          >
            <h2 className="text-3xl font-medium text-gray-900 text-center mb-10">
              Submit Your Application
            </h2>
            
            <form className="space-y-6">
              <div>
                <label className="block text-lg text-gray-800 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-800 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-800 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center w-full border border-gray-300 rounded-xl overflow-hidden mt-4">
                  <input 
                    type="text" 
                    placeholder="Attach your resume/CV .Pdf" 
                    readOnly 
                    className="flex-1 p-4 text-gray-400 bg-transparent outline-none"
                  />
                  <label className="bg-[#E5E5E5] px-8 py-4 text-gray-800 font-medium cursor-pointer hover:bg-gray-300 transition-colors">
                    Browse
                    <input type="file" className="hidden" accept=".pdf" />
                  </label>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 bg-[#4299e1] hover:bg-[#7cde9b] text-gray-900 font-bold text-xl rounded-2xl shadow-lg transition-transform active:scale-[0.98] mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </main>
    </div>
  );
}