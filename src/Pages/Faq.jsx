/**CORE LIBRARY IMPORTS */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**ICON IMPORTS */
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const faqData = [
  {
    id: 1,
    question: "How fast can you deliver?",
    answer:
      "Delivery timelines depend on project scope. Rapid SaaS MVPs and workflow automations are typically deployed within 1 to 3 weeks, while comprehensive full-stack platforms take 4 to 8 weeks. We provide a guaranteed delivery timeline after our initial scoping call.",
  },
  {
    id: 2,
    question: "How do you help scale and upscale my business?",
    answer:
      "We don't just write code, we engineer growth engines. By automating manual operational bottlenecks and building cloud native architectures designed for 10x scale, we help your business capture more leads, boost revenue, and handle higher volume without inflating operational costs.",
  },
  {
    id: 3,
    question: "Do you build custom SaaS products and internal tools?",
    answer:
      "Yes! Building custom SaaS products is one of our primary pillars. From AI driven analytics dashboards to multi-tenant software platforms, we handle full cycle product development including design, engineering, backend architecture, and cloud deployment.",
  },
  {
    id: 4,
    question: "What is Cloud Insider's core motive as a technical partner?",
    answer:
      "Our motive is simple: 'We Build What Lasts.' We act as your long-term embedded technical partner, taking true ownership of design, development, and scaling so you never have to deal with fragmented vendors or handoff headaches.",
  },
  {
    id: 5,
    question: "Who owns the final code, design assets, and IP?",
    answer:
      "You own 100% of everything the moment we deliver, including all raw source code, Figma design files, database schemas, and deployment scripts. No hidden licensing fees or vendor lock-in.",
  },
  {
    id: 6,
    question: "How does your pricing structure work?",
    answer:
      "We offer transparent options tailored to your stage: Pay-As-You-Go hourly consulting ($85/hr), fixed monthly automation subscriptions (Starter and Growth tiers), and custom fixed price proposals for full Web and App development.",
  },
  {
    id: 7,
    question: "Do you work with early-stage startups or established companies?",
    answer:
      "Both. Whether you are a pre-launch startup looking to ship a high-converting MVP or an established enterprise looking to automate workflows and modernize legacy software, we tailor our engagement model to match your exact business stage.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleGetInTouch = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact-us");
    if (contactEl) {
      const offset = 80;
      let top = 0;
      let el = contactEl;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent;
      }
      window.scrollTo({
        top: top - offset,
        behavior: "smooth"
      });
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id="faq"
      className="section2-wrapper faq-section"
      style={{ marginTop: "0", paddingTop: "100px", paddingBottom: "100px" }}
    >
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Header */}
          <motion.h2 className="faq-title" variants={fadeUp}>
            Frequently Asked Questions
          </motion.h2>

          {/* FAQ Accordion List */}
          <motion.div className="faq-list" variants={fadeUp}>
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <div className="faq-question-left">
                      <span className="faq-question-text">{item.question}</span>
                    </div>
                    <span className="faq-icon">
                      {isOpen ? <TbChevronUp /> : <TbChevronDown />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="faq-answer-content">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Bottom CTA Button — Matched to Navbar Get a Quote design */}
          <motion.div className="faq-cta-row" variants={fadeUp}>
            <a href="#contact-us" onClick={handleGetInTouch} className="btn-cta btn-home faq-cta-btn">
              <span>GET IN TOUCH</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
