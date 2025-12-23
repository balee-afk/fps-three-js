import React, { useState, useEffect } from 'react';
import './Navbar.css'; // We'll create this corresponding CSS file

const Navbar: React.FC<{ onBookNow: () => void }> = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <a href="#" className="logo">
          Laundryaya<span className="dot">.</span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#testimonials">Testimonials</a>
          <button className="btn btn-primary" onClick={onBookNow}>Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
