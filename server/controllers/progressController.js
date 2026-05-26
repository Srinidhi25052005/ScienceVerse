const Progress = require('../models/Progress');
const User = require('../models/User');
const Reward = require('../models/Reward');
const Story = require('../models/Story');

const completeStory = async (req, res) => {
  try {
    const { userId, storyId, score } = req.body;

    const existing = await Progress.findOne({ userId, storyId });
    if (existing) {
      return res.status(400).json({ message: 'Story already completed' });
    }

    const progress = new Progress({
      userId,
      storyId,
      completed: true,
      score
    });
    await progress.save();

    const pointsEarned = score * 10;
    const reward = new Reward({
      userId,
      points: pointsEarned,
      reason: 'Completed a story quiz'
    });
    await reward.save();

    await User.findByIdAndUpdate(userId, {
      $inc: { totalPoints: pointsEarned }
    });

    res.status(200).json({
      message: 'Story completed!',
      pointsEarned,
      progress
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId })
      .populate('storyId', 'title subject');
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { completeStory, getUserProgress };