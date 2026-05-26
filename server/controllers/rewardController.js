const Reward = require('../models/Reward');
const User = require('../models/User');

const addPoints = async (req, res) => {
  try {
    const { userId, points, reason } = req.body;

    const reward = new Reward({
      userId,
      points,
      reason
    });
    await reward.save();

    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: points } },
      { new: true }
    );

    if (user.totalPoints >= 100 * user.level) {
      await User.findByIdAndUpdate(userId, {
        $inc: { level: 1 }
      });
    }

    res.status(200).json({
      message: 'Points added!',
      totalPoints: user.totalPoints,
      level: user.level
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getUserRewards = async (req, res) => {
  try {
    const rewards = await Reward.find({ userId: req.params.userId })
      .sort({ awardedAt: -1 });
    
    const user = await User.findById(req.params.userId);
    
    res.status(200).json({
      totalPoints: user.totalPoints,
      level: user.level,
      rewards
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ totalPoints: -1 })
      .limit(10)
      .select('name totalPoints level');
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { addPoints, getUserRewards, getLeaderboard };