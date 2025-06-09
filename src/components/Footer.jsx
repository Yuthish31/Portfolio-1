import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/achievement">Achievement</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><i className="fas fa-map-marker-alt"></i> Thanjavur, TamilNadu</p>
          <p><i className="fas fa-phone"></i> +91 7358916321</p>
          <p><i className="fas fa-envelope"></i> nagaarjunraju57@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Yuthish-3117. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;