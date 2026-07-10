/**CORE LIBRARY IMPORTS */
import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";

/**ICON IMPORTS */
import { TbChartAreaLine, TbCpu, TbShieldCheck, TbArrowLeft, TbCheck } from "react-icons/tb";

/**DATA IMPORTS */
import { saasProducts } from "../Data";

const iconMap = {
  TbChartAreaLine: TbChartAreaLine,
  TbCpu: TbCpu,
  TbShieldCheck: TbShieldCheck,
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = saasProducts.find((p) => p.slug === slug);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const IconComponent = iconMap[product.icon];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="section2-wrapper" style={{ paddingTop: '150px', minHeight: '100vh' }}>
      <div className="section2-container">
        
        {/* Back Link */}
        <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', display: 'inline-flex', alignItems: 'center', textDecoration: 'none', marginBottom: '40px', fontSize: '16px', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}>
          <TbArrowLeft style={{ marginRight: '8px' }} /> Back to Home
        </Link>

        {/* Hero Section of Product */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}
        >
          <div style={{ background: product.gradient, padding: '24px', borderRadius: '24px', display: 'inline-flex', marginBottom: '24px' }}>
            {IconComponent && <IconComponent style={{ fontSize: '48px', color: '#fff' }} />}
          </div>
          
          <h1 className="section2-title" style={{ fontSize: '48px', marginBottom: '16px' }}>{product.name}</h1>
          <h3 style={{ fontSize: '24px', fontWeight: 'normal', color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 32px' }}>
            {product.tagline}
          </h3>
          
          <p className="section2-text" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px' }}>
            {product.description}
          </p>
        </motion.div>

        {/* Main Content Split: Details + Media Placeholder */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'flex-start', marginBottom: '80px' }}>
          
          {/* Text Details */}
          <motion.div style={{ flex: '1 1 400px' }} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '24px', fontWeight: 'bold' }}>Overview</h2>
            <p className="section2-text" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
              {product.details}
            </p>
            
            <h3 style={{ fontSize: '24px', color: '#fff', marginTop: '40px', marginBottom: '24px', fontWeight: 'bold' }}>Key Features</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {product.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>
                  <div style={{ background: product.gradient, borderRadius: '50%', padding: '4px', display: 'flex', marginRight: '12px' }}>
                    <TbCheck size={16} color="#fff" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Media Placeholder */}
          <motion.div style={{ flex: '1 1 400px' }} initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}>
            <div style={{ 
              width: '100%', 
              height: '400px', 
              background: 'rgba(255,255,255,0.03)', 
              border: '1px dashed rgba(255,255,255,0.2)', 
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              textAlign: 'center'
            }}>
              <span style={{ fontSize: '24px', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>Media Placeholder</span>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px' }}>Videos or photos showcasing {product.name} will be added here later.</p>
            </div>
          </motion.div>
          
        </div>

        {/* Metrics & CTA */}
        <motion.div 
          style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '32px', padding: '60px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}
          initial="hidden" whileInView="visible" variants={fadeUp} viewport={{ once: true }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {product.metrics.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '48px', fontWeight: 'bold', background: product.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {m.value}
                </span>
                <span style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', marginTop: '8px' }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '32px', color: '#fff', marginBottom: '24px' }}>Ready to transform your workflow?</h3>
          <Link to="/#contact-us" className="btn btn-home" style={{ display: 'inline-flex', padding: '16px 32px', fontSize: '18px' }}>
            <span className="btn-text">Get a Custom Quote</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductDetail;
