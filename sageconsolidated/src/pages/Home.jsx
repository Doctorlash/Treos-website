import React from 'react';
import Header from '../components/Header';
import ImageSlider from '../components/ImageSlider';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import TeamIntro from '../components/TeamIntro';
import CTASection from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <ImageSlider />
      <main>
        <section className="headline">
          <h1>Elevate. Engage. Secure.</h1>
          <p>Empowering your digital presence with innovative social media solutions.</p>
        </section>
        <section className="services-overview">
          <h2>Our Services</h2>
          <ul>
            <li>Social Media Management</li>
            <li>Content Creation</li>
            <li>Ad Campaigns</li>
            <li>Strategy Development</li>
            <li>Account Setup & Optimization</li>
            <li>Email Marketing</li>
            <li>Consultation</li>
            <li>Online Training</li>
            <li>Security</li>
          </ul>
          <a href="/services" className="cta-button">Learn More</a>
        </section>
        <ServicesOverview />
        <Testimonials />
        <BlogPreview />
        <TeamIntro />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
