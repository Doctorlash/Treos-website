import React from 'react';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-description">
        <p>Sageconsolidated is a leading social media agency dedicated to enhancing your online presence through strategic management, compelling content, and robust security measures.</p>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: contact@sageconsolidated.com</p>
        <p>Address: 123 Main Street, Ashburn, VA</p>
      </div>
      <div className="footer-social">
        <a href="#">Facebook</a> |
        <a href="#">Twitter</a> |
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
