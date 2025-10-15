import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // ✅ Import EmailJS
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // for success message

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_872cqtr", // ✅ your Service ID
        "template_2jyor37", // ✅ your Template ID
        form.current,
        "hWpbI_oH9gVDwrR-0" // ⬅️ Public Key (from dashboard)
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message submitted successfully!");
          e.target.reset();
          setTimeout(() => setStatus(""), 4000); // hide after 4s
        },
        (error) => {
          console.error("Email send error:", error.text);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="contact-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Let’s build something amazing together!
      </motion.p>

      {/* ✅ Connected EmailJS Form */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required></textarea>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* ✅ Success/Failure message */}
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}

export default Contact;
