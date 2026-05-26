const Quiz = require('../models/Quiz');
const Reward = require('../models/Reward');
const User = require('../models/User');

const getQuizByStory = async (req, res) => {
  try {
    const quizzes = await Quiz.find({ storyId: req.params.storyId });
    if (!quizzes.length) {
      return res.status(404).json({ message: 'No quiz found for this story' });
    }
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const submitAnswer = async (req, res) => {
  try {
    const { quizId, userAnswer, userId } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    const isCorrect = quiz.correctAnswer === userAnswer;

    if (isCorrect) {
      const reward = new Reward({
        userId,
        points: 10,
        reason: 'Correct quiz answer'
      });
      await reward.save();

      await User.findByIdAndUpdate(userId, {
        $inc: { totalPoints: 10 }
      });
    }

    res.status(200).json({
      correct: isCorrect,
      correctAnswer: quiz.correctAnswer,
      explanation: quiz.explanation,
      pointsEarned: isCorrect ? 10 : 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getQuizByStory, submitAnswer };