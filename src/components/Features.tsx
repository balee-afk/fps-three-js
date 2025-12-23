import React from 'react';
import './Features.css';

const Features: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
    return (
        <section className="section features-section">
            <div className="container">
                <div className="features-grid">
                    <div className="features-content">
                        <span className="section-subtitle">Why Choose Laundryaya?</span>
                        <h2 className="section-title">We Care About Your Clothes as Much as You Do</h2>
                        <p className="section-description">
                            Experience a new standard of laundry service. We combine technology with expert care to deliver the best results.
                        </p>

                        <ul className="feature-list">
                            <li className="feature-item">
                                <span className="feature-check">✓</span>
                                <div>
                                    <h4>Free Pickup & Delivery</h4>
                                    <p>We come to your door, so you don't have to go anywhere.</p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <span className="feature-check">✓</span>
                                <div>
                                    <h4>Eco-Friendly Cleaning</h4>
                                    <p>We use biodegradable detergents that are safe for you and the planet.</p>
                                </div>
                            </li>
                            <li className="feature-item">
                                <span className="feature-check">✓</span>
                                <div>
                                    <h4>Hygienic Guarantee</h4>
                                    <p>Your clothes are washed separately to ensure maximum hygiene.</p>
                                </div>
                            </li>
                        </ul>

                        <button className="btn btn-primary btn-lg" style={{ marginTop: '2rem' }} onClick={onBookNow}>
                            Get Started Today
                        </button>
                    </div>
                    <div className="features-image">
                        <div className="image-placeholder">
                            <div className="circle-bg"></div>
                            {/* Ideally an image here, using a CSS composition for now */}
                            <div className="feature-card-float">
                                <span>⭐ 4.9/5 Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
