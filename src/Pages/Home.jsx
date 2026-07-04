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

const Home = () => {
    return(
        <>
            <section className="hero-wrapper">
              <div className="hero-container">
                <Hero />
              </div>
            </section>

            <About />
            <Services />
            <Portfolio />
            <Company />
            <Blog />
            <Contact />
        </>
    )
}

export default Home;