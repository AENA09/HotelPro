# HotelPro — Hotel Booking & Management

A MERN-stack starter project for a hotel booking and management system.

## Features
- Browse and filter rooms
- Create reservations with guest details
- Booking management dashboard (view and cancel)
- Room availability checks for selected dates
- Express REST API and MongoDB persistence when configured
- Demo mode: frontend falls back to browser localStorage if the API is unavailable

## Tech stack
React + Vite, Bootstrap, Node.js, Express, MongoDB/Mongoose, JWT-ready API structure.

## Run locally
Requirements: Node.js 18+ and npm.

### 1. Backend
```bash
cd server
npm install
copy .env.example .env
```
On macOS/Linux use `cp .env.example .env`. Add your MongoDB connection string to `MONGODB_URI` in `.env`.
```bash
npm run dev
```
API runs at `http://localhost:5000`.

### 2. Frontend (new terminal)
```bash
cd client
npm install
npm run dev
```
Open the Vite URL shown in the terminal.

## Deploy for a demo
- Frontend: deploy `client` to Vercel or Netlify.
- Backend: deploy `server` to Render.
- Set `VITE_API_URL` in frontend hosting to your backend URL plus `/api`.
- Set `MONGODB_URI` and `JWT_SECRET` in backend environment variables.
- Add your frontend domain to `CLIENT_URL` in the backend environment variables.
- For a quick UI demo, the frontend works in local demo mode without a backend, storing demo bookings in that browser only.

## Important
This is an academic demonstration project. It does not process real payments. Do not enter real sensitive personal or payment information.
