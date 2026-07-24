/**CORE LIBRARY IMPORTS */
import { useState } from "react";
import { motion } from "framer-motion";

/**IMAGE IMPORTS */
import heroBg from "../Images/hero-bg-img.png";

/**COMPONENT IMPORTS */
import MatterAnimation from "./MatterAnimation";

/* ─── Hover Letter Sub-Component (preserved from GSAP version) ─── */
const HoverTitle = ({ text, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const words = text.split(" ");

  return (
    <h1 className={`static-hero-title ${className || ""}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="word">
          {word.split("").map((char, letterIndex) => {
            const currentIndex = `${wordIndex}-${letterIndex}`;
            const isHovered = hoveredIndex === currentIndex;
            const isNeighbor =
              hoveredIndex === `${wordIndex}-${letterIndex - 1}` ||
              hoveredIndex === `${wordIndex}-${letterIndex + 1}`;

            let letterClass = "hover-letter";
            if (isHovered) letterClass += " hovered";
            if (!isHovered && isNeighbor) letterClass += " neighbor-glow";

            return (
              <span
                key={currentIndex}
                className={letterClass}
                onMouseEnter={() => setHoveredIndex(currentIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {char}
              </span>
            );
          })}
          {wordIndex < words.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </h1>
  );
};

const Hero = () => {
  return (
    <section className="static-hero" id="hero">
      {/* Background image */}
      <div className="static-hero-bg">
        <img src={heroBg} alt="" aria-hidden="true" />
        <div className="static-hero-overlay" />
      </div>

      {/* Matter.js animation overlay */}
      <MatterAnimation />

      {/* Content */}
      <div className="static-hero-content">
        <motion.div
          className="static-hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <HoverTitle
            text="EMPOWER. EVOLVE. EXCELLENCE."
            className="first-beat-title"
          />

          <motion.p
            className="static-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            We Build What Lasts.
          </motion.p>

          {/* <motion.p
            className="static-hero-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            Scalable platforms, AI-powered automation, and intelligent chatbots engineered to grow your business.
          </motion.p> */}

          <motion.div
            className="static-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          >
            <a href="#about" className="beat-cta-button">
              <span>Get Started</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            {/* <a href="#services" className="static-hero-secondary-btn">
              <span>See How We Help</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a> */}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="gsap-hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        >
          <span className="gsap-hero-scroll-text">Scroll to Explore</span>
          <div className="gsap-hero-scroll-mouse">
            <div className="gsap-hero-scroll-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
