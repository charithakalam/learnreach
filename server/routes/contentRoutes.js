const express = require('express');
const Grade = require('../models/Grade');
const Subject = require('../models/Subject');
const Topic = require('../models/Topic');
const Lesson = require('../models/Lesson');

const router = express.Router();

router.get('/grades', async (req, res) => {
  try {
    const grades = await Grade.find().sort({ name: 1 });

    res.status(200).json({
      grades
    });
  } catch (error) {
    console.error('Get grades error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

router.get('/grades/:gradeId/subjects', async (req, res) => {
  try {
    const { gradeId } = req.params;

    const subjects = await Subject.find({
      grade: gradeId
    }).sort({ name: 1 });

    res.status(200).json({
      subjects
    });
  } catch (error) {
    console.error('Get subjects error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

router.get('/subjects/:subjectId/topics', async (req, res) => {
  try {
    const { subjectId } = req.params;

    const topics = await Topic.find({
      subject: subjectId
    }).sort({ name: 1 });

    res.status(200).json({
      topics
    });
  } catch (error) {
    console.error('Get topics error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

router.get('/topics/:topicId/lessons', async (req, res) => {
  try {
    const { topicId } = req.params;

    const lessons = await Lesson.find({
      topic: topicId
    }).sort({ title: 1 });

    res.status(200).json({
      lessons
    });
  } catch (error) {
    console.error('Get lessons error:', error);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

module.exports = router;