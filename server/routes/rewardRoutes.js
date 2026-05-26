const express = require('express');
const router = express.Router();
const { addPoints, getUserRewards, getLeaderboard } = require('../controllers/rewardController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, addPoints);
router.get('/:userId', authMiddleware, getUserRewards);
router.get('/leaderboard/top', getLeaderboard);

module.exports = router;