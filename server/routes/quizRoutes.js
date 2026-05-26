const express = require('express');
const router = express.Router();
const { getQuizByStory, submitAnswer } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:storyId', authMiddleware, getQuizByStory);
router.post('/submit', authMiddleware, submitAnswer);

module.exports = router;