import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import roomsRouter from './routes/rooms.js';
import bookingsRouter from './routes/bookings.js';

dotenv.config();
const app = express();
app.use(cors({ origin: process.env.CLIENT_URL?.split(',') || true }));
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'HotelPro API' }));
app.use('/api/rooms', roomsRouter);
app.use('/api/bookings', bookingsRouter);

const port = process.env.PORT || 5000;
try {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } else {
    console.warn('MONGODB_URI missing. API starts, but database routes require MongoDB.');
  }
} catch (err) {
  console.error('MongoDB connection failed:', err.message);
}
app.listen(port, () => console.log(`HotelPro API listening on ${port}`));
