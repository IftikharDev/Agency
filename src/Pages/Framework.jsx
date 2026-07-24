/**CORE LIBRARY IMPORTS */
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useReducedMotion,
} from "framer-motion";

/**ICON IMPORTS */
import { TbSearch, TbPalette, TbCode, TbArrowRight } from "react-icons/tb";

/**DATA / ASSETS */
import { workflowSteps } from "../Data";
import frameworkGif from "../Images/framework.gif";

const iconMap = {
  TbSearch,
  TbPalette,
  TbCode,
};

const Framework = () => {
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 992 : true,
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /** Hover expands a step; otherwise scroll / click selection wins */
  const expandedIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  /** Track fill follows the expanded step (hover or scroll selection) */
  const trackFillPercent =
    ((expandedIndex + 1) / workflowSteps.length) * 100;

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!isDesktop || reduceMotion) return undefined;

    return scrollYProgress.on("change", (value) => {
      if (value < 1 / 3) setActiveIndex(0);
      else if (value < 2 / 3) setActiveIndex(1);
      else setActiveIndex(2);
    });
  }, [scrollYProgress, isDesktop, reduceMotion]);

  const goToStep = (index) => {
    setActiveIndex(index);

    if (!isDesktop || reduceMotion || !containerRef.current) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollable = containerRef.current.offsetHeight - window.innerHeight;
    const target =
      scrollTop + (scrollable * (index + 0.5)) / workflowSteps.length;

    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section id="framework" className="framework-section" ref={containerRef}>
      <div className="framework-sticky">
        <div className="framework-inner">
          {/* Header */}
          <motion.header
            className="framework-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="framework-title">The Cloud Insider Framework.</h2>
            <p className="framework-subtitle">
              A proven 3-step framework for every project: strategy,
              design, and development.
            </p>
            <a href="#contact-us" className="framework-watch-link">
              <span className="framework-watch-thumb">
                <img src={frameworkGif} alt="" />
              </span>
              <span className="framework-watch-label">
                <span className="framework-watch-dot" />
                See how we work
                <TbArrowRight />
              </span>
            </a>
          </motion.header>

          {/* Body */}
          <div className="framework-body">
            {/* Left: steps */}
            <div className="framework-steps" role="list">
              <div className="framework-track" aria-hidden="true">
                <motion.div
                  className="framework-track-fill"
                  initial={false}
                  animate={{ height: `${trackFillPercent}%` }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {workflowSteps.map((step, index) => {
                const Icon = iconMap[step.icon];
                const isExpanded = expandedIndex === index;

                return (
                  <button
                    key={step.id}
                    type="button"
                    role="listitem"
                    className={`framework-step ${isExpanded ? "is-active" : ""}`}
                    onClick={() => goToStep(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    aria-current={isExpanded ? "step" : undefined}
                  >
                    <span
                      className="framework-step-marker"
                      aria-hidden="true"
                    />

                    <span
                      className={`framework-step-icon ${isExpanded ? "is-active" : ""}`}
                    >
                      {Icon ? <Icon /> : null}
                    </span>

                    <span className="framework-step-copy">
                      <span className="framework-step-heading">
                        <span className="framework-step-number">
                          {step.number}
                        </span>
                        <span className="framework-step-name">
                          {step.title}
                        </span>
                      </span>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.p
                            key={`desc-${step.id}`}
                            className="framework-step-desc"
                            initial={{ opacity: 0, height: 0, y: -6 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -6 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Center glow divider */}
            <div className="framework-divider" aria-hidden="true">
              <span className="framework-divider-line" />
              <span className="framework-divider-flare" />
            </div>

            {/* Right: visual */}
            <div className="framework-visual">
              <div className="framework-visual-card">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={expandedIndex}
                    className="framework-visual-media"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  >
                    <img
                      src={frameworkGif}
                      alt={`${workflowSteps[expandedIndex].title} stage visual`}
                    />
                    <div className="framework-visual-caption">
                      <span className="framework-visual-caption-num">
                        {workflowSteps[expandedIndex].number}
                      </span>
                      <span className="framework-visual-caption-title">
                        {workflowSteps[expandedIndex].title}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="framework-visual-glow" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
