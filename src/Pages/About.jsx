/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

/**IMAGE IMPORTS */
import leftBlur from "../Images/left-blur.png";
import rightBlur from "../Images/right-blur.png";
import aboutImage from "../Images/about-us.png";

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
                    Cloud Insider is a forward-thinking IT service agency specializing in website and mobile app design & development, AI automation, and AI integration. We transform ideas into exceptional digital products  combining strategic insight, creative design, and technical expertise to build scalable, high-performing solutions that empower businesses to thrive in the modern digital landscape. From concept to launch, our passion lies in pushing boundaries and delivering measurable results through innovation, seamless AI-driven automation, and a relentless focus on our clients' success.
                  </p>
                  <div className="section2-buttons" style={{ justifyContent: 'flex-start' }}>
                    <a href="/contact-us" className="btn btn-home">
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
    </>
  );
};

export default About;