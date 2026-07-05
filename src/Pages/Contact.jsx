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
    <section id="contact-us" className="section2-wrapper" style={{ marginTop: '0', paddingTop: '100px', paddingBottom: '100px' }}>
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
          <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: '20px' }}>
            Ready to start your next project? Let's talk about how we can help.
          </motion.p>
          
          <motion.div variants={fadeUp} style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '40px', 
              width: '100%', 
              marginTop: '50px' 
          }}>
              {/* Form Placeholder */}
              <div style={{
                  flex: '1 1 500px',
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  textAlign: 'left'
              }}>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
                      <input type="text" placeholder="First Name" style={{ flex: 1, padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                      <input type="text" placeholder="Last Name" style={{ flex: 1, padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }} />
                  </div>
                  <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', marginBottom: '20px' }} />
                  <textarea placeholder="Tell us about your project..." rows="5" style={{ width: '100%', padding: '15px', borderRadius: '10px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', marginBottom: '20px' }}></textarea>
                  <button className="btn btn-home" style={{ width: '100%' }}>
                      <span className="btn-text">Send Message</span>
                  </button>
              </div>

              {/* Info Placeholder */}
              <div style={{
                  flex: '1 1 300px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '30px',
                  textAlign: 'left',
                  justifyContent: 'center'
              }}>
                  <div>
                      <h4 style={{ color: '#00C2FF', fontSize: '20px', margin: '0 0 10px 0' }}>Our Office</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', margin: 0, lineHeight: '1.6' }}>
                          123 Innovation Drive<br/>Tech City, TX 75001
                      </p>
                  </div>
                  <div>
                      <h4 style={{ color: '#00C2FF', fontSize: '20px', margin: '0 0 10px 0' }}>Contact Info</h4>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', margin: 0, lineHeight: '1.6' }}>
                          hello@cloudinsider.com<br/>+91 63576 05131
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