import { Router } from 'express';
import mongoose from 'mongoose';
import Room from '../models/Room.js';
const router = Router();
const demoRooms = [
  { _id:'demo-1', name:'The Garden Suite', type:'Suite', description:'A calm, spacious suite with a private sitting area.', price:6800, capacity:2, image:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80', amenities:['King bed','Garden view','Breakfast'] },
  { _id:'demo-2', name:'Deluxe King Room', type:'Deluxe', description:'Warm interiors and thoughtful comforts for a restful stay.', price:4200, capacity:2, image:'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80', amenities:['King bed','Wi-Fi','Work desk'] },
  { _id:'demo-3', name:'City View Twin', type:'Standard', description:'A bright twin room with sweeping city views.', price:3200, capacity:2, image:'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80', amenities:['Twin beds','City view','Wi-Fi'] },
  { _id:'demo-4', name:'Family Residence', type:'Family', description:'Extra room to settle in, ideal for family trips.', price:7900, capacity:4, image:'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80', amenities:['2 bedrooms','Sofa bed','Breakfast'] }
];
router.get('/', async (_req, res) => {
  if (mongoose.connection.readyState !== 1) return res.json(demoRooms);
  try {
    let rooms = await Room.find();
    if (!rooms.length) rooms = await Room.insertMany(demoRooms.map(({_id,...r}) => r));
    res.json(rooms);
  } catch (e) { res.status(500).json({ message: 'Could not load rooms', error: e.message }); }
});
export default router;
