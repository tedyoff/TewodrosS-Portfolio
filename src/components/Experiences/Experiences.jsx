import React from "react";
import { motion } from "framer-motion";
import "./Experiences.css";

function Experiences() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Momonatech",
      year: "February 2025 - Present",
      desc: "Designing and developing scalable web applications using React, Node.js, and RESTful APIs. Focused on creating user-friendly interfaces, optimizing performance, and delivering reliable solutions.",
    },
    {
      role: "Open Source Contributor",
      company: "GitHub Community",
      year: "2025 - Present",
      desc: "Actively contributed to open-source projects using HTML, CSS, React, and Node.js. Collaborated with global developers to enhance code quality, implement features, and solve real-world problems.",
    },
    {
      role: "Transportation Specialist",
      company: "Amazon",
      year: "2023 - 2024",
      desc: "Managed logistics operations using TMS and transportation management software. Analyzed operational data to optimize delivery processes and improve efficiency.",
    },
    {
      role: "Part-Time Project Supervisor",
      company: "HIKAS Engineering and Trading PLC",
      year: "2016 - 2020",
      desc: "Oversaw project planning, execution, and site supervision. Managed data entry, financial reporting, and analysis to optimize operations. Coordinated teams, ensured compliance with quality standards, and improved workflow efficiency.",
    },
    {
      role: "Lecturer",
      company: "Agarfa ATVET College",
      year: "2012 - 2020",
      desc: "Designed and delivered engaging lectures, prepared course modules, and developed assessments. Conducted data analysis to evaluate student performance and mentored students toward academic excellence.",
    },
  ];

  return (
    <section id="experience" className="experiences">
      <motion.h2
        className="experience-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 3,
        }}
      >
        <span className="gradient-text">Experiences</span>
      </motion.h2>

      <div className="experience-grid">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className="exp-role">{exp.role}</h3>
            <p className="exp-company">{exp.company}</p>
            <p className="exp-year">{exp.year}</p>
            <p className="exp-desc">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
