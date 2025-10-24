import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myPhoto1.jpg";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        className="about-title-section"
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
        <span className="gradient-text">About Me</span>
      </motion.h2>

      <div className="about-container">
        {/* Left side - text */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="about-intro">
            I’m <strong>Tewodros Shawula</strong>, a{" "}
            <strong>Junior Full-Stack Web Developer & Data Analyst</strong> with
            a <strong>Master’s degree in Hydraulic Engineering</strong>. My
            engineering background sharpened my skills in{" "}
            <em>analysis, structure, and precision</em>, which I now apply to
            creating <strong>scalable, user-friendly web applications</strong>.
          </p>

          <ul className="about-qualities">
            <li>🎯 <strong>Creative</strong> – turning complex ideas into simple digital experiences.</li>
            <li>🤝 <strong>Collaborative</strong> – thriving in team environments.</li>
            <li>🔍 <strong>Detail-Oriented</strong> – balancing clean design with solid functionality.</li>
          </ul>

          <p className="about-closing">
            Development isn’t just work — it’s about{" "}
            <strong>building solutions that matter and make an impact</strong>.
          </p>
        </motion.div>

        {/* Right side - image */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img src={myPhoto} alt="Tewodros Shawula" className="about-photo" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
