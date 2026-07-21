/**CORE LIBRARY IMPORTS */
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;

/** Build the URL for a given frame index (1-based) */
const getFrameUrl = (index) => {
  const num = String(index).padStart(3, "0");
  return `${process.env.PUBLIC_URL}/sequence/ezgif-frame-${num}.webp`;
};

/**
 * Scrollytelling text beats — each beat has:
 *   start/end  : scroll progress range (0–1)
 *   align       : "center" | "left" | "right"
 *   title       : main heading
 *   subtitle    : supporting copy
 *   cta         : optional CTA button config
 *   glowPulse   : optional cyan text-shadow pulse on title
 */
const BEATS = [
  {
    start: 0.0,
    end: 0.2,
    align: "center",
    title: "Cloud Insider",
    subtitle: "Every system. One living network.",
    glowPulse: false,
  },
  {
    start: 0.25,
    end: 0.45,
    align: "left",
    title: "We Connect Your Infrastructure",
    subtitle:
      "From servers to security, unified under one intelligent network.",
    glowPulse: false,
  },
  {
    start: 0.5,
    end: 0.7,
    align: "right",
    title: "Built for Scale, Secured by Design",
    subtitle:
      "Real-time monitoring, zero-downtime architecture, enterprise-grade security.",
    glowPulse: true,
  },
  {
    start: 0.75,
    end: 0.95,
    align: "center",
    title: "Let's Build Your Cloud",
    subtitle: "Talk to our engineers — see what's possible.",
    cta: { label: "Get Started", href: "#contact" },
    glowPulse: true,
  },
];

/** Clamp a value between 0 and 1 */
const clamp01 = (v) => Math.max(0, Math.min(1, v));

/**
 * Compute beat opacity & y-offset from scroll progress.
 * Fade in over first 10% of range, stay, fade out over last 10%.
 * Enter: y 30→0, Exit: y 0→−30
 */
const getBeatStyle = (progress, beat) => {
  const { start, end } = beat;
  const range = end - start;
  const fadeInEnd = start + range * 0.1;
  const fadeOutStart = end - range * 0.1;

  let opacity = 0;
  let y = 30;

  if (progress < start || progress > end) {
    opacity = 0;
    y = progress < start ? 30 : -30;
  } else if (progress <= fadeInEnd) {
    const t = clamp01((progress - start) / (fadeInEnd - start));
    opacity = t;
    y = 30 * (1 - t);
  } else if (progress <= fadeOutStart) {
    opacity = 1;
    y = 0;
  } else {
    const t = clamp01((progress - fadeOutStart) / (end - fadeOutStart));
    opacity = 1 - t;
    y = -30 * t;
  }

  return { opacity, transform: `translateY(${y}px)` };
};

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const imagesRef = useRef([]);
  const frameIndexRef = useRef(0);
  const rafRef = useRef(null);

  /** Memoize alignment classes */
  const alignClassMap = useMemo(
    () => ({
      center: "beat-center",
      left: "beat-left",
      right: "beat-right",
    }),
    []
  );

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
      drawW = cw;
      drawH = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawH) / 2;
    } else {
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
      scrub: 0.6,
      onUpdate: (self) => {
        const progress = self.progress; // 0 → 1
        setScrollProgress(progress);

        const newIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(progress * FRAME_COUNT)
        );

        if (newIndex !== frameIndexRef.current) {
          frameIndexRef.current = newIndex;
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

  /** Scroll indicator opacity — fades out by 10% scroll */
  const scrollIndicatorOpacity = clamp01(1 - scrollProgress / 0.1);

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

        {/* Scrollytelling Text Overlays */}
        {isLoaded && (
          <div className="gsap-hero-text-overlay">
            {/* Beats */}
            {BEATS.map((beat, i) => {
              const style = getBeatStyle(scrollProgress, beat);
              return (
                <div
                  key={i}
                  className={`beat-overlay ${alignClassMap[beat.align]}`}
                  style={{
                    opacity: style.opacity,
                    transform: style.transform,
                    pointerEvents: style.opacity > 0.1 ? "auto" : "none",
                  }}
                >
                  <h1
                    className={`beat-title ${
                      beat.glowPulse ? "beat-glow-pulse" : ""
                    }`}
                  >
                    {beat.title}
                  </h1>
                  <p className="beat-subtitle">{beat.subtitle}</p>
                  {beat.cta && (
                    <motion.a
                      href={beat.cta.href}
                      className="beat-cta-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>{beat.cta.label}</span>
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
                    </motion.a>
                  )}
                </div>
              );
            })}

            {/* Scroll indicator */}
            <div
              className="gsap-hero-scroll-indicator"
              style={{ opacity: scrollIndicatorOpacity }}
            >
              <span className="gsap-hero-scroll-text">Scroll to Explore</span>
              <div className="gsap-hero-scroll-mouse">
                <div className="gsap-hero-scroll-dot" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
