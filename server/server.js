const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'ScienceVerse API is running!' });
});

// MongoDB - uncomment at college
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected!'))
//   .catch(err => console.log('DB Error:', err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});