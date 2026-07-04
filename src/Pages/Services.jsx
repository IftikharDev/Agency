/**CORE LIBRARY IMPORTS */
import React, { useState } from "react";
import { motion } from "framer-motion";

/**DATA IMPORTS */
import { serviceList } from "../Data";

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/**SERVICE CARDS SECTION */}
      <section id="services" className="wrapper service-section">
        <div className="container">
          {/* HEADER */}
          <div className="service-header">
            <h2 className="section-title">Your Vision, Our Expertise</h2>
            <p className="section-subtitle">
              Transforming Ideas into Exceptional Digital Experiences
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
                      backgroundColor: isActive ? "#000" : service.bgColor
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

                          <img
                            src={service.imageSrc}
                            alt={service.title}
                          />
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