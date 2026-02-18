"use client";

import React, { useState, useEffect, useRef } from "react";

const Carousel = ({ portfolioData = [], setSelectedID }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = useRef(3);
  const intervalRef = useRef(null);

  // 🔹 Adjust items per slide based on screen width
  useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;

      if (width < 640) {
        itemsPerSlide.current = 1;
      } else if (width < 1024) {
        itemsPerSlide.current = 2;
      } else {
        itemsPerSlide.current = 4;
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // 🔹 Auto slide every 3 seconds
  useEffect(() => {
    if (!portfolioData.length) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const totalSlides = Math.ceil(
          portfolioData.length / itemsPerSlide.current
        );

        return prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1;
      });
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [portfolioData]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${
            currentIndex * (100 / itemsPerSlide.current)
          }%)`,
        }}
      >
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="p-4 cursor-pointer"
            style={{ flex: `0 0 ${100 / itemsPerSlide.current}%` }}
            onClick={() => setSelectedID(item.id)}
          >
            <div className="rounded-3xl h-96 w-96 overflow-hidden group relative shadow-lg">
              <div
                className="h-96 w-96 bg-cover  transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

                {/* Title */}
                {/* <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  {item.title}
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
