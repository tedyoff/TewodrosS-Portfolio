import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollProgress.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="progress-bar" style={{ scaleX }} />
  );
}

export default ScrollProgress;
