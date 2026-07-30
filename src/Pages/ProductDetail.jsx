/**CORE LIBRARY IMPORTS */
import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**ICON IMPORTS */
import { 
  TbChartAreaLine, 
  TbCpu, 
  TbShieldCheck, 
  TbCheck,
  TbTrendingUp,
  TbMessageChatbot,
  TbBrandInstagram,
  TbFileInvoice,
  TbTargetArrow,
  TbHeadset,
  TbChartArrowsVertical,
  TbAlertTriangle,
  TbCircleCheck,
  TbArrowRight
} from "react-icons/tb";

/**DATA IMPORTS */
import { saasProducts, businessProblems } from "../Data";
import Contact from "./Contact";

/**IMAGE IMPORTS — Analytics */
import analytics1 from "../Images/1CIAnalytics (1).webp";
import analytics2 from "../Images/2CIAnalytics (1).webp";
import analytics3 from "../Images/3CIAnalytics (1).webp";
import analytics4 from "../Images/4CIAnalytics (1).webp";

/**IMAGE IMPORTS — Automation */
import automation1 from "../Images/1CIAutomation (1).webp";
import automation2 from "../Images/2CIAutomation (1).webp";
import automation3 from "../Images/3CIAutomation (1).webp";
import automation4 from "../Images/4CIAutomation (1).webp";

/**IMAGE IMPORTS — Shield */
import shield1 from "../Images/1CIShield (1).webp";
import shield2 from "../Images/2CIShield (1).webp";
import shield3 from "../Images/3CIShield (1).webp";
import shield4 from "../Images/4CIShield (1).webp";

/** Map product slugs to their image sets */
const productImages = {
  "ci-analytics": [analytics1, analytics2, analytics3, analytics4],
  "ci-automate": [automation1, automation2, automation3, automation4],
  "ci-shield": [shield1, shield2, shield3, shield4],
};

const iconMap = {
  TbChartAreaLine: TbChartAreaLine,
  TbCpu: TbCpu,
  TbShieldCheck: TbShieldCheck,
  TbMessageChatbot: TbMessageChatbot,
  TbBrandInstagram: TbBrandInstagram,
  TbFileInvoice: TbFileInvoice,
  TbTargetArrow: TbTargetArrow,
  TbHeadset: TbHeadset,
  TbChartArrowsVertical: TbChartArrowsVertical,
};

/** Slideshow crossfade variants */
const slideVariants = {
  enter: { opacity: 0, scale: 1.08 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.5, ease: "easeIn" },
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = saasProducts.find((p) => p.slug === slug);

  const images = productImages[slug] || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, currentSlide]);

  // Reset slide index on product change
  useEffect(() => {
    setCurrentSlide(0);
  }, [slug]);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleContactScroll = (e, prefill) => {
    e.preventDefault();

    if (prefill) {
      window.dispatchEvent(
        new CustomEvent("prefill-contact", { detail: prefill })
      );
    }

    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.location.href = "/#contact-us";
    }
  };

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const IconComponent = iconMap[product.icon];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="section2-wrapper"
      style={{ paddingTop: "150px", minHeight: "100vh" }}
    >
      <div className="section2-container">
        {/* Back Link */}
        <Link to="/#services" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '40px', fontSize: '16px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
          &larr; Back to Products
        </Link>

        {/* Hero Section of Product */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              background: product.gradient,
              padding: "24px",
              borderRadius: "24px",
              display: "inline-flex",
              marginBottom: "24px",
            }}
          >
            {IconComponent && (
              <IconComponent style={{ fontSize: "48px", color: "#fff" }} />
            )}
          </div>

          <h1
            className="section2-title"
            style={{ fontSize: "48px", marginBottom: "16px" }}
          >
            {product.name}
          </h1>
          <h3
            style={{
              fontSize: "24px",
              fontWeight: "normal",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "600px",
              margin: "0 auto 32px",
            }}
          >
            {product.tagline}
          </h3>

          <p
            className="section2-text"
            style={{ maxWidth: "800px", margin: "0 auto", fontSize: "18px" }}
          >
            {product.description}
          </p>
        </motion.div>

        {/* Main Content Split: Details + Media Slideshow */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "60px",
            alignItems: "flex-start",
            marginBottom: "80px",
          }}
        >
          {/* Text Details */}
          <motion.div
            style={{ flex: "1 1 400px" }}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontSize: "32px",
                color: "#fff",
                marginBottom: "24px",
                fontWeight: "bold",
              }}
            >
              Overview
            </h2>
            <p
              className="section2-text"
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: "1.8",
              }}
            >
              {product.details}
            </p>

            <h3
              style={{
                fontSize: "24px",
                color: "#fff",
                marginTop: "40px",
                marginBottom: "24px",
                fontWeight: "bold",
              }}
            >
              Key Features
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {product.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                    fontSize: "16px",
                    color: "rgba(255,255,255,0.8)",
                  }}
                >
                  <div
                    style={{
                      background: product.gradient,
                      borderRadius: "50%",
                      padding: "4px",
                      display: "flex",
                      marginRight: "12px",
                    }}
                  >
                    <TbCheck size={16} color="#fff" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Media Slideshow */}
          <motion.div
            style={{ flex: "1 1 400px" }}
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
          >
            <div
              style={{
                width: "100%",
                height: "400px",
                borderRadius: "24px",
                position: "relative",
                overflow: "hidden",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Slides */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={images[currentSlide]}
                  alt={`${product.name} showcase ${currentSlide + 1}`}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  draggable={false}
                />
              </AnimatePresence>

              {/* Bottom gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "100px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                  pointerEvents: "none",
                  borderRadius: "0 0 24px 24px",
                }}
              />

              {/* Dot indicators */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "10px",
                  zIndex: 2,
                }}
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    style={{
                      width: currentSlide === index ? "28px" : "10px",
                      height: "10px",
                      borderRadius: "5px",
                      border: "none",
                      cursor: "pointer",
                      background:
                        currentSlide === index
                          ? "#fff"
                          : "rgba(255,255,255,0.4)",
                      transition: "all 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                      padding: 0,
                      boxShadow:
                        currentSlide === index
                          ? "0 0 8px rgba(255,255,255,0.5)"
                          : "none",
                    }}
                  />
                ))}
              </div>

              {/* Slide counter badge */}
              {/* <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "16px",
                  background: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.5px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  zIndex: 2,
                }}
              >
                {currentSlide + 1} / {images.length}
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Metrics & CTA */}
        <motion.div
          style={{
            background: "rgba(255,255,255,0.03)",
            borderRadius: "32px",
            padding: "60px",
            textAlign: "center",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "80px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            {product.metrics.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    background: product.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {m.value}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: "rgba(255,255,255,0.6)",
                    marginTop: "8px",
                  }}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: "32px", color: "#fff", marginBottom: "24px" }}>
            Ready to transform your workflow?
          </h3>
          <a
            href="#contact-us"
            onClick={handleContactScroll}
            className="btn btn-home"
            style={{
              display: "inline-flex",
              padding: "16px 32px",
              fontSize: "18px",
            }}
          >
            <span className="btn-text">Get a Custom Quote</span>
          </a>
        </motion.div>

        {/* Business Problems Section ONLY for CI Automate */}
        {product.slug === 'ci-automate' && (
          <div className="business-problems-section" style={{ padding: "100px 0 0 0" }}>
            <motion.div
              className="trust-badge"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginBottom: "8px", margin: "0 auto", display: "flex", justifyContent: "center" }}
            >
              <TbTrendingUp style={{ fontSize: "16px" }} />
              <span>Real Problems. Real Solutions. Real Growth.</span>
            </motion.div>

            <motion.h2 
              className="section2-title" 
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ textAlign: "center" }}
            >
              How Can We Help Your Business Grow?
            </motion.h2>
            <motion.p
              className="section2-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ marginTop: "12px", maxWidth: "720px", margin: "0 auto 48px auto", textAlign: "center" }}
            >
              We focus on solving the specific challenges that cost you
              customers and revenue. Here is how we help businesses like yours
              scale effectively.
            </motion.p>

            <motion.div
              className="business-problems-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {businessProblems.map((item) => {
                const ProblemIcon = iconMap[item.icon];
                return (
                  <motion.div
                    key={item.id}
                    className="bp-card"
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  >
                    <div className="bp-card-accent" style={{ background: item.gradient }} />
                    <div className="bp-card-content">
                      <div className="bp-card-header">
                        <div className="bp-card-icon" style={{ background: item.gradient }}>
                          {ProblemIcon && <ProblemIcon />}
                        </div>
                        <div className="bp-card-result-badge">
                          <span className="bp-result-value" style={{ color: item.accentColor }}>{item.result}</span>
                          <span className="bp-result-label">{item.resultLabel}</span>
                        </div>
                      </div>

                      <div className="bp-problem-block">
                        <div className="bp-block-label">
                          <TbAlertTriangle style={{ fontSize: "14px", color: "#FF6B6B" }} />
                          <span>The Problem</span>
                        </div>
                        <p className="bp-problem-text">"{item.problem}"</p>
                      </div>

                      <div className="bp-divider">
                        <div className="bp-divider-line" />
                        <span className="bp-divider-arrow">↓</span>
                        <div className="bp-divider-line" />
                      </div>

                      <div className="bp-solution-block">
                        <div className="bp-block-label">
                          <TbCircleCheck style={{ fontSize: "14px", color: "#2ED573" }} />
                          <span>Our Solution</span>
                        </div>
                        <p className="bp-solution-text">{item.solution}</p>
                      </div>

                      <a
                        href="#contact-us"
                        onClick={(e) =>
                          handleContactScroll(e, { problem: item.problem })
                        }
                        className="bp-card-cta"
                      >
                        <span>Fix This Problem</span>
                        <TbArrowRight style={{ marginLeft: "6px" }} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        )}

        {/* Contact / Get a Quote Section */}
        <div style={{ marginTop: "60px" }}>
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
