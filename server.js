import express from 'express';
import connectDB from './configs/db.js';
import userRoute from './routes/userRoute.js';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';

const app = express();
const PORT =process.env.PORT || 3000;

// ✅ Allow frontend (React) origin
app.use(cors({
  origin: 'http://localhost:5173', // or "*" if you want to allow all
  credentials: true
}));

// db connection
await connectDB();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/users', userRoute);


app.get('/', (req,res) =>{
    res.send('Server is running')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

export default app;