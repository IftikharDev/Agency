/**CORE LIBRARY IMPORTS */
import React from "react";

/**ICONS IMPORT */
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const links = [
  { id: 1, icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?id=61591970368587" },
  { id: 2, icon: <FaInstagram />, url: "https://www.instagram.com/cloudinsider.agency" },
  // { id: 3, icon: <FaYoutube />, url: "https://www.youtube.com/" },
  // { id: 4, icon: <FaLinkedinIn />, url: "https://in.linkedin.com/company/" },
  { id: 5, icon: <FaTwitter />, url: "https://x.com/Cloudiagency" },
];

const SocialLinks = ({ className = "social-links" }) => {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a key={id} href={url} target="_blank" rel="noreferrer" className="social-link">
          {icon}
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
