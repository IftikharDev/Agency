/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
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
    <section id="blog" className="section2-wrapper" style={{ marginTop: '0', paddingTop: '100px' }}>
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section2-title" variants={fadeUp}>
            Latest Insights
          </motion.h2>
          <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '20px' }}>
            News, trends, and expert opinions from our team.
          </motion.p>
          
          <motion.div variants={fadeUp} style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '30px', 
              width: '100%', 
              marginTop: '50px' 
          }}>
              {[1, 2, 3].map(item => (
                  <div key={item} style={{
                      flex: '1 1 300px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      textAlign: 'left'
                  }}>
                      <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.3)' }}>
                          [ Article Image ]
                      </div>
                      <div style={{ padding: '24px' }}>
                          <p style={{ color: '#00C2FF', fontSize: '14px', margin: '0 0 10px 0' }}>Marketing • 5 Min Read</p>
                          <h3 style={{ color: '#fff', fontSize: '22px', margin: '0 0 15px 0' }}>The Future of Digital Agencies</h3>
                          <a href="#blog" style={{ color: '#fff', textDecoration: 'none', fontWeight: '500', fontSize: '15px' }}>Read More &rarr;</a>
                      </div>
                  </div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;