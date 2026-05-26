"use client";

import React, { useState, useEffect } from "react";
import portfolio from "./portfolio.json";
import Carousel from "./Carousel";
import Link from "next/link";

const PortfolioSection = () => {
    const [portfolioData, setPortfolioData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [selectedID, setSelectedID] = useState(1);

    useEffect(() => {
        setPortfolioData(portfolio);
    }, []);

    useEffect(() => {
        if (selectedID) {
            const filteredData = portfolio.filter(
                (item) => item.id === selectedID
            );
            setSelectedData(filteredData);
        }
    }, [selectedID]);

    return (
        <section className="bg-zinc-950 pt-24 px-6 py-16 md:px-37.5">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-white font-semibold text-4xl md:text-5xl">
                    Portfolio
                </h2>
            </div>

            {/* Carousel */}
            <div className="mt-12">
                <Carousel
                    portfolioData={portfolioData}
                    setSelectedID={setSelectedID}
                />
            </div>

            {/* Selected Project Info */}
            {selectedData.length > 0 && (
                <div className="mt-10 text-center max-w-3xl mx-auto">
                    {/* <h3 className="text-white text-2xl md:text-3xl font-semibold">
            {selectedData[0]?.title}
          </h3>
          <p className="text-zinc-300 mt-4">
            {selectedData[0]?.description}
          </p> */}
                </div>
            )}
            <div className="text-center">
                <Link
                    href="/portfolio"
                    className="bg-white text-black px-4 py-2 rounded-full text-12px text-center md:text-[14px] lg:text-[16px] font-medium hover:bg-gray-100 hover:text-black transition"
                >
                    See All
                </Link>
            </div>
        </section>
    );
};

export default PortfolioSection;
