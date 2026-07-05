/**CORE LIBRARY IMPORTS */
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const text = "Empower. Evolve. Excellence";

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="hero-row">
      <h1 className="hero-title">
        {text.split(" ").map((word, wordIndex) => (
          <span key={wordIndex} className="word">
            {word.split("").map((char, letterIndex) => {
              const currentIndex = `${wordIndex}-${letterIndex}`;

              const isHovered = hoveredIndex === currentIndex;

              const isNeighbor =
                hoveredIndex === `${wordIndex}-${letterIndex - 1}` ||
                hoveredIndex === `${wordIndex}-${letterIndex + 1}`;

              let className = "hover-letter";
              if (isHovered) className += " hovered";
              if (!isHovered && isNeighbor) className += " neighbor-glow";

              return (
                <motion.span
                  key={currentIndex}
                  className={className}
                  onMouseEnter={() => setHoveredIndex(currentIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    delay: (wordIndex * 10 + letterIndex) * 0.03,
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
            &nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Hero;
