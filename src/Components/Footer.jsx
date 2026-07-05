/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

/**LOGO IMPORT */
import ciFullLogo from "../Images/ci-full-logo.png";

/**DATA IMPORTS */
import { usefulLinks } from "../Data";
import SocialLinks from "./SocialLinks";

/**ICONS IMPORT */
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const FooterWidget = ({ list, title }) => (
  <div className="footer-widget">
    <h3 className="footer-widget-title">{title}</h3>
    <ul className="footer-widget-list">
      {list.map(({ url, title, id }) => (
        <li key={id}>
          <a href={url}>{title}</a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          className="footer-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {/* Company */}
          <motion.div
            className="footer-col footer-left"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <FooterWidget list={usefulLinks} title="Company" />
          </motion.div>

          {/* Contact */}
          <motion.div
            className="footer-col footer-middle"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="footer-widget">
              <h3 className="footer-widget-title">Contact Us</h3>

              <div className="footer-contact">
  <FiMail className="mail-icon" />
  <a href="mailto:sales@cloudinsider.com">sales@cloudinsider.com</a>
</div>

             <div className="footer-contact">
  <FiPhone className="phone-icon" />
  <a href="tel:+916357605131">+91 63576 05131</a>
</div>

              <div className="footer-social">
                <h4>Follow Us</h4>
                <SocialLinks />
              </div>
            </div>
          </motion.div>

         
          <motion.div
            className="footer-col footer-right"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
          

            <h2 className="footer-heading">
              Empower. Evolve. Excellence. With Cloud Insider
            </h2>

            <p className="footer-text">
             Cloud Insider work tirelessly to develop best,
              creative, innovative and exceptional IT stuff for you.
            </p>
              <div className="footer-logo-wrap">
                <img src={ciFullLogo} alt="Cloud Insider" className="footer-logo-img-full" />
              </div>
          </motion.div>
        </motion.div>

        {/* Footer Copy */}
        <motion.p
          className="footer-copy"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        >
          © {currentYear} CLOUD INSIDER PRIVATE LIMITED. All rights reserved 
        </motion.p>

      </div>
    </footer>
  );
};

export default Footer;
