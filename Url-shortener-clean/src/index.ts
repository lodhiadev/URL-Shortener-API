import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import authRoutes from './routes/auth';
import urlRoutes from './routes/url';
import analyticsRoutes from './routes/analytics';

dotenv.config();

const app = express();
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100
});
app.use(limiter);

app.use('/auth', authRoutes);
app.use('/url', urlRoutes);
app.use('/analytics', analyticsRoutes);

app.get('/', (req, res) => res.send('URL Shortener API - Clean version'));

const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO_URI || '';

mongoose.connect(MONGO).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
