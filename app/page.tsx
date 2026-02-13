"use client";

import React, { useState, useEffect } from "react";
import AICore from "./components/AICore";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";

export default function Home() {


  // ===== CAROUSEL STATE (MOVE HERE) =====
const [current, setCurrent] = useState(0);

const slides = [
  { title: "Collaborative Innovation", img: "https://whatismyipaddress.com/wp-content/uploads/W301-1024x682.jpg" },
  { title: "Unlock Potential", img: "https://img.freepik.com/premium-photo/3d-printer-creating-complex-objects-emphasizing-innovation-manufacturing-technology_875755-8619.jpg" },
  { title: "AI That Works For You", img: "https://i.all3dp.com/wp-content/uploads/2022/08/30155305/cool-oderik-via-thingiverse-220830.jpg" },
  { title: "Seamless Experiences", img: "https://gitexasia.com/Uploads/Posts/NewsArticle/humanoid-robot-interacts-with-computer-screen-filled-with-data-1.jpg" },
  { title: "3D Reality", img: "https://images.stockcake.com/public/d/a/f/daf87618-1783-440e-a3ab-26017466aee5_large/virtual-reality-wonderland-stockcake.jpg" }
];

useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, 5000);
  return () => clearInterval(timer);
}, []);


  // const stats = [
  //   { value: "400+", label: "Happy Clients", img: "https://cdn-icons-png.flaticon.com/512/9321/9321410.png" },
  //   { value: "77+", label: "Ready Projects", img: "https://cdn-icons-png.freepik.com/512/7445/7445647.png" },
  //   { value: "65+", label: "Active Clients", img: "https://cdn-icons-png.freepik.com/512/14245/14245713.png" },
  //   { value: "381+", label: "Projects Done", img: "https://cdn-icons-png.flaticon.com/512/2304/2304298.png" },
  // ];

  // const services = [
  //   { title: "IoT & AI", image: "https://thumbs.dreamstime.com/b/vector-computer-electronic-chip-ai-icon-microchip-processor-artificial-intelligence-cpu-iot-big-data-isolated-white-vector-312443620.jpg" },
  //   { title: "Web & Mobile Apps", image: "https://cdn.elearningindustry.com/wp-content/uploads/2022/09/How-To-Choose-A-Web-And-Mobile-App-Development-Company.jpg" },
  //   { title: "UI/UX & 3D Design", image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709737658/catalog/1672154049959505920/eotjslfsr1jemkbygtd6.webp" },
  // ];

  const expertise = [
    // { name: "ITEC Engineering", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBkVD9aKjoFSOJSBda5346qbQCM4fUiYd88g&s" },
     { img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    {  img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    {  img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    {  img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    {  img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
  ];

  const reviews = [
    {
      id: 1,
      text: "This company provided reliable service and clear communication throughout my project. They clearly understood the requirements and delivered accurate results on time. I highly recommend them to everyone for their excellent service and professionalism from start to finish",
      name: "Keshan Dinethma",
      title: "Business Founder",
      avatar: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-6/606013878_1391748055922353_5028411218304048568_n.jpg?stp=c0.331.1045.1045a_cp6_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=52bb43&_nc_eui2=AeHcBuoY6wwxFrwHIZzVSwiAJoUaTfZnU-EmhRpN9mdT4VW20MIUD-TeNe3S7K9IIfFSAwH9Vd8Z1ZMHZ-BbbXw9&_nc_ohc=M0SYuryEtxQQ7kNvwEgtQKH&_nc_oc=AdlIasfL2H034efDDxbB03gxucswhxv_YL4CKw6_aCcg6z9B4aPf0jGTSz8XNgiQ2Es&_nc_zt=23&_nc_ht=scontent-bom5-1.xx&_nc_gid=5fFV78LYHlvntm07_pxFvw&oh=00_AftwD8nx3LdXfnEBNd1JOzvKsCK3GquAsI3kAHOCcAVLhw&oe=69866E8D", // Placeholder avatar
    },
    {
      id: 2,
      text: "I’m extremely satisfied with the service I received. The team handled my project with great efficiency, kept me updated at every step, and delivered results that were truly top quality. Everything was smooth, professional, and 0 stress from start to finish. I highly recommend their services to anyone looking for reliable and top notch work.",
      name: "Ushan Nilindu",
      title: "Japan",
      avatar: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-1/326728993_3171376406487885_919101361625192623_n.jpg?stp=cp0_dst-jpg_p60x60_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHpi8WmmBDobfudghUUdHpBNIdhJKCxGaY0h2EkoLEZppESvkr_z4rJQfkXRo-hP5TvJNCV0s4fu9TdjNI1LDAO&_nc_ohc=OpxuF8OmRH8Q7kNvwG-jJQZ&_nc_oc=Admx39gcAcXWBmVylbQf-kE3OGq31HJnwjiQgJnhzcHDWppecaLAnZzN6otuPVlMOug&_nc_zt=24&_nc_ht=scontent-bom5-1.xx&_nc_gid=OVRP5QasvyHoGbz02kLIYw&oh=00_Afv2qP4uRkLbutbO_R26pGN7NseRPXmgoIcEcukSEsT7yQ&oe=69869785", // Placeholder avatar
    },
    {
      id: 3,
      text: "Hi there, The expert performed excellently and exceeded my expectations. Thank you for your input, time and resources in helping me complete this my job. Very professional and would fix my confusion. Very organized and met all my requirements. The quality of the work was excellent.",
      name: "Isuru Sandaruwan",
      title: "Geo Technical Engineer",
      avatar: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-1/452119484_7766353170152556_5930903102327738637_n.jpg?stp=cp6_dst-jpg_s100x100_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHWo-P5Q-kFVL7oNOeM560XSkHWbzXJl1dKQdZvNcmXV_3QT2z9pa08uEYQ6ndJaBR0M95DRpaugthQ6_XG_WkP&_nc_ohc=-snAE2w4lYgQ7kNvwHJfdur&_nc_oc=AdmtmDJR3CkZWippLTrxDSXucoyCbc9Te1QYgwmtkR_chNh4an1LyfRpYn16vWypyqY&_nc_zt=24&_nc_ht=scontent-bom5-1.xx&_nc_gid=BVt5FqwY9ETZX_4Xn91TbA&oh=00_Aft1VpIbxrFW0Nb5HcBzwatw9sXO5Z0aovB_-DkIJfBmmQ&oe=69868507", // Placeholder avatar
    },
  ];

  const tickerWords = ["AI Tech", "AI Experts", "AI Generator", "Innovation", "Future Tech"];

  
const slideVariants = {
  enter: { x: "100%", opacity: 0 },
  center: { x: "0%", opacity: 1 },
  exit: { x: "-100%", opacity: 0 },
};


//dancing
const DancingItem = ({ children, highlight = false }) => {
  const controls = useAnimation();

  const moveRandomly = async () => {
    while (true) {
      await controls.start({
        x: Math.random() * 1000 - 400,   // adjust to header width
        y: Math.random() * 400 - 200,   // adjust to header height
        rotate: Math.random() * 360,
        scale: 0.6 + Math.random() * 1.4,
        transition: {
          duration: 4 + Math.random() * 4,
          ease: "linear"
        }
      });
    }
  };

  useEffect(() => {
    moveRandomly();
  }, []);

  return (
    <motion.div
      animate={controls}
      initial={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }}
      className={`absolute pointer-events-none ${
        highlight ? "opacity-100" : "opacity-50"
      }`}
    >
      {children}
    </motion.div>
  );
};

  return (
  // <div className="xyz">
  <div className="bg-white dark:bg-zinc-950 min-h-screen">

      {/* --- HERO SECTION WITH AI IMAGE & GRADIENT --- */}
      <section className="relative overflow-hidden rounded-[40px] bg-[#0a0a0c] min-h-[500px] flex items-center">
        {/* Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full"></div>
        </div>

                
            {/* --- 10 RESPONSIVE DANCING SHAPES --- */}
          {/* 1. Neon Cyan Square (Top Left) */}
          <DancingItem x="5vw" y="10vh" highlight>
            <div className="w-8 h-8 md:w-12 md:h-12 border-2 border-cyan-400 rounded-lg shadow-[0_0_20px_#22d3ee]" />
          </DancingItem>

          {/* 2. Large Purple 'X' (Top Right) */}
          <DancingItem x="80vw" y="5vh" delay={0} highlight>
            <div className="text-purple-500 text-6xl md:text-9xl font-thin drop-shadow-[0_0_20px_#a855f7]">×</div>
          </DancingItem>

          {/* 3. Glowing Blue Triangle (Middle Left) */}
          <DancingItem x="10vw" y="45vh" delay={0} highlight>
            <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] md:border-b-[45px] border-b-blue-600 shadow-[0_0_30px_#3b82f6]" />
          </DancingItem>

          {/* 4. Cyber Circle (Bottom Right) */}
          <DancingItem x="85vw" y="80vh" delay={0} highlight>
            <div className="w-12 h-12 md:w-20 md:h-20 border-2 border-cyan-500/50 rounded-full shadow-[0_0_25px_#22d3ee] flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            </div>
          </DancingItem>

          {/* 5. Neon Plus (Center Right) */}
          <DancingItem x="90vw" y="35vh" delay={0} highlight>
            <div className="text-blue-400 text-5xl md:text-7xl font-bold drop-shadow-[0_0_15px_#3b82f6]">+</div>
          </DancingItem>

          {/* 6. Play Button (Mid Top) */}
          <DancingItem x="55vw" y="12vh" delay={0} highlight>
            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] md:border-l-[40px] border-l-blue-500 border-b-[15px] border-b-transparent drop-shadow-[0_0_20px_#3b82f6]" />
          </DancingItem>

          {/* 7. Rotating Diamond (Bottom Left) */}
          <DancingItem x="8vw" y="85vh" delay={0} highlight>
            <div className="w-10 h-10 md:w-16 md:h-16 border-2 border-purple-400 rotate-45 shadow-[0_0_20px_#a855f7]" />
          </DancingItem>

          {/* 8. Glowing Vertical Bar (Far Left) */}
          <DancingItem x="2vw" y="30vh" delay={0} highlight>
            <div className="w-1 h-20 md:h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee]" />
          </DancingItem>

          {/* 9. Tech Frame (Bottom Center) */}
          <DancingItem x="45vw" y="90vh" delay={0} highlight>
            <div className="w-10 h-10 md:w-14 md:h-14 border-2 border-white/30 p-1 shadow-[0_0_15px_#fff]">
              <div className="w-full h-full border border-white/10" />
            </div>
          </DancingItem>

          {/* 10. Double Dot (Middle Right) */}
          <DancingItem x="75vw" y="55vh" delay={0} highlight>
            <div className="flex flex-col gap-3">
              <div className="w-3 h-3 md:w-5 md:h-5 bg-cyan-400 rounded-sm shadow-[0_0_15px_#22d3ee]" />
              <div className="w-3 h-3 md:w-5 md:h-5 bg-blue-500 rounded-sm shadow-[0_0_15px_#3b82f6]" />
            </div>
          </DancingItem>



{/* header part top */}
        <div className="px-[100px] relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-10 md:px-12 py-20">
          {/* Left Side: Text */}
          <div>
            <span className="mx-[100px]  inline-block px-10 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/50 mb-6">
              Unleash the Future
            </span>
            <h1 className="px-[100px] text-5xl md:text-6xl font-bold text-white leading-tight">
                We are <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  MOSFET...
                </span>{' '}
                <span className="whitespace-nowrap">
                  Beyond Innovation
                </span>
            </h1>
            <p className="px-[100px] mt-6 text-zinc-400 text-lg max-w-md">
              Where Innovation Meets Experience. We build the tech that drives the next generation of business.
            </p>
          </div>


          {/* RIGHT SIDE — FLOATING IMAGE */}
    <div className="relative flex justify-center items-center">
      
      {/* Glow behind image */}
      <div className="absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <img
        src="/head.png"
        alt="3D Engineering Design"
        className="relative w-[490px] max-w-full
        animate-float
        opacity-90
        mix-blend-lighten
        drop-shadow-[0_40px_80px_rgba(59,130,246,0.35)]"
      />
    </div>

        </div>
      </section>


      {/* --- MOVING TICKER SECTION --- */}
      <div className="mt-20 py-10 bg-zinc-950 overflow-hidden border-y border-zinc-800">
        <div className="animate-ticker flex items-center gap-12">
          {/* Repeat twice for a seamless loop */}
          {[...tickerWords, ...tickerWords, ...tickerWords].map((word, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="abc text-4xl md:text-6xl font-bold text-blue-400/80 tracking-tight whitespace-nowrap">
                {word}
              </span>
              {/* Star Icon from your image */}
              <span className="text-3xl text-green-200 animate-pulse">🔗</span>
            </div>
          ))}
        </div>
      </div>



{/* ================= FEATURE CARDS SECTION ================= */}
<div className="mt-24 px-[100px] md:px-[150px]">
  <div className="grid md:grid-cols-2 gap-10">

    {/* LEFT CARD */}
    <div className="relative overflow-hidden rounded-[36px] bg-zinc-100 dark:bg-zinc-900 p-16 min-h-[520px] flex flex-col justify-between">
      
      {/* Text */}
      <div className="relative z-10">
        <h2 className="ttext-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          Smart AI Lighting
        </h2>
        <p className="mt-4 text-zinc-400 max-w-md">
          Adaptive, intelligent, and energy-efficient lighting solutions
          powered by AI & IoT systems.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium">
            Learn more
          </button>
          <Link href={`/product/smart-ai-lighting`}> 
    <button className="border border-blue-500 px-6 py-2 rounded-full text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors">
      Buy
    </button>
  </Link>
        </div>
      </div>

      {/* 3D LAMP */}
      <img
  src="https://media.printables.com/media/prints/721759/images/5691337_b81da326-41d2-4320-80bf-63ff911c94fb_c19b47f6-47f6-4639-ae8e-39d4c65c82c0/thumbs/inside/1600x1200/png/bild4.webp"
  alt="3D Lamp"
  className="absolute bottom-0 left-17 w-[250px] aspect-square object-cover rounded-2xl" 
/>
    </div>

    {/* RIGHT CARD */}
    <div className="relative overflow-hidden rounded-[36px] bg-zinc-100 dark:bg-zinc-900 p-16 min-h-[520px] flex flex-col justify-between">
      
      {/* Text */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
          Majestic Dragon 
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-md">
          Experience precision lighting with immersive 3D visualization
          and real-time automation.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-white font-medium">
            Learn more
          </button>
          <Link href={`/product/majestic-dragon`}> 
    <button className="border border-blue-500 px-6 py-2 rounded-full text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-zinc-800 transition-colors">
      Buy
    </button>
  </Link>
        </div>
      </div>

      {/* 3D LAMP */}
      <img
        src="https://i.etsystatic.com/58083831/r/il/2fc3e5/7314911297/il_1588xN.7314911297_ht2r.jpg"
        alt="3D Lamp"
         className="absolute bottom-0 left-17 w-[250px] aspect-square object-cover rounded-2xl" 
      />
    </div>

  </div>
</div>


{/* ================= CINEMATIC PEEK CAROUSEL ================= */}
<div className="mt-24 relative w-full overflow-hidden bg-white dark:bg-zinc-950 py-10">
  
  {/* <motion.div
   
    animate={{
      x: `-${current * 10}vw`,
    }}
    transition={{
      duration: 0.5,
      ease: [0.22, 1, 0.86, 20], // inematic glide
    }}
  > */}

  {(() => {
    const prev = (current - 1 + slides.length) % slides.length;
    const next = (current + 1) % slides.length;

    const visibleSlides = [
      slides[prev],
      slides[current],
      slides[next],
    ];

    return (
      <div className="relative flex justify-center items-center">
        <div className="flex gap-3 items-center">
          {visibleSlides.map((slide, i) => {
            const isCenter = i === 1         

            return (
              <motion.div
                key={`${slide.title}-${i}`}
                className="relative flex-shrink-0 w-[65vw] md:w-[75vw] h-[300px] md:h-[580px] shadow-2xl"
                animate={{
                  scale: isCenter ? 1 : 0.92,
                  opacity: isCenter ? 1 : 0.6,
                }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                // "easeInOut"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <AnimatePresence>
                  {isCenter && (
                    <motion.div
                      initial={{ opacity: 0, y: 80 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: 0.1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16"
                    >
                      <h2 className="text-white text-3xl md:text-6xl font-black uppercase tracking-tighter">
                        {slide.title}
                      </h2>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  })()}
  {/* /</motion.div>      */}
</div>







      {/* ================= WORKING PROCESS SECTION ================= */}
<div className="mt-5 px-6 md:px-[80px] py-16 relative ">
  {/* Background World Map Pattern */}
  <div 
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230f172a' strokeWidth='1'%3E%3Cpath d='M11 49.2L27 33.2 43 49.2M11 11.2L27 27.2 43 11.2'/%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px'
    }}
  ></div>

  {/* Header */}
  <div className="text-center mb-12">
    <span className="inline-block px-4 py-1 text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-100 rounded-full mb-4">
      Working Process
    </span>
    <h2 className="text-4xl md:text-5xl font-black text-zinc-800 dark:text-white leading-tight">
      Get your IT solutions in <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">3 Easy Steps</span>
    </h2>
  </div>

  {/* Steps Grid */}
  <div className="grid md:grid-cols-3 gap-8 items-start relative">

    {/* Step 1 */}
    <div className="relative flex flex-col items-center text-center group">
      <div className="relative w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden mb-6 border-3 border-purple-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Understanding Your Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">01</div>
      </div>
      <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3">Understanding Your Story</h3>
      <p className="text-zinc-600 dark:text-zinc-300 text-1xl leading-relaxed">
        We listen to the story and objectives of your brand, and conduct analysis to plan for successful partnering.
      </p>
    </div>

    {/* Step 2 */}
    <div className="relative flex flex-col items-center text-center group">
      <div className="relative w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden mb-6 border-3 border-purple-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Tailoring Software Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">02</div>
      </div>
      <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3">Tailoring Software Solutions</h3>
      <p className="text-zinc-600 dark:text-zinc-300 text-1xl leading-relaxed">
        We identify your software needs and quickly develop enhancements to provide you with improvements.
      </p>
    </div>

    {/* Step 3 */}
    <div className="relative flex flex-col items-center text-center group">
      <div className="relative w-full max-w-[300px] h-[200px] rounded-xl overflow-hidden mb-6 border-3 border-purple-500 shadow-lg group-hover:scale-105 transition-transform duration-300">
        <img 
          src="https://media.istockphoto.com/id/1911521660/photo/call-center-workers.jpg?s=612x612&w=0&k=20&c=jZr-CasP4ScJvlIW2V3D3KY5OLYEYPY2PYA_mP7NML8=" 
          alt="Provide Ongoing Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-400 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm">03</div>
      </div>
      <h3 className="text-xl font-bold text-zinc-800 dark:text-white mb-3">Provide Ongoing Support</h3>
      <p className="text-zinc-600 dark:text-zinc-300 text-1xl leading-relaxed">
        Our team of experts provides ongoing technical support to help you maximize customer engagement.
      </p>
    </div>

  </div>

</div>





      {/* Services Cards */}
      {/* <div className="px-[150px] mt-20 grid gap-10 md:grid-cols-3 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-400  rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
           
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {service.title}
              </h3>
             
            </div>
          </div>
        ))}
      </div> 



{/* Happy Clients */}
      {/* <div className="mx-[150px] mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-00 to-blue-400 mt-20">   
   
        <div className="grid md:grid-cols-2 items-center ">
          
         
          <div className="p-20 text-white">
            <p className=" uppercase tracking-widest text-sm opacity-120">
              Who We Bring
            </p>

            <h1 className=" text-4xl md:text-5xl font-bold mt-4 leading-tight ">
              Let’s Start ... <br />
              We Are On <br />
              Building Of Dream 
            </h1>
          </div>

         
          <div className="mx-[110px] bg-white rounded-3xl m-6 p-8 grid grid-cols-2 gap-8 ">
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-50 h-16 rounded-xl bg-indigo-50 flex items-center justify-center overflow-hidden p-2">
                
                  <img 
                    src={item.img} 
                    alt={item.label} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className=" text-4xl font-bold text-indigo-600">
                    {item.value}
                  </p>
                  <p className="text-zinc-600 font-medium text-sm">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}





      {/* --- Happy CUSTOMERS  --- */}
      <div className="mt-15 text-center px-[50px] mb-32">
        <div className="text-4xl md:text-5xl text-zinc-800 dark:text-zinc-200 tracking-tighter mb-16 font-black">Happy Customers</div>
        <div className="flex justify-center items-center -space-x-12"> {/* Overlapping magic here */}
          {expertise.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0, x: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 1, 
                // This spreads them from the center
                x: (index - 2) * 20 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="w-48 h-48 rounded-full bg-white border border-zinc-200 shadow-xl flex flex-col items-center justify-center p-6 transition-transform group-hover:-translate-y-4 bg-white z-10">
                <img src="https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-1/599653719_122109109203098789_2141480115708873470_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=108&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFh6ZWMPc2bkdNkvVrgzAr8XAh-XTmjljZcCH5dOaOWNgfC8hlnybraR5knX893QRyxP9y_uu34leAkxzwNyz0f&_nc_ohc=0L0HfRfc3IoQ7kNvwEVpaCa&_nc_oc=AdlHCQvFoADP9ypKD2-35-rSq42NFKqFKnZeNlXqNulY-Vt2UljMMVTZgbg0F5LFAAM&_nc_zt=24&_nc_ht=scontent-bom5-2.xx&_nc_gid=qTkuiDwzomZlC_NgyyODPw&oh=00_Aft31ITau1sg1P-oEccae59v0iCDoEBvSD8qHaJB8RJRDA&oe=698CFA83" alt={tech.name} className="w-26 h-26 group-hover:sepia-0 transition-all" />
                {/* sepia */}
                <p className="mt-4 text-[10px] font-black tracking-tighter text-black">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* --- CUSTOMER REVIEWS (The Default Moving Border Design) --- */}
      <div className="mt-10 px-10 md:px-[150px]">
        <div className="text-center mb-16">
          <h2 className="text-7xl md:text-5xl text-zinc-900 dark:text-white tracking-tighter font-black mb-4">
            Customer Reviews
          </h2>
          <p className="text-zinc-500 flex justify-center items-center gap-2">
             {/* (50 reviews) */} 
             {/* remove the above comment if you want to add the number of reviews in here Soiba Aiye */}
            <span className="text-yellow-500 text-xl">★★★★★</span>
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="relative rounded-[32px] overflow-hidden p-[2px] h-full shadow-2xl">
              
              {/* THE DARK BLUE MOVING BORDER (Visible by Default) */}
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#00008B_0%,#1e3a8a_25%,transparent_50%)] animate-border-spin"></div>
              
              {/* THE CONTENT CARD */}
              <div className="relative z-10 h-full bg-white dark:bg-zinc-900 rounded-[30px] p-10 flex flex-col items-center text-center">
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8 italic text-lg">
                  "{review.text}"
                </p>
                
                <div className="mt-auto flex flex-col items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h4 className="font-bold text-blue-600 text-lg uppercase tracking-tight">{review.name}</h4>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{review.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>





      

{/* ================= AI CORE SECTION ================= */}
<div className="relative mt-[0px]">

  {/* AI CORE — BACKGROUND */}
  <div className="sticky top-[80px] flex justify-center items-center z-0 pointer-events-none">
    <div className="relative w-full aspect-square max-w-[550px] flex items-center justify-center">
      <AICore />

      {/* Floor Glow */}
      <div className="absolute -bottom-12 w-full h-24 bg-yellow-600/20 blur-[80px] rounded-full scale-x-150"></div>
    </div>
  </div>

  {/* HEY CARD — CENTERED ON CIRCLE  =------------------------430 mean height from the previous component*/} 
  <div className="relative z-10 flex justify-center px-6 md:px-[150px] -mt-[430px]"> 
    <div
      className="
        w-full
        text-center
        p-12 md:p-20
        rounded-[30px]
        border border-blue-400/50
        bg-white/5 dark:bg-white/3
        backdrop-blur-sm
      "
      style={{ boxShadow: "inset 0 0 40px rgba(54, 42, 123, 0.55)" }}
    >
      
      <h2 className="text-5xl md:text-6xl text-zinc-900 dark:text-white tracking-tight font-black mb-6">
        Hey! Let’s Talk
      </h2>

      <p className="mt-6 text-zinc-700 dark:text-zinc-200 text-lg md:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
        Ready to gain competitive advantage by harnessing data and modernising your technology?
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl transition-all hover:scale-105 active:scale-95">
          Send us a message
        </button>

        <button className="border border-blue-400 text-blue-600 dark:text-blue-400 font-bold py-4 px-10 rounded-2xl hover:bg-blue-500/10 transition-all hover:scale-105 active:scale-95">
          Schedule a call
        </button>
      </div>

    </div>
  </div>

</div>





   



      
{/* </div> */}
    </div>
  );
}


// mx-[80px] mt-10 

// {/* <p className=" text-black dark:text-white">
//         <p className="text-zinc-700 dark:text-zinc-300">We build great </p> 
//         <p className="text-zinc-700 dark:text-zinc-300">Tech! IoT, AI, </p>
//         <p className="text-zinc-700 dark:text-zinc-300">Mobile App, Web, </p>
//         <p className="text-zinc-700 dark:text-zinc-300">UI/UX, 3D Printing,</p>
//         <p className="text-zinc-700 dark:text-zinc-300">Graphic Design,</p>
//         <p className="text-zinc-700 dark:text-zinc-300">Electric & Solar. </p>    
//       </p> */