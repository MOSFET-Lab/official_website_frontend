"use client"

import { useState, useEffect } from "react"
import { Search, Palette, Code, Rocket } from "lucide-react"

const items = [
  {
    id: 1,
    title: "Research",
    description:
      "Delve into in-depth analysis and exploration to identify opportunities and solutions that shape the foundation of your projects.",
    step: "01",
    Icon: Search,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Transform ideas into innovative, user-centric designs, ensuring a seamless and functional experience for every interaction.",
    step: "02",
    Icon: Palette,
  },
  {
    id: 3,
    title: "Develop",
    description:
      "Bring your vision to life with cutting-edge technology and robust development practices, delivering high-performance solutions.",
    step: "03",
    Icon: Code,
  },
  {
    id: 4,
    title: "Launch",
    description:
      "Final deployment and ongoing technical support to ensure your product thrives and evolves in the market.",
    step: "04",
    Icon: Rocket,
  },
]

export default function WorkingProcess() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          A proven methodology that delivers results
        </p>
      </div>

      {/* Large Screen Grid Layout */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20"
          >
            {/* Animated gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-sky-500 via-sky-400 to-sky-500 opacity-20" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center group-hover:bg-sky-500/30 group-hover:animate-pulse transition-colors duration-300">
                  <item.Icon className="size-7 text-sky-400 group-hover:text-sky-300 transition-colors duration-300" />
                </div>
                <div className="text-zinc-600 font-bold text-2xl group-hover:text-sky-400 transition-colors duration-300">
                  {item.step}
                </div>
              </div>

              <h3 className="text-xl font-bold text-sky-100 mb-3 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-sky-500/50 rounded-full group-hover:bg-sky-400 group-hover:w-16 transition-all duration-300" />
                <div className="w-3 h-1 bg-sky-500/50 rounded-full group-hover:bg-sky-400 transition-colors duration-300" />
              </div>

              <p className="text-sky-200/70 text-sm leading-relaxed group-hover:text-sky-100/90 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Small Screen Carousel Layout */}
      <div className="sm:hidden relative overflow-hidden w-full rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 p-6 min-w-full rounded-2xl shadow-lg border border-zinc-800 relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 bg-sky-500/20 rounded-xl flex items-center justify-center">
                  <item.Icon className="size-7 text-sky-400" />
                </div>
                <div className="text-sky-400 font-bold text-2xl">{item.step}</div>
              </div>

              <h3 className="text-xl font-bold text-sky-100">{item.title}</h3>

              <div className="flex items-center gap-2 my-4">
                <div className="w-12 h-1 bg-sky-500/50 rounded-full" />
                <div className="w-3 h-1 bg-sky-500/50 rounded-full" />
              </div>

              <p className="text-sky-200/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-sky-500 w-6" : "bg-zinc-400 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
