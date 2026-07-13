/**CORE LIBRARY IMPORTS */
import React from "react";

/**COMPONENTS IMPORT */
import Hero from "../Components/Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Company from "./Company";
import Blog from "./Blog";
import Contact from "./Contact";

/**IMAGE IMPORTS */
import divider from "../Images/divider.webp";

const SectionDivider = () => (
  <div className="section-divider">
    <img src={divider} alt="" />
  </div>
);

const Home = () => {
    return(
        <>
            <section className="hero-wrapper">
              <div className="hero-container">
                <Hero />
              </div>
            </section>

            <SectionDivider />
            <About />
            <SectionDivider />
            <Services />
            <SectionDivider />
            <Portfolio />
            <SectionDivider />
            <Company />
            <SectionDivider />
            <Blog />
            <SectionDivider />
            <Contact />
        </>
    )
}

export default Home;