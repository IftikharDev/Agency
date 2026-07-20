/**CORE LIBRARY IMPORTS */
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 137;

/** Build the URL for a given frame index (1-based) */
const getFrameUrl = (index) => {
  const num = String(index).padStart(3, "0");
  return `${process.env.PUBLIC_URL}/sequence/ezgif-frame-${num}.jpg`;
};

const Hero = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef(null);

  const text = "Empower. Evolve. Excellence";

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  /** Draw a specific frame index on the canvas with cover-fit behavior */
  const drawFrame = useCallback((index) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const img = imagesRef.current[index];
    if (!img || !img.complete || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;

    // object-fit: cover logic
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = cw / ch;

    let drawW, drawH, offsetX, offsetY;
    if (canvasRatio > imgRatio) {
      // canvas is wider than image ratio — match width
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    } else {
      // canvas is taller than image ratio — match height
      drawH = ch;
      drawW = ch * imgRatio;
      offsetX = (cw - drawW) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }, []);

  /** Resize canvas to match its display size (retina-aware) */
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    drawFrame(frameIndexRef.current);
  }, [drawFrame]);

  /** Preload all frames */
  useEffect(() => {
    let loaded = 0;
    const images = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      img.onload = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loaded++;
        setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };
      images.push(img);
    }

    imagesRef.current = images;
  }, []);

  /** Setup GSAP ScrollTrigger + canvas rendering */
  useEffect(() => {
    if (!isLoaded) return;

    // Initial draw + resize
    resizeCanvas();
    drawFrame(0);

    // Responsive resize
    window.addEventListener("resize", resizeCanvas);

    // GSAP ScrollTrigger — maps scroll to frame index
    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5, // smooth scrub (slight lag for buttery feel)
      onUpdate: (self) => {
        const progress = self.progress; // 0 → 1
        const newIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );

        if (newIndex !== frameIndexRef.current) {
          frameIndexRef.current = newIndex;
          // Use rAF for smooth 60fps rendering
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = requestAnimationFrame(() => {
            drawFrame(newIndex);
          });
        }
      },
    });

    return () => {
      trigger.kill();
      window.removeEventListener("resize", resizeCanvas);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isLoaded, drawFrame, resizeCanvas]);

  return (
    <div className="gsap-hero-wrapper" ref={wrapperRef}>
      {/* Sticky canvas + text container */}
      <div className="gsap-hero-sticky">
        <canvas ref={canvasRef} className="gsap-hero-canvas" />

        {/* Loading overlay */}
        {!isLoaded && (
          <div className="gsap-hero-loader">
            <div className="gsap-hero-loader-inner">
              <div className="gsap-hero-spinner" />
              <p className="gsap-hero-loader-text">Loading experience…</p>
              <div className="gsap-hero-progress-track">
                <div
                  className="gsap-hero-progress-bar"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
              <p className="gsap-hero-loader-pct">{loadProgress}%</p>
            </div>
          </div>
        )}

        {/* Text overlay */}
        {isLoaded && (
          <div className="gsap-hero-text-overlay">
            <div className="hero-content-wrapper">
              <h1 className="hero-title">
                {text.split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="word">
                    {word.split("").map((char, letterIndex) => {
                      const currentIndex = `${wordIndex}-${letterIndex}`;
                      const isHovered = hoveredIndex === currentIndex;
                      const isNeighbor =
                        hoveredIndex ===
                          `${wordIndex}-${letterIndex - 1}` ||
                        hoveredIndex ===
                          `${wordIndex}-${letterIndex + 1}`;

                      let className = "hover-letter";
                      if (isHovered) className += " hovered";
                      if (!isHovered && isNeighbor)
                        className += " neighbor-glow";

                      return (
                        <motion.span
                          key={currentIndex}
                          className={className}
                          onMouseEnter={() =>
                            setHoveredIndex(currentIndex)
                          }
                          onMouseLeave={() => setHoveredIndex(null)}
                          variants={letterVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{
                            delay:
                              (wordIndex * 10 + letterIndex) * 0.03,
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
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              >
                We Build What Lasts.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                className="gsap-hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.6 }}
              >
                <span className="gsap-hero-scroll-text">
                  Scroll to Explore
                </span>
                <div className="gsap-hero-scroll-mouse">
                  <div className="gsap-hero-scroll-dot" />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
