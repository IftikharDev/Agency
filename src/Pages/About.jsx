/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

/**ICON IMPORTS */
import { TbChartAreaLine, TbCpu, TbShieldCheck, TbRocket, TbEye, TbTrendingUp, TbArrowRight, TbCheck } from "react-icons/tb";

/**IMAGE IMPORTS */
import leftBlur from "../Images/left-blur.png";
import rightBlur from "../Images/right-blur.png";
import aboutImage from "../Images/about-us.png";

/**DATA IMPORTS */
import { saasProducts, missionValues } from "../Data";

/** Icon map for dynamic rendering */
const iconMap = {
  TbChartAreaLine: TbChartAreaLine,
  TbCpu: TbCpu,
  TbShieldCheck: TbShieldCheck,
  TbRocket: TbRocket,
  TbEye: TbEye,
  TbTrendingUp: TbTrendingUp,
};

const About = () => {
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  /** Metrics counter with intersection observer */
  const { ref: metricsRef, inView: metricsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const metrics = [
    { end: 200, suffix: "+", label: "Projects Delivered" },
    { end: 98, suffix: "%", label: "Client Retention" },
    { end: 3, suffix: "x", label: "Avg Revenue Growth" },
    { end: 24, suffix: "/7", label: "Support & Monitoring" },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: ABOUT HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section id="about" className="section2-wrapper">
        {/* Background blurs */}
        <img src={leftBlur} alt="" className="blur-left" />
        <img src={rightBlur} alt="" className="blur-right" />

        <div className="section2-container">
          <motion.div
            className="section2-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Trust badge */}
            <motion.div className="trust-badge" variants={fadeUp}>
              <TbCheck style={{ fontSize: '16px' }} />
              <span>Trusted by 200+ Businesses Worldwide</span>
            </motion.div>

            <motion.h2 className="section2-title" variants={fadeUp}>
              About Us
            </motion.h2>

            {/* Top row: Text on left, Main Image on right */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginTop: '50px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                
                <motion.div variants={fadeUp} style={{ flex: '1 1 400px', textAlign: 'left' }}>
                  <p className="section2-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
                    Cloud Insider builds scalable web platforms, mobile applications, and custom digital products for businesses that are serious about growth. We work with founders, product teams, and enterprises who need more than a one-time build — they need a technical partner who understands their product roadmap and sticks around to execute it.
                  </p>
                  <p className="section2-text" style={{ textAlign: 'left', marginBottom: '32px', fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
                    Our process is intentionally integrated. Design and development happen under one roof, which means your product moves from concept to launch without handoff gaps, miscommunication, or wasted cycles. What you see in the mockup is what ships in production.
                  </p>
                  <p className="section2-text" style={{ textAlign: 'left', marginBottom: '32px', fontSize: '16px', color: 'rgba(255,255,255,0.6)' }}>
                    Where it makes sense, we layer in smart automation — workflow tools, chatbots, and operational efficiencies — as practical add-ons within larger builds. The result: products that perform on day one and still hold up at 10x the traffic, 10x the users, and 10x the complexity. That's why most of our clients don't leave after launch — they stay because we build things worth maintaining.
                  </p>
                  <div className="section2-buttons" style={{ justifyContent: 'flex-start' }}>
                    <a href="#contact-us" className="btn btn-home">
                      <span className="btn-text">Get in Touch</span>
                      <span className="btn-arr">&gt;</span>
                    </a>
                  </div>
                </motion.div>

                {/* Main Image */}
                <motion.div 
                  variants={fadeUp} 
                  style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                    <div className="about-image-wrapper">
                        <img src={aboutImage} alt="About Cloud Insider" className="about-main-image" />
                    </div>
                </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: METRICS COUNTER STRIP
      ═══════════════════════════════════════════════════════════════ */}
      <section className="metrics-strip" ref={metricsRef}>
        <div className="metrics-strip-inner">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="metric-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="metric-value">
                {metricsInView ? (
                  <CountUp
                    end={metric.end}
                    duration={2.5}
                    suffix={metric.suffix}
                    separator=","
                  />
                ) : (
                  `0${metric.suffix}`
                )}
              </span>
              <span className="metric-label">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: SAAS PRODUCT SHOWCASE
      ═══════════════════════════════════════════════════════════════ */}
      <section className="about-saas-section">
        <div className="section2-container">
          <motion.div
            className="section2-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="trust-badge" variants={fadeUp} style={{ marginBottom: '8px' }}>
              <TbCpu style={{ fontSize: '16px' }} />
              <span>Integrated Cloud Platform</span>
            </motion.div>

            <motion.h2 className="section2-title" variants={fadeUp}>
              Our Cloud Platform
            </motion.h2>
            <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '12px' }}>
              Purpose-built SaaS products designed to scale your business, automate operations, and unlock actionable intelligence.
            </motion.p>

            <motion.div 
              className="saas-products-grid"
              variants={containerVariants}
            >
              {saasProducts.map((product) => {
                const IconComponent = iconMap[product.icon];
                return (
                  <motion.div
                    key={product.id}
                    className="saas-product-card"
                    variants={scaleIn}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    {/* Gradient glow effect */}
                    <div className="saas-card-glow" style={{ background: product.gradient }} />
                    
                    <div className="saas-card-content">
                      <div className="saas-card-icon" style={{ background: product.gradient }}>
                        {IconComponent && <IconComponent />}
                      </div>
                      
                      <h3 className="saas-card-name">{product.name}</h3>
                      <p className="saas-card-tagline">{product.tagline}</p>
                      <p className="saas-card-description">{product.description}</p>

                      {/* Metrics row */}
                      <div className="saas-card-metrics">
                        {product.metrics.map((m, i) => (
                          <div key={i} className="saas-metric">
                            <span className="saas-metric-value">{m.value}</span>
                            <span className="saas-metric-label">{m.label}</span>
                          </div>
                        ))}
                      </div>

                      <a href="#contact-us" className="saas-card-cta">
                        Learn More <TbArrowRight style={{ marginLeft: '6px' }} />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: MISSION & VALUES
      ═══════════════════════════════════════════════════════════════ */}
      <section className="mission-section">
        <img src={leftBlur} alt="" className="blur-left" />
        <img src={rightBlur} alt="" className="blur-right" />

        <div className="section2-container">
          <motion.div
            className="section2-content"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 className="section2-title" variants={fadeUp}>
              What Drives Us
            </motion.h2>
            <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '12px' }}>
              Our core values shape every product we build, every solution we deliver, and every relationship we nurture.
            </motion.p>

            <motion.div className="mission-cards-grid" variants={containerVariants}>
              {missionValues.map((value) => {
                const IconComponent = iconMap[value.icon];
                return (
                  <motion.div
                    key={value.id}
                    className="mission-card"
                    variants={fadeUp}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  >
                    <div className="mission-card-icon">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h3 className="mission-card-title">{value.title}</h3>
                    <p className="mission-card-description">{value.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;