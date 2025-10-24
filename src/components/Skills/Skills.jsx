import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiPostman,
} from "react-icons/si";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact color="#61DBFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#000" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs color="#3C873A" /> },
        { name: "Express.js", icon: <SiExpress color="#000" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E535AB" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb color="#4DB33D" /> },
        { name: "MySQL", icon: <SiMysql color="#00618A" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      ],
    },
    {
      title: "DevOps & Cloud",
      skills: [
        { name: "AWS", icon: <FaAws color="#FF9900" /> },
        { name: "Docker", icon: <FaDocker color="#2496ED" /> },
        { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "GitHub", icon: <FaGitAlt color="#181717" /> },
        { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
        { name: "VS Code", icon: <FaDatabase color="#007ACC" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <motion.h2
        className="skills-title"
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
        <span className="gradient-text">Skills</span>
      </motion.h2>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
          >
            <h3 className="skill-title">{cat.title}</h3>
            <div className="skill-icons">
              {cat.skills.map((s, j) => (
                <div key={j} className="skill-item">
                  {s.icon}
                  <span>{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
