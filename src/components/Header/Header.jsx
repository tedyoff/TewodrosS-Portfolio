import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown(mobileDropdown === menu ? null : menu);
  };

  const navItems = [
    { name: "Home", link: "#home" },
    {
      name: "About",
      link: "#about",
      sub: [{ name: "About Me", link: "#about" }],
    },
    {
      name: "Projects",
      link: "#projects",
      sub: [
        { name: "E-commerce App", link: "#projects" },
        { name: "Amazon Clone", link: "#projects" },
        { name: "Student Attendance Tracker", link: "#projects" },
        { name: "Portfolio Website", link: "#projects" },
      ],
    },
    {
      name: "Skills",
      link: "#skills",
      sub: [
        { name: "Frontend", link: "#skills" },
        { name: "Backend", link: "#skills" },
        { name: "Databases", link: "#skills" },
        { name: "DevOps & Cloud", link: "#skills" },
        { name: "Tools", link: "#skills" },
      ],
    },
    {
      name: "Education",
      link: "#education",
      sub: [
        { name: "Full-Stack Developer", link: "#education" },
        { name: "MSc", link: "#education" },
        { name: "BSc", link: "#education" },
        { name: "Certificates", link: "#education" },
      ],
    },
    {
      name: "Experience",
      link: "#experience",
      sub: [
        { name: "Full Stack Developer Intern", link: "#experience" },
        { name: "Open Source Contributor", link: "#experience" },
        { name: "Transportation Specialist", link: "#experience" },
        { name: "Lecturer", link: "#experience" },
      ],
    },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.header
      className="header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="header-container">
        <div className="logo">Tewodros Shawula</div>

        {/* Desktop Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="nav-item"
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <a href={item.link}>{item.name}</a>
                {item.sub && openMenu === item.name && (
                  <ul className="dropdown">
                    {item.sub.map((subItem, j) => (
                      <li key={j}>
                        <a href={subItem.link}>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item, i) => (
            <li key={i}>
              {item.sub ? (
                <>
                  <button onClick={() => toggleMobileDropdown(item.name)}>
                    {item.name}{" "}
                    {mobileDropdown === item.name ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {mobileDropdown === item.name && (
                    <ul>
                      {item.sub.map((sub, j) => (
                        <li key={j}>
                          <a href={sub.link} onClick={() => setMobileOpen(false)}>
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.link} onClick={() => setMobileOpen(false)}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.header>
  );
}

export default Header;
