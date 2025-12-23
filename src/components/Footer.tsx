import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            Laundryaya<span className="dot">.</span>
                        </a>
                        <p className="footer-desc">
                            Your trusted partner for fresh, clean clothes. Delivered with care, every time.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Services</h4>
                        <ul>
                            <li><a href="#">Dry Cleaning</a></li>
                            <li><a href="#">Wash & Fold</a></li>
                            <li><a href="#">Ironing</a></li>
                            <li><a href="#">Shoe Cleaning</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Reviews</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-newsletter">
                        <h4 className="footer-heading">Stay Updated</h4>
                        <p>Subscribe to get special offers.</p>
                        <form className="newsletter-form" onSubmit={async (e) => {
                            e.preventDefault();
                            const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
                            if (!email) return;
                            try {
                                const res = await fetch('http://localhost:3000/api/subscribe', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ email })
                                });
                                if (res.ok) alert('Subscribed successfully!');
                                else alert('Subscription failed.');
                            } catch (err) { alert('Error subscribing'); }
                        }}>
                            <input type="email" placeholder="Enter your email" />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 Laundryaya. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook">FB</a>
                        <a href="#" aria-label="Twitter">TW</a>
                        <a href="#" aria-label="Instagram">IG</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
