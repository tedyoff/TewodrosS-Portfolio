import React from "react";
import { motion } from "framer-motion";
import "./Experiences.css";

function Experiences() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
company: "Momonatech.",
year: "Frburary-2025 - Present",
desc: "Designing and developing scalable web applications using React, Node.js, and RESTful APIs. Focused on creating user-friendly interfaces, optimizing performance, and delivering reliable solutions."
    },
      {
      role: "Open Source Contributor",
company: "GitHub Community",
year: "2025 - Present",
desc: "Actively contributed to open-source projects using HTML, CSS, React, and Node.js. Collaborated with global developers to enhance code quality, implement features, and solve real-world problems."

    },

    {
    role: "Transportation Specialist",
company: "Amazon",
year: "2023 - 2024",
desc: "Managed logistics operations using TMS and transportation management software. Analyzed operational data to optimize delivery processes and improve efficiency."

    },

    {
    role: "Part-Time Project Supervisor",
company: "HIKAS Engineering and Trading PLC",
year: "2016 - 2020",
desc: "Oversaw project planning, execution, and site supervision. Managed data entry, financial reporting, and analysis to optimize operations. Coordinated teams, ensured compliance with quality standards, and improved workflow efficiency."


    },
    {
    role: "Lecturer",
company: "Agarfa ATVET College",
year: "2012 - 2020",
desc: "Designed and delivered engaging lectures, prepared course modules, and developed assessments. Conducted data analysis to evaluate student performance, supported decision-making, and mentored students to achieve academic excellence."

    },
  
  ];

  return (
    <section id="experience" className="experiences">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experiences
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-year">{exp.year}</p>
              <p className="exp-desc">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
