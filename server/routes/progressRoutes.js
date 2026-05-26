const express = require('express');
const router = express.Router();
const { completeStory, getUserProgress } = require('../controllers/progressController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/complete', authMiddleware, completeStory);
router.get('/:userId', authMiddleware, getUserProgress);

module.exports = router;