/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

/**ICON IMPORTS */
import {
  TbCheck,
  TbFlame,
  TbClock,
  TbRocket,
} from "react-icons/tb";

/**CONFIG */
import { pricingConfig } from "../pricingConfig";

const Pricing = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const { plans, sectionTitle, sectionSubtitle } = pricingConfig;

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

          {/* Pricing Cards Grid */}
          <motion.div
            variants={fadeUp}
            className="pricing-grid"
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`pricing-card ${plan.highlighted ? "pricing-card--featured" : ""}`}
              >
                {/* Glow accent for featured card */}
                {plan.highlighted && <div className="pricing-card__glow" />}

                {/* Tag badge */}
                <span
                  className="pricing-tag"
                  style={{ backgroundColor: `${plan.tagColor}18`, color: plan.tagColor, borderColor: `${plan.tagColor}40` }}
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
                  target={plan.ctaType === "calendly" ? "_blank" : "_self"}
                  rel={plan.ctaType === "calendly" ? "noopener noreferrer" : undefined}
                  className={`pricing-cta ${plan.highlighted ? "pricing-cta--featured" : ""}`}
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
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
