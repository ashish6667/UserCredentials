import express from 'express';
import connectDB from './configs/db.js';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*', // or specify your frontend URL
  credentials: true
}));

app.use(express.json());
app.use('/api/users', userRoute);
app.get('/', (req, res) => {
  res.send('Server is running!');
});

await connectDB();

export default app; // ✅ Vercel will handle the request — no need to listen on a port
