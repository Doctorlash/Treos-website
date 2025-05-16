import React from 'react';
import { Link } from 'react-router-dom';
 // Create this CSS file for styling

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <img src="https://drive.google.com/your-logo-link" alt="Sageconsolidated Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
</nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default Header;
