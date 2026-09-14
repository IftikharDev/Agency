/**CORE LIBRARY IMPORTS */
import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**ICON IMPORTS */
import { TbArrowUpRight, TbCode, TbBrain, TbCloud, TbCheckbox, TbCube, TbSparkles } from "react-icons/tb";

/**DATA / ASSETS */
import { portfolioProjects } from "../Data";

const categoryIcons = {
  "All": null,
  "Modernized 3D Website": TbCube,
  "Web App": TbCode,
  "AI/ML": TbBrain,
  "SaaS": TbCloud,
};

const categories = ["All", "Modernized 3D Website", "Web App", "AI/ML", "SaaS"];

const DISPLAY_LIMIT = 6;

/* ── Floating Particle Background ── */
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.4 + 0.1,
  }));

  return (
    <div className="p3d-particles" aria-hidden="true">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="p3d-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [p.opacity, p.opacity * 2.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

/* ── 3D Tilt Card ── */
const TiltCard = ({ project, isHovered, onHoverStart, onHoverEnd }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    setTilt({ rotateX, rotateY, glowX, glowY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
    onHoverEnd();
  }, [onHoverEnd]);

  return (
    <motion.a
      ref={cardRef}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`p3d-card ${project.featured ? "p3d-card--featured" : ""}`}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
        exit: {
          opacity: 0,
          y: -20,
          scale: 0.95,
          transition: { duration: 0.3 },
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHoverStart}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
      }}
    >
      {/* Animated border glow */}
      <div className="p3d-card-border-glow" />

      {/* Mouse-follow glow */}
      <div
        className="p3d-card-glow-follow"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255, 94, 40, 0.15), transparent 60%)`,
        }}
      />

      {/* Image Area */}
      <div className="p3d-card-visual">
        <img src={project.image} alt={project.title} className="p3d-card-img" />

        {/* Gradient overlay */}
        <div className="p3d-card-img-overlay" />

        {/* Hover overlay */}
        <motion.div
          className="p3d-card-hover-overlay"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className="p3d-card-view-btn">
            <TbArrowUpRight />
            Visit Site
          </span>
        </motion.div>

        {/* Category chip */}
        <span className="p3d-card-category">{project.category}</span>
      </div>

      {/* Card Info */}
      <div className="p3d-card-info">
        <h3 className="p3d-card-title">{project.title}</h3>
        <p className="p3d-card-desc">{project.description}</p>

        {/* Tech stack pills */}
        <div className="p3d-card-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="p3d-card-tech">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects.slice(0, DISPLAY_LIMIT)
      : portfolioProjects
        .filter((p) => p.category === activeCategory)
        .slice(0, DISPLAY_LIMIT);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="portfolio" className="p3d-section">
      {/* Background layers */}
      <div className="p3d-bg" aria-hidden="true">
        <div className="p3d-bg-gradient" />
        <div className="p3d-bg-glow p3d-bg-glow--left" />
        <div className="p3d-bg-glow p3d-bg-glow--right" />
        <div className="p3d-bg-glow p3d-bg-glow--center" />
        <FloatingParticles />
      </div>

      <div className="p3d-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Header */}
          <motion.div className="p3d-header" variants={fadeUp}>
            <span className="p3d-label">
              <TbSparkles style={{ fontSize: "14px" }} />
              Project Showcase
            </span>
            <h2 className="p3d-title">
              Crafted with Purpose,
              <br />
              <span className="p3d-title-accent">Built to Perform.</span>
            </h2>
            <p className="p3d-subtitle">
              Real projects with measurable impact. Explore our recent web,
              mobile, and AI solutions built to drive genuine business growth.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div className="p3d-filters" variants={fadeUp}>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  className={`p3d-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {Icon && <Icon />}
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="p3d-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <TiltCard
                  key={project.id}
                  project={project}
                  isHovered={hoveredId === project.id}
                  onHoverStart={() => setHoveredId(project.id)}
                  onHoverEnd={() => setHoveredId(null)}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* 120+ Projects Badge */}
          <motion.div className="p3d-footer" variants={fadeUp}>
            <div className="p3d-stats-badge">
              <TbCheckbox className="p3d-stats-icon" />
              <span className="p3d-stats-text">
                <strong>117+</strong> Projects Delivered Successfully
              </span>
            </div>
            <p className="p3d-footer-text">
              These are just a few highlights. We've partnered with startups, agencies, and enterprises across 15+ industries.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;