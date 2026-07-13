/**CORE LIBRARY IMPORTS */
import { React ,useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**LOGO IMPORT */
import ciLogo from "../Images/ci-logo.png";

const Header = () => {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Use state to track the active section based on scroll (optional enhancement, but we'll keep it simple for now)
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
      
      // Simple logic to detect which section is in view based on scroll position
      const sections = ["about", "framework", "services", "portfolio", "company", "blog", "contact-us"];
      let current = "";
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = "#" + section;
          }
        }
      }
      setActiveHash(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "About Us", path: "#about" },
    { name: "Framework", path: "#framework" },
    { name: "Services", path: "#services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Company", path: "#company"},
    { name: "Blog", path: "#blog" },
    { name: "Get a Quote", path: "#contact-us", isButton: true },
  ];

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    setSidebarOpen(false); // Close sidebar on mobile if open
    
    // If it's a hash link, scroll to it
    if (path.startsWith("#")) {
      const id = path.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Offset for the sticky header
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    } else {
      // Fallback for non-hash links (like home logo)
      window.location.href = path;
    }
  };

  return (
    <>
      {/* Spacer */}
      <div style={{ paddingTop: isSticky ? navbarRef.current?.offsetHeight : 0 }} />

      {/* Navbar */}
      <motion.nav
        ref={navbarRef}
        className={`navbar ${isSticky ? "navbar-fixed" : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="nav-container">
          {/* Logo */}
          <a href="/" onClick={(e) => handleLinkClick(e, "/")} className="nav-logo-link">
            <img src={ciLogo} alt="Cloud Insider" className="nav-logo-img" />
            <div className="nav-logo-group">
              <span className="nav-logo-text">Cloud Insider</span>
              <span className="nav-logo-tagline">Your long-term technical partner.</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={`${link.isButton ? "btn-cta btn-home" : ""} ${
                    activeHash === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>
      </motion.nav>

      {/* Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            className="sidebar"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="sidebar-header">
              <div className="nav-logo-link">
                <img src={ciLogo} alt="Cloud Insider" className="nav-logo-img" />
                <span className="nav-logo-text">Cloud Insider</span>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="close-btn">✕</button>
            </div>
            <ul className="sidebar-links">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.path} onClick={(e) => handleLinkClick(e, link.path)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="sidebar-footer">
              <p>Contact: info@cloudinsider.com</p>
              <p>Phone: +91 63576 05131</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
