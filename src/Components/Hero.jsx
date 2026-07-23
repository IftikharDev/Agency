/**CORE LIBRARY IMPORTS */
import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 240;
/** Active sequence. 160fps4k-opt is kept for later use. */
const FRAME_FOLDER = "240fps4k-opt";
/** Start the hero after this many early frames are ready */
const READY_THRESHOLD = 16;

/** Build the URL for a given frame index (1-based) */
const getFrameUrl = (index) => {
  const num = String(index).padStart(3, "0");
  const baseUrl = process.env.PUBLIC_URL || "";
  return `${baseUrl}/${FRAME_FOLDER}/ezgif-frame-${num}.webp`;
};

/**
 * Scrollytelling text beats configuration
 */
const BEATS = [
  {
    start: 0.0,
    end: 0.15,
    align: "center",
    title: "EMPOWER. EVOLVE. EXCELLENCE",
    subtitle: "We Build What Lasts.",
    glowPulse: false,
    titleClass: "first-beat-title",
  },
  {
    start: 0.25,
    end: 0.45,
    align: "left",
    title: "We Connect Your Infrastructure",
    subtitle:
      "From servers to security, unified under one intelligent network.",
    glowPulse: false,
    titleClass: "glowing-title",
  },
  {
    start: 0.5,
    end: 0.7,
    align: "right",
    title: "Built for Scale, Secured by Design",
    subtitle:
      "Real-time monitoring, zero-downtime architecture, enterprise-grade security.",
    glowPulse: true,
    titleClass: "glowing-title",
  },
  {
    start: 0.75,
    end: 0.95,
    align: "center",
    title: "Let's Build Your Cloud",
    subtitle: "Talk to our engineers — see what's possible.",
    cta: { label: "Get Started", href: "#contact" },
    glowPulse: true,
    titleClass: "glowing-title",
  },
];

const ALIGN_CLASS = {
  center: "beat-center",
  left: "beat-left",
  right: "beat-right",
};

/* ─── Hover Letter Sub-Component ─── */
const HoverTitle = ({ text, glowPulse, titleClass }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const words = text.split(" ");

  return (
    <h1 className={`beat-title ${glowPulse ? "beat-glow-pulse" : ""} ${titleClass || ""}`}>
      {words.map((word, wordIndex) => (
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
              <span
                key={currentIndex}
                className={className}
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
  const [isReady, setIsReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);
  const framesRef = useRef(new Array(FRAME_COUNT).fill(null));
  const readyCountRef = useRef(0);
  const frameIndexRef = useRef(0);
  const playheadRef = useRef({ frame: 0 });
  const startedRef = useRef(false);

  const beatRefs = useRef([]);
  const scrollIndicatorRef = useRef(null);

  /** Prefer exact frame; otherwise nearest loaded neighbor */
  const getDrawableFrame = useCallback((index) => {
    const frames = framesRef.current;
    const exact = frames[index];
    if (exact?.complete && exact.naturalWidth) return exact;

    for (let d = 1; d < FRAME_COUNT; d++) {
      const prev = frames[index - d];
      if (prev?.complete && prev.naturalWidth) return prev;
      const next = frames[index + d];
      if (next?.complete && next.naturalWidth) return next;
    }
    return null;
  }, []);

  /** Draw a specific frame index on the canvas with cover-fit behavior */
  const drawFrame = useCallback(
    (index) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const img = getDrawableFrame(index);
      if (!img) return;

      const cw = canvas.width;
      const ch = canvas.height;
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

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
    },
    [getDrawableFrame]
  );

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    drawFrame(frameIndexRef.current);
  }, [drawFrame]);

  /** Progressive preload — start after first frames, throttle the rest */
  useEffect(() => {
    let cancelled = false;
    const images = new Array(FRAME_COUNT).fill(null);
    let nextIndex = 0;
    let inFlight = 0;
    const MAX_CONCURRENT = 6;

    const markReady = () => {
      if (cancelled) return;
      readyCountRef.current += 1;
      const loaded = readyCountRef.current;
      setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));

      if (!startedRef.current && loaded >= READY_THRESHOLD) {
        startedRef.current = true;
        setIsReady(true);
      }
    };

    const pump = () => {
      while (!cancelled && inFlight < MAX_CONCURRENT && nextIndex < FRAME_COUNT) {
        const i = nextIndex++;
        inFlight++;
        const img = new Image();
        img.decoding = "async";
        if (i < READY_THRESHOLD) img.fetchPriority = "high";
        const finish = () => {
          inFlight--;
          markReady();
          pump();
        };
        img.onload = finish;
        img.onerror = finish;
        img.src = getFrameUrl(i + 1);
        images[i] = img;
      }
    };

    framesRef.current = images;
    pump();

    return () => {
      cancelled = true;
    };
  }, []);

  /** GSAP scroll-linked frame animation + text beats */
  useEffect(() => {
    if (!isReady) return;

    resizeCanvas();
    drawFrame(0);

    const updateBeats = (progress) => {
      BEATS.forEach((beat, i) => {
        const el = beatRefs.current[i];
        if (!el) return;

        const { start, end } = beat;
        const range = end - start;
        const fadeInEnd = start + range * 0.15;
        const fadeOutStart = end - range * 0.15;

        let opacity = 0;
        let y = 30;

        if (progress < start || progress > end) {
          opacity = 0;
          y = progress < start ? 30 : -30;
        } else if (progress <= fadeInEnd && start > 0) {
          const t = Math.min(1, (progress - start) / (fadeInEnd - start));
          opacity = t;
          y = 30 * (1 - t);
        } else if (progress <= fadeOutStart) {
          opacity = 1;
          y = 0;
        } else {
          const t = Math.min(1, (progress - fadeOutStart) / (end - fadeOutStart));
          opacity = 1 - t;
          y = -30 * t;
        }

        gsap.set(el, {
          opacity,
          y,
          pointerEvents: opacity > 0.1 ? "auto" : "none",
        });
      });

      const indicatorEl = scrollIndicatorRef.current;
      if (indicatorEl) {
        gsap.set(indicatorEl, { opacity: Math.max(0, 1 - progress / 0.1) });
      }
    };

    const playhead = playheadRef.current;
    playhead.frame = 0;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateBeats(self.progress),
      },
    });

    tl.to(playhead, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      onUpdate: () => {
        const idx = Math.round(playhead.frame);
        if (idx === frameIndexRef.current) return;
        frameIndexRef.current = idx;
        requestAnimationFrame(() => drawFrame(idx));
      },
    });

    BEATS.forEach((beat, i) => {
      const el = beatRefs.current[i];
      if (!el) return;
      gsap.set(el, {
        opacity: beat.start === 0 ? 1 : 0,
        y: beat.start === 0 ? 0 : 30,
        pointerEvents: beat.start === 0 ? "auto" : "none",
      });
    });

    const onResize = () => {
      resizeCanvas();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);
    ScrollTrigger.refresh();

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
      window.removeEventListener("resize", onResize);
    };
  }, [isReady, drawFrame, resizeCanvas]);

  return (
    <div className="gsap-hero-wrapper" ref={wrapperRef}>
      <div className="gsap-hero-sticky" ref={stickyRef}>
        <canvas ref={canvasRef} className="gsap-hero-canvas" />

        {!isReady && (
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

        {isReady && (
          <div className="gsap-hero-text-overlay">
            {BEATS.map((beat, i) => (
              <div
                key={i}
                className={`beat-overlay ${ALIGN_CLASS[beat.align]}`}
              >
                <div
                  ref={(el) => (beatRefs.current[i] = el)}
                  className="beat-content"
                  style={{ opacity: 0 }}
                >
                  <HoverTitle
                    text={beat.title}
                    glowPulse={beat.glowPulse}
                    titleClass={beat.titleClass}
                  />
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
              </div>
            ))}

            <div ref={scrollIndicatorRef} className="gsap-hero-scroll-indicator">
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
