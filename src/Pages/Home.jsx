/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

/**COMPONENTS IMPORT */
import Hero from "../Components/Hero";
import ScrollSection from "../Components/ScrollSection";
import About from "./About";
import Framework from "./Framework";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Company from "./Company";
import Blog from "./Blog";
import Contact from "./Contact";

/**IMAGE IMPORTS */
import divider from "../Images/divider.webp";

const SectionDivider = () => (
  <div className="section-divider">
    <motion.img 
      src={divider} 
      alt="" 
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ originX: 0.5 }}
    />
  </div>
);

const Home = () => {
    return(
        <>
            <ScrollSection effect="hero">
              <section className="hero-wrapper">
                <div className="hero-container">
                  <Hero />
                </div>
              </section>
            </ScrollSection>

            <SectionDivider />
            <ScrollSection effect="grow">
              <About />
            </ScrollSection>
            <SectionDivider />
            <Framework />
            <SectionDivider />
            <ScrollSection effect="shrink">
              <Services />
            </ScrollSection>
            <SectionDivider />
            <ScrollSection effect="fade">
              <Portfolio />
            </ScrollSection>
            <SectionDivider />
            <ScrollSection effect="grow">
              <Company />
            </ScrollSection>
            <SectionDivider />
            <ScrollSection effect="shrink">
              <Blog />
            </ScrollSection>
            <SectionDivider />
            <ScrollSection effect="fade">
              <Contact />
            </ScrollSection>
        </>
    )
}

export default Home;
