/**CORE LIBRARY IMPORTS */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  /* Listen for pricing CTA pre-fill events */
  useEffect(() => {
    const handlePrefill = (e) => {
      const { planName } = e.detail;
      setMessage(`Hi, I'd like to talk about the "${planName}" plan. Please get in touch to discuss my requirements.`);
      /* Focus the textarea after a short delay (scroll needs time) */
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
        }
      }, 800);
    };
    window.addEventListener("prefill-contact", handlePrefill);
    return () => window.removeEventListener("prefill-contact", handlePrefill);
  }, []);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setResult("");

    const formData = new FormData(event.target);

    try {
      const response = await fetch("https://formsubmit.co/ajax/Iftikharalam.shimul@outlook.com", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok || data.success === "true" || data.success === true) {
        setResult("Message sent successfully. We'll get back to you soon.");
        event.target.reset();
        setMessage("");
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setResult("Could not send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact-us"
      className="section2-wrapper"
      style={{ marginTop: "0", paddingTop: "100px", paddingBottom: "100px" }}
    >
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
          <motion.p
            className="section2-text"
            variants={fadeUp}
            style={{ marginTop: "20px" }}
          >
            Ready to start your next project? Let's talk about how we can help.
          </motion.p>

          <motion.div variants={fadeUp} className="contact-content-row">
            <form
              className="contact-form-box"
              action="https://formsubmit.co/Iftikharalam.shimul@outlook.com"
              method="POST"
              onSubmit={onSubmit}
            >
              {/* Hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from your portfolio" />
              <input type="hidden" name="_template" value="box" />

              <div className="contact-name-row">
                <input
                  type="text"
                  name="name"
                  placeholder="First Name *"
                  className="contact-input"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  className="contact-input"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                className="contact-input full-width"
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                className="contact-textarea"
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="btn btn-home contact-submit-btn"
                disabled={sending}
              >
                <span className="btn-text">
                  {sending ? "Sending..." : "Send Message"}
                </span>
              </button>

              {result && (
                <p
                  style={{
                    color: result.includes("successfully")
                      ? "#4ade80"
                      : "#f87171",
                    marginTop: "16px",
                  }}
                >
                  {result}
                </p>
              )}
            </form>

            <div className="contact-info-box">
              {/* <div className="contact-info-block">
                <h4>Our Office</h4>
                <p>
                  123 Innovation Drive
                  <br />
                  Tech City, TX 75001
                </p>
              </div> */}
              <div className="contact-info-block">
                <h4>Contact Info</h4>
                <p>
                  team@cloudeinsider.com
                  <br />
                  +88 0156 8483518
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
