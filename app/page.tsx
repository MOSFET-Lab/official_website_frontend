export default function Home() {

  

  const stats = [
    { value: "200+", label: "Happy Clients" },
    { value: "77+", label: "Ready Projects" },
    { value: "65+", label: "Active Clients" },
    { value: "381+", label: "Projects Done" },
  ];

  const services = [
    {
      title: "IoT & AI",
      // description:
      //   "We design intelligent IoT devices and AI solutions that automate and optimize real-world systems.",
      image: "https://thumbs.dreamstime.com/b/vector-computer-electronic-chip-ai-icon-microchip-processor-artificial-intelligence-cpu-iot-big-data-isolated-white-vector-312443620.jpg",
    },
    {
      title: "Web & Mobile Apps",
      // description:
      //   "From responsive websites to mobile applications, we build user-friendly and high-performance digital experiences.",
      image: "https://cdn.elearningindustry.com/wp-content/uploads/2022/09/How-To-Choose-A-Web-And-Mobile-App-Development-Company.jpg",
    },
    {
      title: "UI/UX & 3D Design",
      // description:
      //   "We craft stunning UI/UX designs, 3D printed models, and graphic designs that make your brand stand out.",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709737658/catalog/1672154049959505920/eotjslfsr1jemkbygtd6.webp",
    },
  ];

  return (
    <div className="p-15">
      {/* Header */}
      <h1 className="abc text-3xl font-bold text-center text-black dark:text-white"> Hello </h1>

      <p className="abc text-5xl mt-4 text-center">
        <span className="text-zinc-700 dark:text-zinc-300">We're </span>
        <span className="text-blue-400 font-semibold">MOSFET</span>
      </p>

      <p className="abc text-2xl mt-4 text-center text-zinc-700 dark:text-zinc-300 text-5xl mt-4 text-center">
        Where Innovation Meets Experience
      </p>

      {/* Services Cards */}
      <div className=" px-[80px] mt-50 grid gap-10 md:grid-cols-3 text-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
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
              <p className="mt-2 text-zinc-700 dark:text-zinc-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Happy Clients */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 via-indigo-00 to-purple-700 mt-20">
        <div className="grid md:grid-cols-2 items-center ">
          
          {/* LEFT CONTENT */}
          <div className="p-20 text-white">
            <p className="abc uppercase tracking-widest text-sm opacity-80">
              Who We Bring
            </p>

            <h1 className="abc text-4xl md:text-5xl font-bold mt-4 leading-tight ">
              Let’s Start <br />
              We Are On <br />
              Building Of Dream
            </h1>
          </div>

          {/* RIGHT STATS */}
          <div className="bg-white rounded-3xl m-6 p-8 grid grid-cols-2 gap-8 ">
            {stats.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                  ★
                </div>
                <div>
                  <p className="abc text-5xl font-bold text-indigo-600">
                    {item.value}
                  </p>
                  <p className="text-zinc-600 ">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
}



{/* <p className=" text-black dark:text-white">
        <p className="text-zinc-700 dark:text-zinc-300">We build great </p> 
        <p className="text-zinc-700 dark:text-zinc-300">Tech! IoT, AI, </p>
        <p className="text-zinc-700 dark:text-zinc-300">Mobile App, Web, </p>
        <p className="text-zinc-700 dark:text-zinc-300">UI/UX, 3D Printing,</p>
        <p className="text-zinc-700 dark:text-zinc-300">Graphic Design,</p>
        <p className="text-zinc-700 dark:text-zinc-300">Electric & Solar. </p>    
      </p> */}