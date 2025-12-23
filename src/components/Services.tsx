import React from 'react';
import './Services.css';

const services = [
    {
        icon: '🧺',
        title: 'Wash & Fold',
        description: 'Everyday clothes washed, dried, and neatly folded. Perfect for t-shirts, pants, and socks.'
    },
    {
        icon: '👔',
        title: 'Dry Cleaning',
        description: 'Professional care for delicate items. Suits, dresses, and silk garments handled with expertise.'
    },
    {
        icon: '✨',
        title: 'Ironing Only',
        description: 'Already washed? Let us handle the wrinkles. Crisp, professional pressing for all your garments.'
    },
    {
        icon: '👟',
        title: 'Shoe Cleaning',
        description: 'Deep cleaning for all types of footwear. We restore your shoes to their former glory.'
    }
];

const Services: React.FC = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Quality Laundry Services</h2>
                    <p className="section-description">
                        We use top-quality eco-friendly detergents and professional equipment to ensure your clothes come back looking their best.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-text">{service.description}</p>
                            <a href="#" className="service-link">Learn more →</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
