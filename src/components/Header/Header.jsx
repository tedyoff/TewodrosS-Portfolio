import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(null); // desktop hover
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(null); // track which dropdown is open on mobile

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  return (
    <motion.header
      className="header"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Logo */}
      <div className="logo">Tewodros Shawula</div>

      {/* Desktop Nav */}
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#home">Home</a></li>

          {/* About */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenMenu("about")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#about">About</a>
            {openMenu === "about" && (
              <ul className="dropdown">
                <li><a href="#about">About Me</a></li>
              </ul>
            )}
          </li>

          {/* Projects */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenMenu("projects")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#projects">Projects</a>
            {openMenu === "projects" && (
              <ul className="dropdown">
                <li><a href="#projects">E-commerce App</a></li>
                <li><a href="#projects">Amazon Frontend Clone</a></li>
                <li><a href="#projects">Student Attendance Tracker</a></li>
                <li><a href="#projects">EventHub-Event Discovery & Booking Platform</a></li>
              </ul>
            )}
          </li>

          {/* Skills */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenMenu("skills")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#skills">Skills</a>
            {openMenu === "skills" && (
              <ul className="dropdown">
                <li><a href="#skills">Frontend</a></li>
                <li><a href="#skills">Backend</a></li>
                <li><a href="#skills">Databases</a></li>
                <li><a href="#skills">DevOps & Cloud</a></li>
                <li><a href="#skills">Tools</a></li>
              </ul>
            )}
          </li>

          {/* Education */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenMenu("education")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#education">Education</a>
            {openMenu === "education" && (
              <ul className="dropdown">
                <li><a href="#education">Full-Stack Developer</a></li>
                <li><a href="#education">Master in Hydraulics Engineering</a></li>
                <li><a href="#education">Bachelor in Water Resources & Irrigation Management</a></li>
                <li><a href="#education">Certificates</a></li>
              </ul>
            )}
          </li>

          {/* Experience */}
          <li
            className="nav-item"
            onMouseEnter={() => setOpenMenu("experience")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <a href="#experience">Experience</a>
            {openMenu === "experience" && (
              <ul className="dropdown">
                <li><a href="#experience">Full Stack Developer</a></li>
                <li><a href="#experience">Open Source Contributor</a></li>
                <li><a href="#experience">Transportation Specialist</a></li>
                <li><a href="#experience">Part-Time Project Supervisor</a></li>
                <li><a href="#experience">Lecturer</a></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hamburger (mobile toggle) */}
      <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setMobileOpen(false)}>Home</a></li>

          {/* About */}
          <li>
            <button onClick={() => toggleMobileDropdown("about")}>
              About {mobileDropdown === "about" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {mobileDropdown === "about" && (
              <ul>
                <li><a href="#about" onClick={() => setMobileOpen(false)}>About Me</a></li>
              </ul>
            )}
          </li>

          {/* Projects */}
          <li>
            <button onClick={() => toggleMobileDropdown("projects")}>
              Projects {mobileDropdown === "projects" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {mobileDropdown === "projects" && (
              <ul>
                <li><a href="#projects" onClick={() => setMobileOpen(false)}>E-commerce App</a></li>
                <li><a href="#projects" onClick={() => setMobileOpen(false)}>Amazon Clone</a></li>
                <li><a href="#projects" onClick={() => setMobileOpen(false)}>Student Attendance Tracker</a></li>
                <li><a href="#projects" onClick={() => setMobileOpen(false)}>Portfolio Website</a></li>
              </ul>
            )}
          </li>

          {/* Skills */}
          <li>
            <button onClick={() => toggleMobileDropdown("skills")}>
              Skills {mobileDropdown === "skills" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {mobileDropdown === "skills" && (
              <ul>
                <li><a href="#skills" onClick={() => setMobileOpen(false)}>Frontend</a></li>
                <li><a href="#skills" onClick={() => setMobileOpen(false)}>Backend</a></li>
                <li><a href="#skills" onClick={() => setMobileOpen(false)}>Databases</a></li>
                <li><a href="#skills" onClick={() => setMobileOpen(false)}>DevOps & Cloud</a></li>
                <li><a href="#skills" onClick={() => setMobileOpen(false)}>Tools</a></li>
              </ul>
            )}
          </li>

          {/* Education */}
          <li>
            <button onClick={() => toggleMobileDropdown("education")}>
              Education {mobileDropdown === "education" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {mobileDropdown === "education" && (
              <ul>
                <li><a href="#education" onClick={() => setMobileOpen(false)}>Full-Stack Developer</a></li>
                <li><a href="#education" onClick={() => setMobileOpen(false)}>MSc</a></li>
                <li><a href="#education" onClick={() => setMobileOpen(false)}>BSc</a></li>
                <li><a href="#education" onClick={() => setMobileOpen(false)}>Certificates</a></li>
              </ul>
            )}
          </li>

          {/* Experience */}
          <li>
            <button onClick={() => toggleMobileDropdown("experience")}>
              Experience {mobileDropdown === "experience" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {mobileDropdown === "experience" && (
              <ul>
                <li><a href="#experience" onClick={() => setMobileOpen(false)}>Fullstack Developer</a></li>
                <li><a href="#experience" onClick={() => setMobileOpen(false)}>Frontend Developer</a></li>
                <li><a href="#experience" onClick={() => setMobileOpen(false)}>Backend Developer</a></li>
                <li><a href="#experience" onClick={() => setMobileOpen(false)}>Internships</a></li>
              </ul>
            )}
          </li>

          <li><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </motion.header>
  );
}

export default Header;
