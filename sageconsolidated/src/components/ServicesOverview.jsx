import React from 'react';
import styles from './ServiceOverview.css';

const services = [
  {
    icon: '📈',
    title: 'Digital Marketing',
    description: 'Boost your online presence with our expert marketing strategies.',
  },
  {
    icon: '🎨',
    title: 'Creative Design',
    description: 'Engaging designs that captivate your audience.',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Responsive and modern websites tailored to your needs.',
  },
];

const ServicesOverview = () => {
  return (
    <section className={styles.servicesSection}>
    <h2 className={styles.servicesTitle}>Our Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
