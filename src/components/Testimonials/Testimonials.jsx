import React from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

function Testimonials() {
  const feedback = [
    {
      name: "Desta MomonaTech",
      role: "CEO, Tech Solutions",
      message: "Tewodros is an exceptional developer who delivers high-quality work on time.",
    },
    {
      name: "Daniel Abera",
      role: "Project Manager, Software Engineer",
      message: "Working with Tewodros was seamless, professional, and highly productive.",
    },
    {
      name: "Addisalem Tamiru",
      role: "Software Engineer, DevSolutions",
      message: "His ability to solve problems quickly and efficiently impressed our whole team.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        className="testimonials-title"
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
        <span className="gradient-text">Testimonials</span>
      </motion.h2>

      <div className="testimonial-grid">
        {feedback.map((t, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="testimonial-message">“{t.message}”</p>
            <h4 className="testimonial-name">{t.name}</h4>
            <span className="testimonial-role">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
