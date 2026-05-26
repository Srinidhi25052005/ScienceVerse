const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  stageNumber: {
    type: Number,
    required: true
  },
  isLocked: {
    type: Boolean,
    default: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy'
  },
  pointsRequired: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Story', StorySchema);