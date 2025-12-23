import express from 'express';
import cors from 'cors';
import db from './db';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Create Booking
app.post('/api/bookings', (req, res) => {
    const { name, phone, serviceType, pickupDate } = req.body;

    try {
        const stmt = db.prepare('INSERT INTO bookings (name, phone, serviceType, pickupDate) VALUES (?, ?, ?, ?)');
        const info = stmt.run(name, phone, serviceType, pickupDate);
        res.json({ success: true, id: info.lastInsertRowid });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all Bookings
app.get('/api/bookings', (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM bookings ORDER BY createdAt DESC');
        const bookings = stmt.all();
        res.json({ success: true, data: bookings });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Subscribe to Newsletter
app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, error: 'Email is required' });
    }

    try {
        const stmt = db.prepare('INSERT INTO subscribers (email) VALUES (?)');
        stmt.run(email);
        res.json({ success: true });
    } catch (error: any) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return res.status(400).json({ success: false, error: 'Email already subscribed' });
        }
        res.status(500).json({ success: false, error: error.message });
    }
});

// Get all Subscribers
app.get('/api/subscribers', (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM subscribers ORDER BY createdAt DESC');
        const subscribers = stmt.all();
        res.json({ success: true, data: subscribers });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
