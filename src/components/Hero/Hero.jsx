import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../../assets/myPhoto.jpg";
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
        {/* Left Side - Text */}
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <h1 className="hero-title">
            Hello, I&apos;m{" "}
            <span className="highlight">Tewodros</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300 mb-6">
    🌍 A passionate <span class="font-semibold text-indigo-300"><strong>Junior Full-Stack Web Developer & Data Analyst </strong></span>  
    crafting modern, scalable, and user-friendly applications.
  </p>

  {/* Short Tagline */}
  <p className="italic text-gray-400 mb-10">
    "Turning ideas into powerful digital solutions..."
  </p>

  {/* Skills */}
  <div class="text-left max-w-2xl mb-10">
    <h2 class="text-xl font-semibold mb-4 text-indigo-300">I bring expertise in…</h2>
    <ul class="space-y-3 text-gray-300">
      <li>🎨 <strong>Frontend:</strong> HTML, CSS, Tailwind CSS, React, and UX/UI Design</li>
      <li>⚙️ <strong>Backend:</strong> Node.js, Express.js, SQL, NoSQL, and MongoDB</li>
      <li>🛠️ <strong>Tools:</strong> GitHub, Postman, and VS Code</li>
    </ul>
  </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              🚀 View My Work
            </a>
            <a
              href="/images/Tewodros-Shawula.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 View CV
            </a>
           {/* Closing Line */}
          <p class="mt-10 text-gray-400 text-sm max-w-xl">
    Eager to grow and contribute — blending creativity with technical skill.  
    Explore my projects and CV to see more about my profile.
  </p>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="hero-image"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <img
            src={myPhoto}
            alt="Portrait of Tewodros Shawula"
            className="hero-photo"
          />
        </motion.div>
      </div>

      {/* Subtle gradient background */}
      <div className="hero-bg" />
    </section>
  );
}

export default Hero;
