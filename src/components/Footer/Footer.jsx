import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaChevronUp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [showFAQ, setShowFAQ] = useState(false);

  const faqs = [
    {
      q: "What services do you provide?",
      a: "I specialize in Full-Stack Web Development (React, Node.js, MongoDB, MySQL, API Integration).",
    },
    {
      q: "Are you open to remote work?",
      a: "Yes, I am open to both remote and on-site opportunities globally.",
    },
    {
      q: "How can I contact you?",
      a: "You can reach me via email, LinkedIn, or through the contact form above.",
    },
    {
      q: "Do you contribute to open-source?",
      a: "Yes, I actively share projects on GitHub and contribute to open-source repositories.",
    },
    {
      q: "Can I collaborate with you on a project?",
      a: "Absolutely! I enjoy collaborating on innovative projects that solve real-world problems.",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Top Section */}
      <div className="footer-top">
        {/* Location */}
        <div className="footer-location">
          <FaMapMarkerAlt className="icon" />
          <span>Virginia, USA</span>
          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3186848.273297284!2d-80.229!3d37.4316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b476d73d8c6b27%3A0x2d84b16a5e7ac25!2sVirginia%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Language Selector */}
        <div className="footer-language">
          <label htmlFor="language">🌍 Language:</label>
          <select id="language">
            <option value="EN">English</option>
            <option value="FR">Français</option>
            <option value="AM">አማርኛ</option>
          </select>
        </div>

        {/* Quick Contact */}
        <div className="footer-contact">
          <p>
            Email:{" "}
            <a href="mailto:teddyoff317@gmail.com">teddyoff317@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+17038176936">+1 (703) 817-6936</a>
          </p>
          <button className="faq-toggle" onClick={() => setShowFAQ(!showFAQ)}>
            {showFAQ ? "Hide FAQ" : "FAQ"}
          </button>
        </div>
      </div>

      {/* FAQ Section (Toggle) */}
      {showFAQ && (
        <div className="footer-faq">
          <h3>❓ Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <button>{faq.q}</button>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Social Links */}
      <div className="social-links">
        
        <a
          href="https://github.com/tedyoff"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tewodros-s-3b3466125/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Back to Top */}
      <button className="back-to-top" onClick={scrollToTop}>
        <FaChevronUp /> Back to Top
      </button>

      {/* Copyright */}
      <p className="footer-bottom">
        © {new Date().getFullYear()} Tewodros Shawula. All rights reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;
