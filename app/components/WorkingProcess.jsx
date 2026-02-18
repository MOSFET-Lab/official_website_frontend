"use client";
import React, { useState, useEffect } from "react";

export default function WorkingProcess() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    {
      id: 1,
      title: "Research",
      description:
        "Delve into in-depth analysis and exploration to identify opportunities and solutions that shape the foundation of your projects.",
      image: "/research-icon.webp",
      step: "01",
    },
    {
      id: 2,
      title: "Design",
      description:
        "Transform ideas into innovative, user-centric designs, ensuring a seamless and functional experience for every interaction.",
      image: "/design-icon.webp",
      step: "02",
    },
    {
      id: 3,
      title: "Develop",
      description:
        "Bring your vision to life with cutting-edge technology and robust development practices, delivering high-performance solutions.",
      image: "/development-icon.webp",
      step: "03",
    },
    {
      id: 4,
      title: "Test",
      description:
        "Ensure quality, reliability, and excellence through rigorous testing and validation, ensuring that every product meets the highest standards.",
      image: "/test-icon.webp",
      step: "04",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % items.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="px-4 py-10 md:py-20 lg:py-20 xl:py-20 mx-auto sm:px-6 lg:px-8 select-none">
      <div className="flex justify-center items-center mb-4 md:mb-12 lg:mb-12">
        <p className="text-white font-semibold lg:text-[50px] sm:text-[40px] text-[40px]">
          Our Process
        </p>
      </div>

      {/* Large Screen (Default Grid Layout) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-8 lg:px-32 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 w-full max-w-100 min-h-80 h-auto rounded-[25px] shadow-lg relative overflow-hidden transition-transform duration-500 hover:scale-105"
          >
            <div className="flex justify-between items-start ">
              <div className="bg-black rounded-[25px] text-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 sm:h-20 mx-auto"
                  draggable="false"
                />
              </div>
              <div className="text-gray-500 font-bold text-xl sm:text-3xl">
                {item.step}
              </div>
            </div>
            <h3 className="text-xl font-bold mt-5 text-black">{item.title}</h3>
            <div className="flex items-center justify-between w-20 sm:w-24 my-4">
              <hr className="w-[70%] border-2 border-black bg-black h-1.25 rounded-lg" />
              <hr className="w-[20%] border-2 border-black bg-black h-1.25 rounded-lg" />
            </div>
            <p className="text-black text-sm sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Small Screen (Carousel Layout) */}
      <div className="sm:hidden relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFD700] p-6 min-w-full h-auto rounded-[25px] shadow-lg relative overflow-hidden"
            >
              <div className="flex justify-between items-start">
                <div className="bg-black rounded-[25px] text-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16] mx-auto"
                    draggable="false"
                  />
                </div>
                <div className="text-gray-500 font-bold text-xl">{item.step}</div>
              </div>
              <h3 className="text-xl font-bold mt-5 text-black">{item.title}</h3>
              <div className="flex items-center justify-between w-1.25 my-4">
                <hr className="w-[70%] border-2 border-black bg-black h-1.25 rounded-lg" />
                <hr className="w-[20%] border-2 border-black bg-black h-1.25 rounded-lg" />
              </div>
              <p className="text-black text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

