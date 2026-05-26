const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const progressRoutes = require('./routes/progressRoutes');
const rewardRoutes = require('./routes/rewardRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/quiz', quizRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'ScienceVerse API is running!' });
});

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB Connected!'))
//   .catch(err => console.log('DB Error:', err.message));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});