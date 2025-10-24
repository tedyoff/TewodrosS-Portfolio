import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const container = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* Only Text Card */}
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
        >
          <h1 className="hero-title">
            Hello, I&apos;m <span className="highlight">Tewodros</span>
          </h1>

          <p className="hero-intro">
            🌍 A passionate{" "}
            <strong className="highlight">
              Junior Full-Stack Web Developer & Data Analyst
            </strong>{" "}
            crafting modern, scalable, and user-friendly applications.
          </p>

          <p className="hero-tagline">
            "Turning ideas into powerful digital solutions..."
          </p>

          {/* Skills */}
          <div className="hero-skills">
            <h2 className="hero-skills-title">I bring expertise in…</h2>
            <ul className="hero-skills-list">
              <li>🎨 <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, React, UX/UI Design</li>
              <li>⚙️ <strong>Backend:</strong> Node.js, Express.js, SQL, NoSQL, MongoDB</li>
              <li>🛠️ <strong>Tools:</strong> GitHub, Postman, VS Code</li>
            </ul>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">🚀 View My Work</a>
            <a href="/images/Tewodros-Shawula.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">📄 View CV</a>
          </div>

          <p className="hero-closing">
            Eager to grow and contribute — blending creativity with technical skill. Explore my projects and CV to see more about my profile.
          </p>
        </motion.div>
      </div>

      {/* Subtle gradient background */}
      <div className="hero-bg" />
    </section>
  );
}

export default Hero;
