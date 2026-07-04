/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
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
    <section id="portfolio" className="section2-wrapper" style={{ marginTop: '0', paddingTop: '100px' }}>
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section2-title" variants={fadeUp}>
            Our Portfolio
          </motion.h2>
          <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '20px' }}>
            A showcase of our finest work, delivering impact and digital excellence.
          </motion.p>
          
          <motion.div variants={fadeUp} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '30px', 
              width: '100%', 
              marginTop: '50px' 
          }}>
              {[1, 2, 3, 4, 5, 6].map(item => (
                  <div key={item} style={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '2px dashed rgba(255, 255, 255, 0.15)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255, 255, 255, 0.4)',
                      fontSize: '16px',
                  }}>
                      [ Project {item} Image ]
                  </div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;