const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
