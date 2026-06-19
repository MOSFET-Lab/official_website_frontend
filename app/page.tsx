"use client";

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import WorkingProcess from "./components/WorkingProcess";
import HeroSection from "./components/HeroSection";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { testimonials, getReviewImage } from "@/components/testimonial";
import { useEffect, useState } from "react"

import {
  CheckCircle,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Section 1 - Hero */}
      {/* <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50/50 to-zinc-400 pointer-events-none" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/MOSFET_logo.png"
              alt="MOSFET Logo"
              width={200}
              height={200}
              className="mx-auto rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-balance">
            {"We're"} <span className="text-sky-500">MOSFET</span>,
          </h1>
          <p className="text-2xl md:text-4xl font-medium text-zinc-600 mb-10">
            {"Let's talk about your project"}
          </p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white text-lg px-8 py-6 rounded-xl">
            Get Started
            <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </section> */}
      <>
        <HeroSection />
      </>

      {/* Section 2 - About Company */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/MOSFET_logo.png"
                alt="MOSFET Company"
                width={300}
                height={300}
                className="rounded-2xl shadow-xl mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
              <p className="text-zinc-600 text-lg leading-relaxed">
                MOSFET is a dynamic startup company revolutionizing product manufacturing through the seamless integration of Artificial Intelligence (AI) and Internet of Things (IoT).
                Founded with a vision to bridge the gap between ideation and realization, we empower businesses and innovators to transform concepts into tangible, intelligent products faster and more efficiently than ever before.
              </p>
            </div>
          </div>

          <div
            ref={ref}
            className="grid md:grid-cols-3 gap-8"
          >

            {/* PROJECTS */}
            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2">

              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/30 transition-colors duration-300 group-hover:animate-pulse">
                <CheckCircle className="size-8 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
              </div>

              <h3 className="text-sky-100 text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110">
                {inView && <CountUp end={80} duration={3} />}+
              </h3>

              <p className="text-sky-200/80 font-medium tracking-wide">
                Completed Projects
              </p>
            </div>

            {/* CUSTOMERS */}
            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2">

              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/30 transition-colors duration-300 group-hover:animate-pulse">
                <Users className="size-8 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
              </div>

              <h3 className="text-sky-100 text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110">
                {inView && <CountUp end={60} duration={3} />}+
              </h3>

              <p className="text-sky-200/80 font-medium tracking-wide">
                Happy Customers
              </p>
            </div>

            {/* EXPERIENCE */}
            <div className="group bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-800 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 hover:-translate-y-2">

              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sky-500/30 transition-colors duration-300 group-hover:animate-pulse">
                <Clock className="size-8 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
              </div>

              <h3 className="text-sky-100 text-5xl font-black mb-2 transition-transform duration-300 group-hover:scale-110">
                {inView && <CountUp end={1} duration={3} />}+
              </h3>

              <p className="text-sky-200/80 font-medium tracking-wide">
                Years of Experience
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3 - Clients Who Trust Us */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Clients Who Trust Us</h2>
          <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">
            We are proud to work with industry-leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["Amazon", "Google", "Microsoft", "Apple", "Meta", "Netflix"].map((client) => (
              <div
                key={client}
                className="w-32 h-20 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400 font-bold text-lg hover:bg-sky-50 hover:text-sky-500 transition-colors"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section 4 - What We Do (Services) */}
      {/* Section 4 - What We Do (Services) */}
      <section className="py-20 px-6 bg-zinc-50 overflow-hidden">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                What We Do
              </h2>
              <p className="text-zinc-600">
                Our Services
              </p>
            </div>

            <Link href="/services">
              <Button
                variant="outline"
                className="mt-4 md:mt-0 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white"
              >
                See All
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/Robotic services.jpg"
                alt="IoT & Embedded Systems"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  IoT & Embedded System & Robotic Projects
                </h3>

                <p className="text-zinc-300 text-sm">
                  Smart automation, sensors, and real-time connected device systems.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 1,500/hour | Minimum Rs. 20,000
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/3D prints services.jpg"
                alt="3D Product Manufacturing"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  3D Product Manufacturing
                </h3>

                <p className="text-zinc-300 text-sm">
                  Rapid prototyping and high-precision 3D printed hardware.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 20 per gram
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/AI integratio services.jpg"
                alt="AI Integration"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  AI & ML Projects
                </h3>

                <p className="text-zinc-300 text-sm">
                  Embed intelligent AI into apps, systems, and IoT devices.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 2,000/hour | Minimum Rs. 20,000
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* CARD 4 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/IoT services.jpg"
                alt="Research & Development"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Research & Development Projects
                </h3>

                <p className="text-zinc-300 text-sm">
                  Turning innovative ideas into scalable real-world solutions.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 3,000/hour
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* CARD 5 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/3D services.jpg"
                alt="Research & Development"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  3D Modeling
                </h3>

                <p className="text-zinc-300 text-sm">
                  3D product design, CAD modeling, and simulation using industry-standard tools.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 3,000/hour
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

            {/* CARD 6 */}
            <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-zinc-200 bg-white shadow-sm">

              <Image
                src="/service/PCB services.jpg"
                alt="Research & Development"
                width={1200}
                height={1200}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition duration-300" />

              <div className="absolute bottom-0 p-6 z-10">
                <h3 className="text-white text-xl font-semibold mb-2">
                  PCB Designing
                </h3>

                <p className="text-zinc-300 text-sm">
                    PCB schematic design, layout, and prototyping for embedded systems.
                </p>

                {/* PRICING LABEL */}
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-lg">
                    Starting from Rs. 1,500/hour
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Section 5 - Our Process */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">
            A proven methodology that delivers results
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="mt-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Search className="size-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Research</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Delve into in-depth analysis and exploration to identify opportunities and solutions that shape the foundation.
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="mt-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="size-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Design</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Transforming insights into user-centric blueprints and aesthetic interfaces that define your brand identity.
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="mt-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Code className="size-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Develop</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Bringing the vision to life with robust development practices and high-performance, scalable code.
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-zinc-50 rounded-2xl border border-zinc-100">
              <div className="absolute -top-4 left-6 w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="mt-4">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="size-6 text-sky-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launch</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  Final deployment and ongoing technical support to ensure your product thrives and evolves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-20 px-6 bg-zinc-50">
        <WorkingProcess />
      </div>

      {/* Section 6 - Portfolio */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Portfolio</h2>
              <p className="text-zinc-600">Recent projects we are proud of</p>
            </div>
            <Link href="/portfolio">
              <Button variant="outline" className="mt-4 md:mt-0 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white">
                See All
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/portfolio/Smart Hydroponic Nutrient Monitoring AI System.jpg"
                alt="Smart Hydroponic Nutrient Monitoring AI System"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Smart Hydroponic Nutrient Monitoring AI System</h3>
                  <p className="text-zinc-300 text-sm">AI + IoT Embedded System</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/SafeZone Obstacle Alert System Smart Home.jpg"
                alt="SafeZone Obstacle Alert System Smart Home"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">SafeZone Obstacle Alert System Smart Home</h3>
                  <p className="text-zinc-300 text-sm">AI + IoT Embedded Systems</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/AI-Powered Smart Fitness Wear for Sports.jpg"
                alt="AI-Powered Smart Fitness Wear for Sports"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">AI-Powered Smart Fitness Wear for Sports</h3>
                  <p className="text-zinc-300 text-sm">AI + Mobile Application for Android & iOS</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/Geer Wheel.jpg"
                alt="Geer Wheel"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">3D Printed Geer Wheel</h3>
                  <p className="text-zinc-300 text-sm">3D Printing</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/portfolio/NFC based Dual-Factor Authentication Device .jpg"
                alt="NFC based Dual-Factor Authentication Device"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">NFC based Dual-Factor Authentication Device</h3>
                  <p className="text-zinc-300 text-sm">IoT Embedded System</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/AI-Based Plant Leaf Disease Detection System.jpg"
                alt="AI-Based Plant Leaf Disease Detection System"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">AI-Based Plant Leaf Disease Detection System</h3>
                  <p className="text-zinc-300 text-sm">AI + Flutter Application for Android, iOS, Windows, MacOS and Web App</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/Gear Box Parts.jpg"
                alt="Gear Box Parts"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Gear Box Parts</h3>
                  <p className="text-zinc-300 text-sm">3D Printing</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl border-1 border-gray-200">
              <Image
                src="/Real Time Bicep Curl Pose Correction using OpenCV and MediaPipe.jpg"
                alt="Real Time Bicep Curl Pose Correction using OpenCV and MediaPipe"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div>
                  <h3 className="text-white font-semibold text-lg">Real-Time Bicep Curl Pose Correction using  OpenCV and MediaPipe</h3>
                  <p className="text-zinc-300 text-sm">AI/ML</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 7 - Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Client Testimonials
          </h2>

          <p className="text-zinc-600 text-center mb-12 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>

          {/* DESKTOP GRID */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((img, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group"
              >
                <Image
                  src={getReviewImage(img)}
                  alt="Client Testimonial"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* MOBILE AUTO CAROUSEL */}
          <div className="md:hidden relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {testimonials.map((img, i) => (
                <div key={i} className="min-w-full px-2">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src={getReviewImage(img)}
                      alt="Client Testimonial"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i
                    ? "bg-sky-500 w-6"
                    : "bg-zinc-300 w-2"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - CTA (Hey Let's Talk) */}
      <section id="cta-section" className="py-20 px-6 bg-zinc-50">
        <div className="max-w-4xl mx-auto">
          <div className="group bg-zinc-900 p-12 md:p-16 rounded-2xl shadow-lg border border-zinc-800 text-center transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2">
            <div className="w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sky-500/30 transition-colors duration-300 group-hover:animate-pulse">
              <ArrowRight className="size-10 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
            </div>
            <h2 className="text-sky-100 text-4xl md:text-5xl font-black mb-4 transition-transform duration-300 group-hover:scale-105">
              {"Hey! Let's Talk"}
            </h2>
            <p className="text-sky-200/80 font-medium tracking-wide mb-8 max-w-xl mx-auto">
              Ready to gain competitive advantage by harnessing data and modernising your technology?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              {/* SEND MESSAGE */}
              <a
                href="https://wa.me/message/KRFV3QRCXYJFG1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-6 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 active:scale-95">
                  Send us a message
                </Button>
              </a>

              {/* SCHEDULE CALL */}
              <a
                href="tel:+94767865190"


              >
                <Button
                  variant="outline"
                  className="border-2 border-sky-500/50 text-sky-400 font-bold py-6 px-8 rounded-xl text-lg hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Schedule a call
                </Button>
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
