import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTASection = () => (
  <section className="cta-section">
    <h2>Ready to Elevate Your Social Media Presence?</h2>
    <p>Engage with us today and secure your brand's future.</p>
    <Link to="/contact" className="cta-button">Get Started</Link>
    </section>
);

export default CTASection;
