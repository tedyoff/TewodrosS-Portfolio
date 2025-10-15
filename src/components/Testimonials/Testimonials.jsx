import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const feedback = [
    {
      name: "Desta momonaTech",
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
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {feedback.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-message">“{t.message}”</p>
            <h4>{t.name}</h4>
            <span>{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
