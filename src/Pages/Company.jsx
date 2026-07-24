/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

const Company = () => {
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
    <section id="company" className="section2-wrapper" style={{ marginTop: '0', paddingTop: '100px' }}>
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section2-title" variants={fadeUp}>
            Our Company
          </motion.h2>
          <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '20px' }}>
            Built on transparency, driven by innovation, and committed to your success.
          </motion.p>

          <motion.div variants={fadeUp} style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '40px',
            width: '100%',
            marginTop: '50px'
          }}>
            {['7+ Years Experience', '15+ Team Members', '117+ Projects Done', '99% Client Satisfaction'].map((stat, i) => (
              <div key={i} style={{
                flex: '1 1 200px',
                padding: '40px 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <h3 style={{ fontSize: '32px', color: '#00C2FF', marginBottom: '10px', marginTop: 0 }}>
                  {stat.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', margin: 0 }}>
                  {stat.substring(stat.indexOf(' ') + 1)}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Company;