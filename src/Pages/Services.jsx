/**CORE LIBRARY IMPORTS */
import React, { useState } from "react";
import { motion } from "framer-motion";

/**DATA IMPORTS */
import { serviceList } from "../Data";

/**ICON IMPORTS */
import { TbCheck, TbArrowRight } from "react-icons/tb";

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/**SERVICE CARDS SECTION */}
      <section id="services" className="wrapper service-section">
        <div className="container">
          {/* HEADER */}
          <div className="service-header">
            <h2 className="section-title">What We Build For You</h2>
            <p className="section-subtitle">
              Four core capabilities. One integrated team. Zero handoff
              headaches.
            </p>
          </div>

          <div className="service-tabs">
            <div className="service-tabs-row">
              {serviceList.map((service) => {
                const isActive = activeTab === service.id;

                return (
                  <div
                    key={service.id}
                    className={`service-tab ${isActive ? "active" : ""}`}
                    style={{
                      flex: isActive ? 1 : 0.08,
                      backgroundColor: isActive ? "#000" : service.bgColor,
                    }}
                    onClick={() => setActiveTab(service.id)}
                  >
                    {isActive ? (
                      <div className="service-tab-content">
                        {/* LEFT INDEX BAR */}
                        <div className="service-tab-index">
                          <span className="index">
                            {String(service.id).padStart(2, "0")}
                          </span>
                          <span className="label">{service.label}</span>
                        </div>

                        {/* MAIN CONTENT */}
                        <div className="service-tab-main">
                          <h4>{service.title}</h4>
                          <p>{service.description}</p>

                          {/* Feature list with checkmarks */}
                          {service.list && service.list.length > 0 && (
                            <ul className="service-feature-list">
                              {service.list.map((item, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: idx * 0.05,
                                    duration: 0.3,
                                  }}
                                >
                                  <TbCheck className="feature-check-icon" />
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}

                          {/* CTA Button */}
                          <a href="#contact-us" className="service-cta-btn">
                            <span>Get Started</span>
                            <TbArrowRight className="service-cta-arrow" />
                          </a>

                          <img src={service.imageSrc} alt={service.title} />
                        </div>
                      </div>
                    ) : (
                      <div className="service-tab-collapsed">
                        <span className="index">
                          {String(service.id).padStart(2, "0")}
                        </span>
                        <h3>{service.label}</h3>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
