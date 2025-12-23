import React, { useState } from 'react';
import './BookingForm.css';

interface BookingFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        serviceType: 'wash-fold',
        pickupDate: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setFormData({ name: '', phone: '', serviceType: 'wash-fold', pickupDate: '' });
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>×</button>

                {status === 'success' ? (
                    <div className="success-message">
                        <div className="success-icon">✅</div>
                        <h3>Booking Confirmed!</h3>
                        <p>We'll contact you shortly to confirm the pickup.</p>
                    </div>
                ) : (
                    <>
                        <h2>Schedule Pickup</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="+1 234 567 8900"
                                />
                            </div>

                            <div className="form-group">
                                <label>Service Type</label>
                                <select
                                    value={formData.serviceType}
                                    onChange={e => setFormData({ ...formData, serviceType: e.target.value })}
                                >
                                    <option value="wash-fold">Wash & Fold</option>
                                    <option value="dry-cleaning">Dry Cleaning</option>
                                    <option value="ironing">Ironing Only</option>
                                    <option value="shoe-cleaning">Shoe Cleaning</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Preferred Pickup Date</label>
                                <input
                                    type="date"
                                    required
                                    value={formData.pickupDate}
                                    onChange={e => setFormData({ ...formData, pickupDate: e.target.value })}
                                />
                            </div>

                            {status === 'error' && <p className="error-text">Something went wrong. Please try again.</p>}

                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Booking...' : 'Confirm Booking'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default BookingForm;
