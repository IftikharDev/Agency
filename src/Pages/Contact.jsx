/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact-us"
      className="section2-wrapper"
      style={{ marginTop: "0", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section2-title" variants={fadeUp}>
            Get a Quote
          </motion.h2>
          <motion.p
            className="section2-text"
            variants={fadeUp}
            style={{ marginTop: "20px" }}
          >
            Ready to start your next project? Let's talk about how we can help.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="contact-content-row"
          >
            {/* Form Placeholder */}
            <div className="contact-form-box">
              <div className="contact-name-row">
                <input
                  type="text"
                  placeholder="First Name"
                  className="contact-input"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="contact-input"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="contact-input full-width"
              />
              <textarea
                placeholder="Tell us about your project..."
                rows="5"
                className="contact-textarea"
              ></textarea>
              <button className="btn btn-home contact-submit-btn">
                <span className="btn-text">Send Message</span>
              </button>
            </div>

            {/* Info Placeholder */}
            <div className="contact-info-box">
              <div className="contact-info-block">
                <h4>Our Office</h4>
                <p>
                  123 Innovation Drive
                  <br />
                  Tech City, TX 75001
                </p>
              </div>
              <div className="contact-info-block">
                <h4>Contact Info</h4>
                <p>
                  hello@cloudinsider.com
                  <br />
                  +91 63576 05131
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
