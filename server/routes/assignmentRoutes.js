const express = require('express');
const Assignment = require('../models/Assignment');

const router = express.Router();

router.get('/topic/:topicId', async (req, res) => {
  try {
    const { topicId } = req.params;

    const assignments = await Assignment.find({
      topic: topicId
    }).sort({ dueDate: 1 });

    res.status(200).json({
      assignments
    });
  } catch (error) {
    console.error('Get assignments error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;