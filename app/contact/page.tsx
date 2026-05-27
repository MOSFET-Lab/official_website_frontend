"use client";

import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

/* ================= ANIMATION VARIANTS ================= */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= CONSTELLATIONS (UNCHANGED) ================= */
const Constellations = () => {
  const count = 45;

  const stars = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1.5,
        driftX: (Math.random() - 0.5) * 12,
        driftY: (Math.random() - 0.5) * 12,
        duration: Math.random() * 15 + 10,
      })),
    []
  );

  const connections = useMemo(() => {
    const lines: any[] = [];
    for (let i = 0; i < stars.length - 1; i++) {
      if (i % 3 === 0) {
        lines.push({ from: stars[i], to: stars[i + 1] });
      }
    }
    return lines;
  }, [stars]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full opacity-30">
        {connections.map((line, i) => (
          <motion.line
            key={i}
            stroke="#60a5fa"
            strokeWidth="0.5"
            animate={{
              x1: [
                `${line.from.x}%`,
                `${line.from.x + line.from.driftX}%`,
                `${line.from.x}%`,
              ],
              y1: [
                `${line.from.y}%`,
                `${line.from.y + line.from.driftY}%`,
                `${line.from.y}%`,
              ],
              x2: [
                `${line.to.x}%`,
                `${line.to.x + line.to.driftX}%`,
                `${line.to.x}%`,
              ],
              y2: [
                `${line.to.y}%`,
                `${line.to.y + line.to.driftY}%`,
                `${line.to.y}%`,
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            x: [0, `${star.driftX}vw`, 0],
            y: [0, `${star.driftY}vh`, 0],
            opacity: [0.3, 0.9, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ================= MAIN ================= */
export default function Contact() {
  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    let valid = true;

    const newErrors = {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Sri Lanka phone validation
    const phoneRegex =
      /^(?:\+94|0)(?:7\d|1\d|2\d|3\d|4\d|5\d|6\d|8\d|9\d)\d{7}$/;

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (
      !phoneRegex.test(
        formData.phone.replace(/\s+/g, "")
      )
    ) {
      newErrors.phone =
        "Enter a valid phone number";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // ================= SUBMIT =================
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const subject = encodeURIComponent(formData.subject);

    const body = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

Message:
${formData.message}`
    );

    window.location.href = `mailto:contact@mosfet.com?subject=${subject}&body=${body}`;

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  const socialLinks = [
    {
      Icon: FaFacebookF,
      href: "https://web.facebook.com/MosfetOfficial",
    },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/mosfet_official/",
    },
    {
      Icon: FaLinkedinIn,
      href: "https://www.linkedin.com/company/mosfetofficial/",
    },
    { Icon: FaTiktok, href: "https://www.tiktok.com/" },
    { Icon: FaYoutube, href: "https://www.youtube.com/" },
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-b from-zinc-950 via-zinc-900 to-black text-white overflow-hidden">
      <Constellations />

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8, rotateX: 40 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center pt-16 md:pt-24"
      >
        Let’s Get In Touch
        <br />
        <span className="text-blue-400">
          to talk about your project
        </span>
      </motion.h1>

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-20 grid md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto"
      >
        {/* FORM */}
        <motion.div
          variants={item}
          className="relative rounded-3xl p-px bg-linear-to-r from-blue-500/30 via-cyan-400/20 to-purple-500/30"
        >
          <div className="bg-white/10 backdrop-blur-xl text-white rounded-3xl p-8 border border-white/10">



            <form onSubmit={handleSendMessage} className="space-y-4">

              {/* NAME */}
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">
                  {errors.name}
                </p>
              )}

              {/* PHONE */}
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
              />
              {errors.phone && (
                <p className="text-red-400 text-sm">
                  {errors.phone}
                </p>
              )}

              {/* EMAIL */}
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
              />
              {errors.email && (
                <p className="text-red-400 text-sm">
                  {errors.email}
                </p>
              )}

              {/* SUBJECT */}
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none"
              />
              {errors.subject && (
                <p className="text-red-400 text-sm">
                  {errors.subject}
                </p>
              )}

              {/* MESSAGE */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 h-28 outline-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm">
                  {errors.message}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 rounded-xl py-3 font-semibold"
              >
                Send Message
              </button>
            </form>

            {/* SUCCESS */}
            {submitted && (
              <div className="mb-4 mt-4 bg-green-500/20 border border-green-400/30 text-green-200 px-4 py-3 rounded-xl text-sm">
                Message sent successfully!
              </div>
            )}

          </div>
        </motion.div>

        {/* ================= INFO ================= */}
        <motion.div
          variants={item}
          className="relative rounded-3xl p-px bg-linear-to-r from-blue-500/30 via-cyan-400/20 to-purple-500/30"
        >
          <div className="bg-white/10 h-full backdrop-blur-xl text-white rounded-3xl p-8 shadow-2xl border border-white/10 flex flex-col justify-between">

            <div className="space-y-6">

              {/* CALL */}
              <motion.a
                href="tel:+94767865190"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold">Call Anytime</p>
                  <p className="text-sm text-white/70">
                    +94 76 786 5190
                  </p>
                </div>
              </motion.a>

              {/* WHATSAPP */}
              <motion.a
                href="https://wa.me/message/KRFV3QRCXYJFG1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold">Call WhatsApp</p>
                  <p className="text-sm text-white/70">
                    +94 76 786 5190
                  </p>
                </div>
              </motion.a>

              {/* EMAIL */}
              <motion.a
                href={`mailto:contact@mosfet.com?subject=Project Inquiry&body=Hello MOSFET,%0D%0A%0D%0AI would like to discuss my project with your team.`}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold">Send Email</p>
                  <p className="text-sm text-white/70">
                    contact@mosfet.com
                  </p>
                </div>
              </motion.a>

              {/* LOCATION */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4"
              >
                <div className="bg-blue-500 p-3 rounded-xl text-white shadow-lg">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-sm text-white/70">
                    No 23, Kandy-Jaffna Hwy, Anuradhapura, Sri Lanka
                  </p>
                </div>
              </motion.div>

            </div>

            {/* SOCIAL */}
            <div className="mt-10">
              <p className="font-semibold text-center mb-6 text-white/80">
                Follow us
              </p>

              <div className="flex justify-center gap-3 flex-wrap">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-blue-500/20 border border-blue-400/30 p-3 rounded-xl text-white shadow-lg hover:bg-blue-500/40 transition"
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}