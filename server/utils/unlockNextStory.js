const Progress = require('../models/Progress');
const Story = require('../models/Story');

const unlockNextStory = async (userId, currentStageNumber) => {
  try {
    const nextStory = await Story.findOne({ 
      stageNumber: currentStageNumber + 1 
    });
    if (nextStory) {
      await Story.findByIdAndUpdate(nextStory._id, { 
        isLocked: false 
      });
    }
  } catch (error) {
    console.log('Unlock error:', error.message);
  }
};

module.exports = unlockNextStory;