import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

function Education() {
  const education = [
{
  title: "Full-Stack Developer",
  school: "Momona Tech",
  year: "2025 ",
  desc: "Building and deploying scalable web applications using React, HTML, CSS, JavaScript, Node.js, Express, and MySQL. Collaborating across teams to design responsive UIs, implement RESTful APIs, and ensure seamless integration between front-end and back-end systems.",
},
    {
  title: "Master in Hydraulics Engineering",
  school: "Arba Minch University, Ethiopia",
  year: "Graduated 2019",
  desc: "Specialized in hydraulics systems, fluid mechanics, and Hec-Hms, Hec-Ras, Hydrulics Prediction model, water engineering solutions.",
},

{
  title: "Bachelor in Water Resources & Irrigation Management",
  school: "Mekelle University, Ethiopia",
  year: "Graduated 2011",
  desc: "Focused on irrigation engineering, watershed management, and sustainable water systems.",
},
 {
  title: "Certificate in IT Support",
  school: "IBM",
  year: "2023",
  desc: "Hands-on training in IT support fundamentals with a focus on AWS services, serverless computing, and cloud-based deployments.",
},

{
  title: "Certificate in Data Analytics",
  school: "IBM",
  year: "2024",
  desc: "Developed skills in data analysis, visualization, and reporting using Excel, SQL, and Python for decision-making and business insights.",
},


{
  title: "Planned Certification: SQL Server Database Developer",
  school: "Microsoft",
  year: "In Progress",
  desc: "Focusing on database design, optimization, and management with Microsoft SQL Server to build scalable, high-performance systems.",
},


  ];

  return (
    <section id="education" className="education">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      <div className="education-grid">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="education-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{edu.title}</h3>
            <p className="edu-school">{edu.school}</p>
            <p className="edu-year">{edu.year}</p>
            <p className="edu-desc">{edu.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
