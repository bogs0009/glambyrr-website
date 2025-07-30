import React from 'react';
import StarRating from './StarRating';
import { Element } from 'react-scroll';

import './ServicesSection.css';

const services = [
  {
    title: 'Wedding',
    image: '/images/wedding.jpg',
    feedback: '“Absolutely stunning work on our special day!”',
    rating: 5,
  },
  {
    title: 'Birthdays',
    image: '/images/birthday.jpg',
    feedback: '“Made our event so memorable. Highly recommended!”',
    rating: 5,
  },
  {
    title: 'Editorial',
    image: '/images/editorial.jpg',
    feedback: '“Captured every detail perfectly. Very professional.”',
    rating: 5,
  },
  {
    title: 'Special Occasions',
    image: '/images/special.jpg',
    feedback: '“A magical experience. Thank you for everything!”',
    rating: 5,
  },
];

const ServicesSection = () => {
  return (
    <Element name="services">
      <section id="ServicesSection" className="services-section">
        <h2 className="section-title">Services Offered</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${index % 2 === 0 ? 'normal' : 'reverse'}`}
            >
              <div className="service-image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-feedback">{service.feedback}</p>
                <StarRating rating={service.rating} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default ServicesSection;
