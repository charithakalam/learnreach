const express = require('express');
const Quiz = require('../models/Quiz');

const router = express.Router();

router.get('/topic/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;

    const quizzes = await Quiz.find({
      topic: topicId
    }).select('-questions.correctAnswer');

    res.status(200).json({
      quizzes
    });
  } catch (error) {
    console.error('Get quizzes error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;