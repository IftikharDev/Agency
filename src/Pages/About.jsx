/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

/**IMAGE IMPORTS */
import leftBlur from "../Images/left-blur.png";
import rightBlur from "../Images/right-blur.png";

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
    visible: { opacity: 1, y: 0 },
  };

  // Helper styles for the image placeholders
  const placeholderStyle = {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    border: '2px dashed rgba(255, 255, 255, 0.15)',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '16px',
    fontWeight: '300',
    transition: 'all 0.3s ease',
  };

  return (
    <>
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
            <motion.h2 className="section2-title" variants={fadeUp}>
              About Us
            </motion.h2>

            {/* Top row: Text on left, Main Image on right */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', marginTop: '50px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                
                <motion.div variants={fadeUp} style={{ flex: '1 1 400px', textAlign: 'left' }}>
                  <p className="section2-text" style={{ textAlign: 'left', marginBottom: '32px' }}>
                    DigiCore is a forward-thinking digital agency dedicated to transforming
                    ideas into exceptional digital experiences. We combine strategic insight,
                    creative design, and technical expertise to build scalable solutions that
                    empower businesses to thrive in the modern landscape. Our passion lies
                    in pushing boundaries and delivering measurable results through
                    innovation, collaboration, and a relentless focus on our clients' success.
                  </p>
                  <div className="section2-buttons" style={{ justifyContent: 'flex-start' }}>
                    <a href="/contact-us" className="btn btn-home">
                      <span className="btn-text">Get in Touch</span>
                      <span className="btn-arr">&gt;</span>
                    </a>
                  </div>
                </motion.div>

                {/* Main Image Placeholder */}
                <motion.div variants={fadeUp} style={{ flex: '1 1 400px' }}>
                    <div style={{ ...placeholderStyle, height: '400px' }}>
                        [ Main About Image Placeholder ]
                    </div>
                </motion.div>

            </div>

            {/* Bottom Row: Additional Image Grid */}
            <motion.div variants={fadeUp} style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '30px', 
                width: '100%', 
                marginTop: '80px' 
            }}>
                <div style={{ ...placeholderStyle, height: '250px' }}>[ Image Placeholder 1 ]</div>
                <div style={{ ...placeholderStyle, height: '250px' }}>[ Image Placeholder 2 ]</div>
                <div style={{ ...placeholderStyle, height: '250px' }}>[ Image Placeholder 3 ]</div>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;