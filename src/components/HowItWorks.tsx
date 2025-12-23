import React from 'react';
import './HowItWorks.css';

const steps = [
    {
        num: '01',
        title: 'Schedule Pickup',
        description: 'Book online or via our app. Choose a time that works for you.'
    },
    {
        num: '02',
        title: 'We Collect',
        description: 'Our driver will arrive at your doorstep to collect your laundry.'
    },
    {
        num: '03',
        title: 'Delivery',
        description: 'Get your fresh, clean clothes delivered back in as little as 24 hours.'
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="section how-it-works-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Simple Process</span>
                    <h2 className="section-title">How It Works</h2>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.num}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-desc">{step.description}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
