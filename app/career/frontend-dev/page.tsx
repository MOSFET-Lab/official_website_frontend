"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FrontendJobPage() {
  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  // ================= ERROR STATE =================
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: "",
  });

  // ================= SUCCESS STATE =================
  const [submitted, setSubmitted] = useState(false);

  // ================= HANDLE INPUT =================
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= HANDLE FILE =================
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate PDF
    if (file.type !== "application/pdf") {
      setErrors((prev) => ({
        ...prev,
        resume: "Only PDF files are allowed",
      }));
      return;
    }

    // Validate Size (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setErrors((prev) => ({
        ...prev,
        resume: "File size must be less than 2MB",
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));

    setErrors((prev) => ({
      ...prev,
      resume: "",
    }));
  };

  // ================= VALIDATION =================
  const validateForm = () => {
    let valid = true;

    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      resume: "",
    };

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    // Email
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    // Phone (Sri Lanka Format)
    const phoneRegex =
      /^(?:\+94|0)(?:7\d|1\d|2\d|3\d|4\d|5\d|6\d|8\d|9\d)\d{7}$/;

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone =
        "Enter a valid phone number";
      valid = false;
    }
    // Resume
    if (!formData.resume) {
      newErrors.resume = "Resume is required";
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  // ================= SUBMIT =================
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Fake submit (No Backend)
    console.log("Application Submitted:", formData);

    setSubmitted(true);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      resume: null,
    });

    // Remove success message after 4 sec
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <nav className="py-6 px-6 sm:px-12 border-b border-gray-100">
        <Link
          href="/career"
          className="px-4 mt-6 md:px-15 inline-flex items-center gap-2 text-[15px] font-bold tracking-[0.3em] uppercase text-black/50 hover:text-[#00bbff] transition-colors mb-16"
        >
          ← Back to Careers
        </Link>
      </nav>

      <main className="py-12 px-6 sm:px-12 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            {/* RESPONSIBILITIES */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Responsibilities:
              </h2>

              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Assist in planning, organizing,
                    and managing ongoing software,
                    AI, IoT, and embedded system
                    projects.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Coordinate with developers,
                    designers, and stakeholders to
                    ensure smooth project execution
                    and timely delivery.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Monitor project progress, task
                    assignments, milestones, and
                    deadlines using project
                    management tools.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Support daily stand-ups, sprint
                    planning, and team progress
                    reporting.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Maintain project documentation,
                    reports, and workflow updates.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Assist in task prioritization,
                    backlog management, and resource
                    coordination.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Track risks, dependencies, and
                    project blockers and escalate
                    when necessary.
                  </span>
                </li>

                <li className="flex gap-2">
                  <span>-</span>
                  <span>
                    Support GitHub workflow
                    management including issues,
                    branches, and task tracking
                    integration.
                  </span>
                </li>
              </ul>
            </section>

            {/* REQUIREMENTS */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Requirements:
              </h2>

              <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                <li>
                  - Bachelor’s Degree in Information
                  Technology, Software Engineering,
                  Computer Science, or a related IT
                  field.
                </li>

                <li>
                  - Basic understanding of software
                  development lifecycle (SDLC) and
                  Agile methodologies.
                </li>

                <li>
                  - Familiarity with project
                  management tools such as Jira,
                  Trello, ClickUp, or Notion.
                </li>

                <li>
                  - Strong understanding of GitHub
                  workflows and task tracking
                  systems.
                </li>

                <li>
                  - Excellent communication,
                  leadership, problem-solving, and
                  teamwork skills.
                </li>

                <li>
                  - Ability to manage multiple tasks
                  and work in a fast-paced
                  environment.
                </li>

                <li>
                  - Strong attention to detail and
                  organizational skills.
                </li>
              </ul>
            </section>
          </motion.div>

          {/* RIGHT COLUMN FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 md:p-2 lg:p-10 rounded-[40px] border border-gray-200 shadow-2xl shadow-gray-200/50"
          >
            <h2 className="text-lg md:text-lg lg:text-3xl font-medium text-gray-900 text-center mb-10">
              Submit Your Application
            </h2>

            

            {/* FORM */}
            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* FULL NAME */}
              <div>
                <label className="block text-sm text-gray-800 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full p-4 rounded-xl border outline-none transition-all
                  ${errors.fullName
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                    }`}
                />

                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-800 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full p-4 rounded-xl border outline-none transition-all
                  ${errors.email
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                    }`}
                />

                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm text-gray-800 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={`w-full p-4 rounded-xl border outline-none transition-all
                  ${errors.phone
                      ? "border-red-500 focus:ring-red-400"
                      : "border-gray-300 focus:ring-2 focus:ring-blue-500"
                    }`}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* FILE */}
              <div>
                <div
                  className={`flex items-center w-full border rounded-xl overflow-hidden mt-4
                  ${errors.resume
                      ? "border-red-500"
                      : "border-gray-300"
                    }`}
                >
                  <input
                    type="text"
                    readOnly
                    value={
                      formData.resume
                        ? formData.resume.name
                        : ""
                    }
                    placeholder="Attach your resume/CV .Pdf"
                    className="flex-1 p-4 text-sm text-gray-400 bg-transparent outline-none"
                  />

                  <label className="bg-[#E5E5E5] px-1 md:px-8 py-4 text-sm text-gray-800 font-medium cursor-pointer hover:bg-gray-300 transition-colors">
                    Browse

                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                {errors.resume && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.resume}
                  </p>
                )}
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 transition rounded-lg py-3 font-semibold text-white"
              >
                Submit
              </button>
            </form>

            {/* SUCCESS MESSAGE */}
            {submitted && (
              <div className="mb-6 mt-4 rounded-xl bg-green-100 border border-green-300 text-green-700 px-4 py-3 text-sm">
                Application submitted successfully!
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}