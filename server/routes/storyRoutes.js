const express = require('express');
const router = express.Router();
const { getAllStories, getStoryById } = require('../controllers/storyController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, getAllStories);
router.get('/:id', authMiddleware, getStoryById);

module.exports = router;