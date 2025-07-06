import express from 'express';
import connectDB from './configs/db.js';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(express.json());

// ✅ Connect DB before any route is hit
let isDBConnected = false;

app.use(async (req, res, next) => {
  if (!isDBConnected) {
    try {
      await connectDB();
      isDBConnected = true;
    } catch (err) {
      console.error("Database connection error:", err.message);
      return res.status(500).json({ error: "Database connection failed" });
    }
  }
  next();
});

app.use('/api/users', userRoute);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

export default app; // ✅ For Vercel
