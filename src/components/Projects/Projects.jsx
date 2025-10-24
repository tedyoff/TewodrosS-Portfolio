import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "E-commerce App",
      desc: "Full-stack React + Node.js + MySQL e-commerce application with product management, cart system, checkout, and payment gateway integration.",
      tech: ["React", "Node.js", "MySQL", "Stripe"],
      link: "https://amazon-clone-pi-amber.vercel.app/",
      github: "https://github.com/tedyoff/ecommerce_CRUD_Api_integration_fullstack",
      image: "https://www.thedigitalenterprise.com/wp-content/uploads/2019/03/Building-Mobile-E-Commerce-App-%E2%80%93-A-Complete-Handbook.jpg",
    },
    {
      name: "Chat Application",
      desc: "Real-time chat app with WebSocket, JWT authentication, and email notifications.",
      tech: ["React", "Express", "Socket.io", "EmailJS"],
      link: "https://chat-application-nb7e.vercel.app/",
      github: "https://github.com/tedyoff/Chat-Application",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Student Attendance Tracker",
      desc: "App to track student attendance with secure login and data visualization.",
      tech: ["React", "Node.js", "JWT"],
      link: "https://student-attendance-tracker-mocha-three.vercel.app/",
      github: "https://github.com/tedyoff/student-attendance-tracker",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Portfolio Website",
      desc: "Personal portfolio built with React, Framer Motion, and modern UI design.",
      tech: ["React", "Framer Motion", "CSS3"],
      link: "https://tewodros-s-portfolio.vercel.app/",
      github: "https://github.com/tedyoff/TewodrosS-Portfolio",
      image: "https://st2.depositphotos.com/1092019/9744/i/950/depositphotos_97442560-stock-photo-portfolio-on-laptop-in-modern.jpg",
    },
    {
      name: "Amazon Frontend Clone",
      desc: "Fully responsive Amazon clone with products, categories, cart, checkout, and secondary menu pages.",
      tech: ["React", "Tailwind CSS", "React Router", "Context API", "React Icons"],
      link: "https://amazon-clone-pi-amber.vercel.app/",
      github: "https://github.com/tedyoff/amazon-clone",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "EventHub – Event Discovery & Booking Platform",
      desc: "A responsive web app for discovering and booking events. Users can browse, book tickets via EmailJS, and get updates.",
      tech: ["HTML5", "CSS", "Bootstrap", "JavaScript", "EmailJS"],
      link: "https://eventhub-final-project.vercel.app/",
      github: "https://github.com/tedyoff/Eventhub-final-project",
      image: "https://images.pexels.com/photos/3184666/pexels-photo-3184666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  return (
    <section id="projects" className="projects">
      <motion.h2
        className="projects-title"
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
        <span className="gradient-text">Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <div className="project-image">
              <img src={p.image} alt={p.name} />
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>

            <div className="tech-list">
              {p.tech.map((t, j) => (
                <span key={j} className="tech">{t}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={p.link} target="_blank" rel="noreferrer" className="live">🔗 Live Demo</a>
              <a href={p.github} target="_blank" rel="noreferrer" className="code">💻 GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
