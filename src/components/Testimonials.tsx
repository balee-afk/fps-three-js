import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Busy Mom',
        text: 'Laundryaya has been a lifesaver! The pickup is always on time and the clothes smell amazing.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Software Engineer',
        text: 'Best laundry service I have used. The app is easy to use and the quality is top notch.',
        rating: 5
    },
    {
        name: 'Jessica Williams',
        role: 'Fashion Designer',
        text: 'I trust them with my most delicate fabrics. They really know what they are doing.',
        rating: 5
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">Testimonials</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">{'★'.repeat(t.rating)}</div>
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{t.name[0]}</div>
                                <div>
                                    <h4 className="author-name">{t.name}</h4>
                                    <span className="author-role">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
