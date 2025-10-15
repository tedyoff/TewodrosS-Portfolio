import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myPhoto1.jpg"; // reuse your portrait
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left side - text */}
        {/* Left Column: Text */}
    <div class="about-text">
     <h2 class="about-title hover-effect">About Me</h2>
      <p class="about-intro">
        I’m <strong>Tewodros Shawula</strong>, a <strong>Junior Full-Stack Web Developer & Data Analyst</strong> with a <strong>Master’s degree in Hydraulic Engineering</strong>. My engineering background sharpened my skills in <em>analysis, structure, and precision</em>, which I now apply to creating <strong>scalable, user-friendly web applications</strong>.
      </p>

      {/* Qualities */}
      <ul class="about-qualities">
        <li>🎯 <strong>Creative</strong> – turning complex ideas into simple digital experiences.</li>
        <li>🤝 <strong>Collaborative</strong> – thriving in team environments.</li>
        <li>🔍 <strong>Detail-Oriented</strong> – balancing clean design with solid functionality.</li>
      </ul>

      <p class="about-closing">
        Development isn’t just work — it’s about <strong>building solutions that matter and make an impact</strong>.
      </p>
    </div>

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
