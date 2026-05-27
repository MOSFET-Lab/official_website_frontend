"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= PRODUCTS ================= */
const products = [
    {
        src: "/products/product3.png",
        desktop: { top: "8%", left: "12%", size: 210 },
        tablet: { top: "8%", left: "12%", size: 170 },
        mobile: { top: "5%", left: "12%", size: 85 },
    },
    {
        src: "/products/product10.png",
        desktop: { top: "18%", left: "78%", size: 280 },
        tablet: { top: "18%", left: "72%", size: 180 },
        mobile: { top: "2%", left: "65%", size: 120 },
    },
    {
        src: "/products/product1.png",
        desktop: { top: "72%", left: "6%", size: 285 },
        tablet: { top: "82%", left: "6%", size: 220 },
        mobile: { top: "85%", left: "5%", size: 150 },
    },
    {
        src: "/products/product4.png",
        desktop: { top: "75%", left: "65%", size: 300 },
        tablet: { top: "78%", left: "65%", size: 200 },
        mobile: { top: "82%", left: "70%", size: 120 },
    },
    {
        src: "/products/product5.png",
        desktop: { top: "38%", left: "5%", size: 220 },
        tablet: { top: "38%", left: "5%", size: 170 },
        mobile: { top: "73%", left: "10%", size: 130 },
    },
    {
        src: "/products/product8.png",
        desktop: { top: "52%", left: "80%", size: 230 },
        tablet: { top: "52%", left: "75%", size: 180 },
        mobile: { top: "20%", left: "23%", size: 120 },
    },
    {
        src: "/products/product7.png",
        desktop: { top: "4%", left: "38%", size: 260 },
        tablet: { top: "4%", left: "35%", size: 200 },
        mobile: { top: "3%", left: "35%", size: 130 },
    },
    {
        src: "/products/product6.png",
        desktop: { top: "80%", left: "45%", size: 210 },
        tablet: { top: "88%", left: "45%", size: 160 },
        mobile: { top: "90%", left: "35%", size: 150 },
    },
    {
        src: "/products/product9.png",
        desktop: { top: "10%", left: "60%", size: 220 },
        tablet: { top: "5%", left: "58%", size: 170 },
        mobile: { top: "20%", left: "65%", size: 80 },
    },
    {
        src: "/products/product2.png",
        desktop: { top: "73%", left: "24%", size: 280 },
        tablet: { top: "72%", left: "24%", size: 210 },
        mobile: { top: "70%", left: "50%", size: 120 },
    },
];

const scrollToBottom = () => {
    const target = document.getElementById("cta-section");

    if (!target) return;

    const start = window.scrollY;
    const end = target.offsetTop;
    const duration = 30000;

    let startTime: number | null = null;

    const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        // constant speed
        window.scrollTo(0, start + (end - start) * progress);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    };

    requestAnimationFrame(animateScroll);
};

/* ================= HERO ================= */
export default function HeroSection() {
    const [screen, setScreen] = useState<"mobile" | "tablet" | "desktop">("desktop");

    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;

            if (w < 768) setScreen("mobile");
            else if (w < 1024) setScreen("tablet");
            else setScreen("desktop");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-linear-to-b from-zinc-100 via-white to-zinc-200" />

            {/* FLOATING PRODUCTS */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {products.map((item, index) => {

                    const config =
                        screen === "mobile"
                            ? item.mobile
                            : screen === "tablet"
                                ? item.tablet
                                : item.desktop;

                    return (
                        <motion.div
                            key={index}
                            className="absolute"
                            style={{
                                top: config.top,
                                left: config.left,
                                width: `${config.size}px`,
                                height: `${config.size}px`,
                            }}
                            animate={{ y: [0, -20, 0] }}
                            transition={{
                                duration: 5 + index * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.src}
                                    alt=""
                                    fill
                                    className="object-contain opacity-85"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* HERO CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[90%] md:w-[50%] lg:w-[30%]"
            >
                <div className="p-px rounded-3xl bg-linear-to-r from-cyan-400/40 via-blue-400/30 to-purple-500/40">

                    <div className="relative group backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-8 md:px-10 py-10 md:py-12 text-center overflow-hidden">

                        {/* 💫 GLOW LAYER (CIRCLE + HOVER EFFECT) */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                            <div className="relative w-75 h-75 md:w-100 md:h-100 rounded-full transition-all duration-700 ease-in-out group-hover:scale-165 group-hover:rotate-63">

                                <Image
                                    src="/MOSFET_l.png"
                                    alt="MOSFET Glow Background"
                                    fill
                                    className="object-contain opacity-5 scale-110 transition-all duration-700 group-hover:opacity-8"
                                />

                                {/* Extra glow overlay */}
                                <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400/20 via-blue-400/10 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="relative z-10">

                            {/* Title */}
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                                We're <span className="text-sky-500">MOSFET</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base md:text-xl text-zinc-700 mb-8">
                                A leading product manufacturer in AI, IoT, and advanced research & development prototypes.
                            </p>

                            {/* CTA */}
                            <Button
                                onClick={scrollToBottom}
                                className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl"
                            >
                                Get Started
                                <ArrowRight className="ml-2 size-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}