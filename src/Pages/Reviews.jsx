/**CORE LIBRARY IMPORTS */
import React from "react";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: 1,
    review:
      "These guys are the OGs. They completely blew past our expectations on the project, and we keep coming back to them for every new product we build.",
    name: "Alexander Chen",
    role: "Marketing Head",
    avatarBg: "linear-gradient(135deg, #f97316 0%, #e11d48 100%)",
    avatarInitial: "AC",
  },
  {
    id: 2,
    review:
      "If you want premium development then look no further. You get top tier quality for what you pay. Got our product done faster than expected and it ended up being the centerpiece of our entire launch.",
    name: "Michael Reynolds",
    role: "Founder & CEO",
    avatarBg: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    avatarInitial: "MR",
  },
  {
    id: 3,
    review:
      "It was a pleasure to work with Cloud Insider!! They deliver quick, high quality results and they also took the extra effort to make sure I was satisfied.",
    name: "Sarah Jenkins",
    role: "Co-Founder",
    avatarBg: "linear-gradient(135deg, #475569 0%, #1e293b 100%)",
    avatarInitial: "SJ",
  },
  {
    id: 4,
    review:
      "These guys built our platform and the response we got from users was crazy. Felt like a real dedicated team behind the project, not just freelancers passing files around. Will be coming back for our next project!!",
    name: "David O'Connor",
    role: "Product Lead",
    avatarBg: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
    avatarInitial: "DO",
  },
  {
    id: 5,
    review:
      "I was surprised by how smooth the whole thing felt. The team got back to every message within minutes, the initial deliverables hit way closer than I expected, and the final build ended up being the strongest asset on our platform.",
    name: "Elena Rostova",
    role: "Design Director",
    avatarBg: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
    avatarInitial: "ER",
  },
  {
    id: 6,
    review:
      "These guys were extremely professional to work with. They built a solution for us that we are extremely proud of. Would highly recommend!!",
    name: "James Mitchell",
    role: "Engineering Lead",
    avatarBg: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    avatarInitial: "JM",
  },
];

const Reviews = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="reviews" className="section2-wrapper" style={{ marginTop: "0", paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="section2-container">
        <motion.div
          className="section2-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          {/* Header Title & Subtitle */}
          <motion.h2 className="section2-title" variants={fadeUp} style={{ fontSize: "48px", fontWeight: "700", letterSpacing: "-0.5px" }}>
            Reviews
          </motion.h2>

          <motion.p className="section2-text" variants={fadeUp} style={{ marginTop: "12px", color: "rgba(255,255,255,0.6)", fontSize: "17px" }}>
            Don't take our word for it.
          </motion.p>



          {/* Reviews Grid */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              width: "100%",
              maxWidth: "1200px",
              marginTop: "50px",
            }}
          >
            {reviewsData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, borderColor: "rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.2 }}
                style={{
                  backgroundColor: "rgba(18, 18, 18, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "left",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Review Body */}
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: "15px",
                    lineHeight: "1.65",
                    margin: "0 0 32px 0",
                    fontWeight: "400",
                  }}
                >
                  "{item.review}"
                </p>

                {/* Review Author & Avatar */}
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  {/* User Avatar */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: item.avatarBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      fontWeight: "600",
                      fontSize: "15px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                      flexShrink: 0,
                    }}
                  >
                    {item.avatarInitial}
                  </div>

                  {/* Author Name and Role */}
                  <div>
                    <h4
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: "600",
                        margin: "0 0 2px 0",
                        letterSpacing: "-0.2px",
                      }}
                    >
                      {item.name}
                    </h4>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.45)",
                        fontSize: "13px",
                        margin: "0",
                        fontWeight: "400",
                      }}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
