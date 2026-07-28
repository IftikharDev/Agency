/**CORE LIBRARY IMPORTS */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**ICON IMPORTS */
import {
  TbCheck,
  TbFlame,
  TbClock,
  TbRocket,
  TbChevronLeft,
  TbChevronRight,
} from "react-icons/tb";

/**CONFIG */
import { pricingConfig } from "../pricingConfig";

const Pricing = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const containerRef = useRef(null);

  const { plans, sectionTitle, sectionSubtitle } = pricingConfig;
  const total = plans.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= total) return;
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  }, [activeIndex, total]);

  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  /* Keyboard nav */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  /* Touch swipe */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(touchDeltaX.current) > 50) {
      if (touchDeltaX.current < 0) next();
      else prev();
    }
    touchDeltaX.current = 0;
  };

  /* Card positioning — stacked, overlapping */
  const getCardStyle = (index) => {
    const offset = index - activeIndex;

    if (isMobile) {
      /* Mobile: only show active card */
      if (offset === 0) {
        return {
          transform: "translateX(0) scale(1)",
          opacity: 1,
          zIndex: 10,
          filter: "none",
          pointerEvents: "auto",
        };
      }
      return {
        transform: `translateX(${offset * 110}%) scale(0.85)`,
        opacity: 0,
        zIndex: 1,
        filter: "blur(4px)",
        pointerEvents: "none",
      };
    }

    /* Desktop: overlapping stack */
    if (offset === 0) {
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 10,
        filter: "none",
        pointerEvents: "auto",
      };
    }

    const absOffset = Math.abs(offset);
    const sign = offset > 0 ? 1 : -1;

    if (absOffset === 1) {
      return {
        transform: `translateX(${sign * 72}%) scale(0.92)`,
        opacity: 0.55,
        zIndex: 5,
        filter: "blur(1.5px)",
        pointerEvents: "none",
      };
    }

    if (absOffset === 2) {
      return {
        transform: `translateX(${sign * 130}%) scale(0.84)`,
        opacity: 0.25,
        zIndex: 2,
        filter: "blur(3px)",
        pointerEvents: "none",
      };
    }

    return {
      transform: `translateX(${sign * 180}%) scale(0.78)`,
      opacity: 0,
      zIndex: 1,
      filter: "blur(5px)",
      pointerEvents: "none",
    };
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="pricing"
      className="section2-wrapper"
      style={{ marginTop: "0", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Section Header */}
          <motion.h2 className="section2-title" variants={fadeUp}>
            {sectionTitle}
          </motion.h2>
          <motion.p
            className="section2-text"
            variants={fadeUp}
            style={{ marginTop: "12px", maxWidth: "640px" }}
          >
            {sectionSubtitle}
          </motion.p>

          {/* Carousel Container */}
          <motion.div variants={fadeUp} className="pricing-carousel" ref={containerRef}>
            {/* White glow behind active card */}
            <div className="pricing-carousel__glow" />

            {/* Track with overlapping cards */}
            <div
              className="pricing-carousel__track"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {plans.map((plan, index) => {
                const style = getCardStyle(index);
                return (
                  <div
                    key={plan.id}
                    className={`pricing-card pricing-carousel__card ${plan.highlighted ? "pricing-card--featured" : ""} ${index === activeIndex ? "pricing-card--active" : ""}`}
                    style={{
                      transform: style.transform,
                      opacity: style.opacity,
                      zIndex: style.zIndex,
                      filter: style.filter,
                      pointerEvents: style.pointerEvents,
                    }}
                    onClick={() => {
                      if (index !== activeIndex) goTo(index);
                    }}
                  >
                    {/* Glow accent for featured card */}
                    {plan.highlighted && <div className="pricing-card__glow" />}

                    {/* Tag badge */}
                    <span
                      className="pricing-tag"
                      style={{
                        backgroundColor: `${plan.tagColor}18`,
                        color: plan.tagColor,
                        borderColor: `${plan.tagColor}40`,
                      }}
                    >
                      {plan.id === "growth" && <TbFlame style={{ fontSize: "14px" }} />}
                      {plan.tag}
                    </span>

                    {/* Plan name */}
                    <h3 className="pricing-plan-name">{plan.name}</h3>

                    {/* Price block */}
                    <div className="pricing-price-block">
                      {plan.originalPrice && (
                        <span className="pricing-original-price">{plan.originalPrice}</span>
                      )}
                      <span className="pricing-price">{plan.price}</span>
                      <span className="pricing-per">{plan.pricePer}</span>
                    </div>

                    {/* Description */}
                    <p className="pricing-description">{plan.description}</p>

                    {/* CTA Button */}
                    <a
                      href={plan.ctaLink}
                      target={plan.ctaType === "stripe" ? "_self" : plan.ctaType === "contact" ? undefined : "_blank"}
                      rel={plan.ctaType === "calendly" ? "noopener noreferrer" : undefined}
                      className={`pricing-cta ${plan.highlighted ? "pricing-cta--featured" : ""}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (plan.ctaType === "contact") {
                          e.preventDefault();
                          /* Dispatch event to pre-fill contact message */
                          window.dispatchEvent(
                            new CustomEvent("prefill-contact", {
                              detail: { planName: plan.name },
                            })
                          );
                          /* Smooth scroll to contact section */
                          const contactEl = document.getElementById("contact-us");
                          if (contactEl) {
                            contactEl.scrollIntoView({ behavior: "smooth", block: "center" });
                          }
                        }
                      }}
                    >
                      {plan.ctaText}
                    </a>

                    {/* Slots left progress bar */}
                    <div className="pricing-slots">
                      <div className="pricing-slots__header">
                        <span className="pricing-slots__label">
                          <TbClock style={{ fontSize: "14px" }} />
                          Availability
                        </span>
                        <span className="pricing-slots__count" style={{ color: plan.tagColor }}>
                          {plan.slotsLeft} slot{plan.slotsLeft !== 1 ? "s" : ""} left
                        </span>
                      </div>
                      <div className="pricing-slots__bar-bg">
                        <motion.div
                          className="pricing-slots__bar-fill"
                          style={{ backgroundColor: plan.tagColor }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(plan.slotsLeft / plan.slotsTotal) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="pricing-divider" />

                    {/* Features checklist */}
                    <ul className="pricing-features">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="pricing-feature-item">
                          <TbCheck className="pricing-feature-check" style={{ color: plan.tagColor }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom meta row */}
                    <div className="pricing-meta-row">
                      {plan.metaItems.map((meta, idx) => (
                        <div key={idx} className="pricing-meta-item">
                          <TbRocket style={{ fontSize: "14px", color: plan.tagColor }} />
                          <div>
                            <span className="pricing-meta-value">{meta.value}</span>
                            <span className="pricing-meta-label">{meta.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              className={`pricing-nav-arrow pricing-nav-arrow--left ${activeIndex === 0 ? "pricing-nav-arrow--disabled" : ""}`}
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous plan"
            >
              <TbChevronLeft />
            </button>
            <button
              className={`pricing-nav-arrow pricing-nav-arrow--right ${activeIndex === total - 1 ? "pricing-nav-arrow--disabled" : ""}`}
              onClick={next}
              disabled={activeIndex === total - 1}
              aria-label="Next plan"
            >
              <TbChevronRight />
            </button>

            {/* Navigation Dots */}
            <div className="pricing-nav-dots">
              {plans.map((plan, idx) => (
                <button
                  key={plan.id}
                  className={`pricing-nav-dot ${idx === activeIndex ? "pricing-nav-dot--active" : ""}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to ${plan.name}`}
                  style={idx === activeIndex ? { backgroundColor: plans[activeIndex].tagColor, boxShadow: `0 0 12px ${plans[activeIndex].tagColor}60` } : {}}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
