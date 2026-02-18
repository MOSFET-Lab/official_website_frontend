"use client";

import React, { useState, useEffect } from "react";
import AICore from "./components/AICore";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { MeshDistortMaterial } from "@react-three/drei";
import WorkingProcess from "./components/WorkingProcess";
import PortfolioSection from "./components/PortfolioSection";


export default function Home() {

  //cactus
  const [broken, setBroken] = useState(false);
  // ===== CAROUSEL STATE (MOVE HERE) =====
  const [current, setCurrent] = useState(0);

  //cactus
  useEffect(() => {
    if (broken) {
      const timer = setTimeout(() => setBroken(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [broken]);

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


  const stats = [
    { value: "50+", label: "Happy Clients", img: "https://cdn-icons-png.flaticon.com/512/9321/9321410.png" },
    { value: "30+", label: "Ready Projects", img: "https://cdn-icons-png.freepik.com/512/7445/7445647.png" },
    { value: "70+", label: "Projects Done", img: "https://cdn-icons-png.flaticon.com/512/2304/2304298.png" },
    { value: "1+", label: "Year Experience", img: "https://cdn-icons-png.flaticon.com/512/7871/7871110.png" },
  ];

  // const services = [
  //   { title: "IoT & AI", image: "https://thumbs.dreamstime.com/b/vector-computer-electronic-chip-ai-icon-microchip-processor-artificial-intelligence-cpu-iot-big-data-isolated-white-vector-312443620.jpg" },
  //   { title: "Web & Mobile Apps", image: "https://cdn.elearningindustry.com/wp-content/uploads/2022/09/How-To-Choose-A-Web-And-Mobile-App-Development-Company.jpg" },
  //   { title: "UI/UX & 3D Design", image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709737658/catalog/1672154049959505920/eotjslfsr1jemkbygtd6.webp" },
  // ];

  const expertise = [
    { name: "Partner 1", img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    { name: "Partner 2", img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    { name: "Partner 3", img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    { name: "Partner 4", img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
    { name: "Partner 5", img: "https://media.licdn.com/dms/image/v2/D560BAQGDwBDPd60_CA/company-logo_200_200/B56Zsvvds_I0AI-/0/1766032531504?e=1770249600&v=beta&t=_DgZWnWLbPiUz7QQ3f7rW0pOV2KwTb_JOkSQ_FaBe3w" },
  ];

  const reviews = [
    {
      id: 1,
      text: "This company provided reliable service and clear communication throughout my project. They clearly understood the requirements and delivered accurate results on time. I highly recommend them to everyone for their excellent service and professionalism from start to finish",
      name: "Keshan Dinethma",
      title: "HR Executive",
      avatar: "https://scontent-bom5-2.xx.fbcdn.net/v/t39.30808-1/615246710_1405047984592360_3135147869531169571_n.jpg?stp=cp6_dst-jpg_s60x60_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeF05pdJNAl5YasY36GjKeGz0iMR0__YHefSIxHT_9gd50rn8CY4egmtxPEHWCs9DfkbaTtpaU7rFDdkIRlqpKSi&_nc_ohc=dH_DXb6KZ8cQ7kNvwF_XltM&_nc_oc=Adnir08Er7o2FDWSfoqgb9bJGDXax8Bp0Tw8z3JWdZTbYx5u6e0eTOO2j_IzIGGvt6k&_nc_zt=24&_nc_ht=scontent-bom5-2.xx&_nc_gid=LG4NXdQNauDRa5D54ucnlg&oh=00_AfuOfi0F3NOYt1Bpc0CIVynTdZoZeTrutqJz7i0ctl93VA&oe=699B14B2", // Placeholder avatar
    },
    {
      id: 2,
      text: "I’m extremely satisfied with the service I received. The team handled my project with great efficiency, kept me updated at every step, and delivered results that were truly top quality. Everything was smooth, professional, and 0 stress from start to finish. I highly recommend their services to anyone looking for reliable and top notch work.",
      name: "Ushan Nilindu",
      title: "Japan",
      avatar: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-1/326728993_3171376406487885_919101361625192623_n.jpg?stp=cp0_dst-jpg_p60x60_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHpi8WmmBDobfudghUUdHpBNIdhJKCxGaY0h2EkoLEZppESvkr_z4rJQfkXRo-hP5TvJNCV0s4fu9TdjNI1LDAO&_nc_ohc=i84iZvVra1QQ7kNvwHRRgYf&_nc_oc=Adnh8J0BN_6VrR_aL1PIX71072vXOoeIaU6nS7Yu6eQg_a9fyTINUASSHULxGRbdvPo&_nc_zt=24&_nc_ht=scontent-bom5-1.xx&_nc_gid=JTr3E6zlLAqgx8JTbnYfEg&oh=00_AftGnR8pIKrxuK3bInZwQS7OMXriL8HFSKpTB9odf-S98w&oe=699B3F05", // Placeholder avatar
    },
    {
      id: 3,
      text: "Hi there, The expert performed excellently and exceeded my expectations. Thank you for your input, time and resources in helping me complete this my job. Very professional and would fix my confusion. Very organized and met all my requirements. The quality of the work was excellent.",
      name: "Isuru Sandaruwan",
      title: "Geo Technical Engineer at Terra Firma",
      avatar: "https://scontent-bom5-1.xx.fbcdn.net/v/t39.30808-1/452119484_7766353170152556_5930903102327738637_n.jpg?stp=cp6_dst-jpg_s60x60_tt6&_nc_cat=111&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHWo-P5Q-kFVL7oNOeM560XSkHWbzXJl1dKQdZvNcmXV_3QT2z9pa08uEYQ6ndJaBR0M95DRpaugthQ6_XG_WkP&_nc_ohc=rNKiK9a-sBAQ7kNvwH9gDHd&_nc_oc=AdlMjVxJLj5zm-zc84nYgNqv58iLG9eRwC3NRk9pPlAwbzq-npPO2oaHr-k4pwp3G2c&_nc_zt=24&_nc_ht=scontent-bom5-1.xx&_nc_gid=lzZo6-B8sRzYyEZrikn3IA&oh=00_Afuo_22kT-nhkF4y6WRuiAK6uLgk0mhkhDxJS_jY-1TD-Q&oe=699B2C87", // Placeholder avatar
    },
  ];


  const stepData = [
    {
      id: "01",
      title: "Research",
      desc: "Delve into in-depth analysis and exploration to identify opportunities and solutions that shape the foundation.",
      icon: (
        <img
          src="https://zfrozen.com/research-icon.png"
          className="w-14 h-14 object-contain"
          alt="Research"
        />
      )
    },
    {
      id: "02",
      title: "Design",
      desc: "Transforming insights into user-centric blueprints and aesthetic interfaces that define your brand identity.",
      icon: (
        <img
          src="https://zfrozen.com/design-icon.png"
          className="w-14 h-14 object-contain"
          alt="Research"
        />
      )
    },
    {
      id: "03",
      title: "Develop",
      desc: "Bringing the vision to life with robust development practices and high-performance, scalable code.",
      icon: (
        <img
          src="https://zfrozen.com/development-icon.png"
          className="w-14 h-14 object-contain"
          alt="Research"
        />
      )
    },
    {
      id: "04",
      title: "Launch",
      desc: "Final deployment and ongoing technical support to ensure your product thrives and evolves.",
      icon: (
        <img
          src="https://zfrozen.com/test-icon.png"
          className="w-14 h-14 object-contain"
          alt="Research"
        />
      )
    }
  ];





  const tickerWords = ["AI Tech", "AI Experts", "AI Generator", "Innovation", "Future Tech"];


  const slideVariants = {
    enter: { x: "100%", opacity: 0 },
    center: { x: "0%", opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  };


  //dancing
  const DancingItem = ({ children, highlight = false, x = "50%", y = "50%" }: { children: React.ReactNode; highlight?: boolean; x?: string; y?: string }) => {
    const controls = useAnimation();

    const moveRandomly = async () => {
      while (true) {
        await controls.start({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transition: { duration: Math.random() * 3 + 2 }
        });
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    };

    useEffect(() => {
      let isMounted = true;

      if (isMounted) {
        moveRandomly();
      }
      return () => { isMounted = false; }; // Cleanup function
    }, [controls]);

    return (
      <motion.div
        animate={controls}
        initial={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`
        }}
        className={`absolute pointer-events-none ${highlight ? "opacity-100" : "opacity-50"
          }`}
      >
        {children}
      </motion.div>
    );
  };

  return (
    // <div className="xyz">
    <div className="bg-white dark:bg-zinc-950 min-h-screen">

      {/* <section className="relative overflow-hidden rounded-[40px] bg-[#0a0a0c] min-h-[500px] flex items-center">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full"></div>
        </div>





        <div className="px-[100px] relative z-10 grid md:grid-cols-2 gap-10 items-center w-full px-10 md:px-12 py-20">
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



          <div style={{ width: '100%', height: '500px' }}>
            <Canvas
              shadows
              gl={{ alpha: true, antialias: true }}
              camera={{ position: [0, 1, 5], fov: 45 }}
              onCreated={({ gl }) => gl.setClearColor(0x000000, 0)} 
            >
              <ambientLight intensity={1} />
              <pointLight position={[5, 5, 5]} intensity={2} />

              <group rotation={[0, 0.5, 0]}>

                <mesh castShadow>
                  <capsuleGeometry args={[0.5, 1.5, 10, 20]} />
                  <meshNormalMaterial />
                </mesh>

                <mesh position={[0.7, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <capsuleGeometry args={[0.2, 0.6, 10, 20]} />
                  <meshNormalMaterial />
                </mesh>

                <mesh position={[-0.6, -0.2, 0]} rotation={[0, 0, -Math.PI / 3]}>
                  <capsuleGeometry args={[0.18, 0.5, 10, 20]} />
                  <meshNormalMaterial />
                </mesh>

                <mesh position={[0, -1.3, 0]}>
                  <cylinderGeometry args={[0.6, 0.4, 0.7, 32]} />
                  <meshNormalMaterial />
                </mesh>
              </group>

              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} />
            </Canvas>
          </div>





        </div>
      </section> */}


      {/* --- MOVING TICKER SECTION ---
      <div className="mt-20 py-10 bg-zinc-950 overflow-hidden border-y border-zinc-800">
        <div className="animate-ticker flex items-center gap-12">
          {[...tickerWords, ...tickerWords, ...tickerWords].map((word, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="abc text-4xl md:text-6xl font-bold text-blue-400/80 tracking-tight whitespace-nowrap">
                {word}
              </span>
              <span className="text-3xl text-green-200 animate-pulse">🔗</span>
            </div>
          ))}
        </div>
      </div> */}



      {/* ================= FEATURE CARDS SECTION ================= */}
      {/* <div className="mt-24 px-[100px] md:px-[150px]">
        <div className="grid md:grid-cols-2 gap-10">

          <div className="relative overflow-hidden rounded-[36px] bg-zinc-100 dark:bg-zinc-900 p-16 min-h-[520px] flex flex-col justify-between">

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

            <img
              src="https://media.printables.com/media/prints/721759/images/5691337_b81da326-41d2-4320-80bf-63ff911c94fb_c19b47f6-47f6-4639-ae8e-39d4c65c82c0/thumbs/inside/1600x1200/png/bild4.webp"
              alt="3D Lamp"
              className="absolute bottom-0 left-17 w-[250px] aspect-square object-cover rounded-2xl"
            />
          </div>

          <div className="relative overflow-hidden rounded-[36px] bg-zinc-100 dark:bg-zinc-900 p-16 min-h-[520px] flex flex-col justify-between">

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

            <img
              src="https://i.etsystatic.com/58083831/r/il/2fc3e5/7314911297/il_1588xN.7314911297_ht2r.jpg"
              alt="3D Lamp"
              className="absolute bottom-0 left-17 w-[250px] aspect-square object-cover rounded-2xl"
            />
          </div>

        </div>
      </div> */}


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
                      className="relative shrink-0 w-[65vw] md:w-[75vw] h-75 md:h-145 shadow-2xl"
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
                            className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16"
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



      {/* --- Happy CUSTOMERS  --- */}
      <div className="mt-30 text-center px-12.5 mb-32">
        <div className="text-white font-semibold lg:text-[50px] sm:text-[40px] text-[40px]">Happy Customers</div>
        <div className="flex justify-center items-center -space-x-12 pt-8"> {/* Overlapping magic here */}
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
              <div className="w-48 h-48 rounded-full bg-white border border-zinc-200 shadow-xl flex flex-col items-center justify-center p-6 transition-transform group-hover:-translate-y-4 z-10">
                <img src="/mos_black.png" alt={tech.name} className="w-26 h-26 group-hover:sepia-0 transition-all" />
                {/* sepia */}
                <p className="mt-4 text-[10px] font-black tracking-tighter text-black">{tech.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= OUR PROCESS SECTION ================= */}
      <div className="mt-24">
        <WorkingProcess />
      </div>


      {/* ================= PORTFOLIO SECTION ================= */}
      <PortfolioSection />






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



      {/* Happy Clients , experience, projects, */}
      {/* <div className="mx-[150px] mt-20 relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400">

        <div className="grid md:grid-cols-2 items-center ">


          <div className="p-20 text-white">
            <p className=" uppercase tracking-widest text-sm opacity-120">
              Who We Bring
            </p>

            <h1 className=" text-4xl md:text-5xl font-bold mt-5 leading-tight ">
              Let’s Build the Next <br />Generation of Smart Technology

            </h1>
          </div>


          <div className="mx-[90px] bg-white rounded-3xl m-6 p-8 grid grid-cols-2 gap-8 ">
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-150 h-16 rounded-xl bg-indigo-50 flex items-center justify-center overflow-hidden p-2">

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









      {/* --- CUSTOMER REVIEWS (The Default Moving Border Design) --- */}
      <div className="mt-10 px-10 md:px-37.5">
        <div className="text-center mb-5">
          <p className="text-white font-semibold lg:text-[50px] sm:text-[40px] text-[40px]">
            Client Testimonials
          </p>
          <p className="text-zinc-500 flex justify-center items-center gap-2">
            {/* (50 reviews) */}
            {/* remove the above comment if you want to add the number of reviews in here Soiba Aiye */}

          </p>
        </div>
        <div className="flex justify-center flex-col items-center mb-5 xl:px-32">
          <p className="text-[28px] font-normal text-white text-center">
            Testimonials That <br /> Speak to
            <span className="text-yellow-500"> Our Results</span>
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.id} className="relative rounded-4xl overflow-hidden p-0.5 h-full shadow-2xl">

              {/* THE DARK BLUE MOVING BORDER (Visible by Default) */}
              <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#9f9fa9_0%,#9f9fa9_25%,transparent_50%)] animate-border-spin"></div>

              {/* THE CONTENT CARD */}
              <div className="relative z-10 h-full bg-white dark:bg-zinc-900 rounded-[30px] p-10 flex flex-col items-center text-center">
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5 italic text-lg">
                  "{review.text}"
                </p>
                <span className="text-yellow-500 text-xl">★★★★★</span>

                <div className="mt-5 flex flex-col items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                  <div>
                    <h4 className="font-bold text-white text-lg uppercase tracking-tight">{review.name}</h4>
                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{review.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>









      {/* ================= AI CORE SECTION ================= */}
      <div className="relative mt-0">

        {/* AI CORE — BACKGROUND */}
        <div className="sticky top-20 flex justify-center items-center z-0 pointer-events-none">
          <div className="relative w-full aspect-square max-w-137.5 flex items-center justify-center">
            <AICore />

            {/* Floor Glow */}
            <div className="absolute -bottom-12 w-full h-24 bg-yellow-600/20 blur-[80px] rounded-full scale-x-150"></div>
          </div>
        </div>

        {/* HEY CARD — CENTERED ON CIRCLE  =------------------------430 mean height from the previous component*/}
        <div className="relative z-10 flex justify-center px-6 md:px-37.5 -mt-107.5">
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