import mongoose from 'mongoose';
const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  capacity: { type: Number, default: 2 },
  image: String,
  amenities: [String],
  available: { type: Boolean, default: true }
}, { timestamps: true });
export default mongoose.model('Room', roomSchema);
