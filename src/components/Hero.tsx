import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Premium Laundry Service</span>
                    <h1 className="hero-title">
                        Fresh Laundry,<br />
                        <span className="highlight">Modern Clean.</span>
                    </h1>
                    <p className="hero-description">
                        Experience the most convenient and professional laundry service in town.
                        We pick up, clean, and deliver your clothes within 24 hours.
                    </p>
                    <div className="hero-actions">
                        <button className="btn btn-primary btn-lg" onClick={onBookNow}>Schedule Pickup</button>
                        <button className="btn btn-secondary btn-lg">View Services</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">24h</span>
                            <span className="stat-label">Turnaround</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5k+</span>
                            <span className="stat-label">Happy Customers</span>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="image-wrapper">
                        <img src={heroImage} alt="Fresh clean laundry" className="hero-img" />
                        <div className="floating-card glass">
                            <span className="icon">✨</span>
                            <span>100% Hygienic</span>
                        </div>
                    </div>
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
