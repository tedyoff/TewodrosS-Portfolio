import React from "react";
import { FaGithub, FaLinkedin, FaChevronUp } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contact Info */}
        <div className="footer-contact">
          <a href="mailto:teddyoff317@gmail.com">📧 teddyoff317@gmail.com</a>
          <a href="tel:+17038176936">📞 +1 (703) 817-6936</a>
        </div>

        {/* Social Links */}
        <div className="footer-socials">
          <a href="https://github.com/tedyoff" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/tewodros-s-3b3466125/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Back to Top */}
        <button className="back-to-top" onClick={scrollToTop}>
          <FaChevronUp /> Top
        </button>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Tewodros Shawula
      </div>
    </footer>
  );
}

export default Footer;
