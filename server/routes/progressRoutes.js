const express = require('express');
const Progress = require('../models/Progress');

const router = express.Router();

router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const progress = await Progress.find({
      user: userId
    })
      .populate('lesson', 'title')
      .populate('quiz', 'title');

    res.status(200).json({
      progress
    });
  } catch (error) {
    console.error('Get progress error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;