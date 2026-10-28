import { Router } from 'express';
import mongoose from 'mongoose';
import Booking from '../models/Booking.js';
const router = Router();
router.get('/', async (_req, res) => {
  if (mongoose.connection.readyState !== 1) return res.json([]);
  try { res.json(await Booking.find().sort({createdAt:-1})); }
  catch (e) { res.status(500).json({message:'Could not load bookings'}); }
});
router.post('/', async (req, res) => {
  const { guestName, guestEmail, roomId, roomName, checkIn, checkOut, guests, total } = req.body;
  if (!guestName || !guestEmail || !roomId || !roomName || !checkIn || !checkOut || !total) {
    return res.status(400).json({message:'Please provide all required booking fields.'});
  }
  if (new Date(checkOut) <= new Date(checkIn)) return res.status(400).json({message:'Check-out must be after check-in.'});
  if (mongoose.connection.readyState !== 1) return res.status(503).json({message:'Database is not connected. Use frontend demo mode or configure MongoDB.'});
  try { const booking = await Booking.create(req.body); res.status(201).json(booking); }
  catch (e) { res.status(400).json({message:e.message}); }
});
router.patch('/:id/cancel', async (req, res) => {
  if (!mongoose.connection.readyState || !mongoose.isValidObjectId(req.params.id)) return res.status(503).json({message:'A connected database booking is required.'});
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, {status:'Cancelled'}, {new:true});
    if (!booking) return res.status(404).json({message:'Booking not found'});
    res.json(booking);
  } catch (e) { res.status(500).json({message:'Could not cancel booking'}); }
});
export default router;
