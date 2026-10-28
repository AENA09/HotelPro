import mongoose from 'mongoose';
const bookingSchema = new mongoose.Schema({
  guestName: { type: String, required: true },
  guestEmail: { type: String, required: true },
  roomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true },
  roomName: { type: String, required: true },
  checkIn: { type: String, required: true },
  checkOut: { type: String, required: true },
  guests: { type: Number, default: 1 },
  total: { type: Number, required: true },
  status: { type: String, enum: ['Confirmed', 'Cancelled'], default: 'Confirmed' }
}, { timestamps: true });
export default mongoose.model('Booking', bookingSchema);
