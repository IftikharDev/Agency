/**CORE LIBRARY IMPORTS */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**ICON IMPORTS */
import { TbArrowUpRight, TbEye, TbCode, TbDeviceMobile, TbBrain, TbCloud } from "react-icons/tb";

/**DATA / ASSETS */
import { portfolioProjects } from "../Data";

const categoryIcons = {
  "All": null,
  "Web App": TbCode,
  "AI/ML": TbBrain,
  "SaaS": TbCloud,
};

const categories = ["All", "Web App", "AI/ML", "SaaS"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
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

  const cardVariants = {
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
  };

  return (
    <section id="portfolio" className="portfolio-section">
      {/* Background ambient glow */}
      <div className="portfolio-glow portfolio-glow--left" aria-hidden="true" />
      <div className="portfolio-glow portfolio-glow--right" aria-hidden="true" />

      <div className="portfolio-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Header */}
          <motion.div className="portfolio-header" variants={fadeUp}>
            <span className="portfolio-label">
              <TbEye style={{ fontSize: "14px" }} />
              Project Showcase
            </span>
            <h2 className="portfolio-title">
              Crafted with Purpose,
              <br />
              <span className="portfolio-title-accent">Built to Perform.</span>
            </h2>
            <p className="portfolio-subtitle">
              Real projects, real impact. Browse our latest work across web,
              mobile, and AI — each one designed to move the needle.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div className="portfolio-filters" variants={fadeUp}>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat];
              return (
                <button
                  key={cat}
                  className={`portfolio-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {Icon && <Icon />}
                  {cat}
                </button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="portfolio-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isHovered = hoveredId === project.id;
                return (
                  <motion.a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`portfolio-card ${project.featured ? "portfolio-card--featured" : ""}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    {/* Image Area */}
                    <div className="portfolio-card-visual">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-card-img"
                      />

                      {/* Hover overlay */}
                      <motion.div
                        className="portfolio-card-overlay"
                        initial={false}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="portfolio-card-view">
                          <TbArrowUpRight />
                          Visit Site
                        </span>
                      </motion.div>

                      {/* Category chip */}
                      <span className="portfolio-card-category">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Info */}
                    <div className="portfolio-card-info">
                      <h3 className="portfolio-card-title">{project.title}</h3>
                      <p className="portfolio-card-desc">{project.description}</p>

                      {/* Tech stack pills */}
                      <div className="portfolio-card-stack">
                        {project.stack.map((tech) => (
                          <span key={tech} className="portfolio-card-tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;