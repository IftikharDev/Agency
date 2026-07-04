/**CORE LIBRARY IMPORTS */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Still keep the original behavior of scrolling up when a route changes (just in case)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility of the button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          whileHover={{ scale: 1.1, boxShadow: "0 10px 30px rgba(0, 194, 255, 0.4)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(90deg, #0D52AD, #00C2FF)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
            zIndex: 9999,
          }}
          aria-label="Scroll to top"
        >
          <svg 
            width="24" height="24" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" strokeWidth="2.5" 
            strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
