const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },

    lesson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson'
    },

    quiz: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz'
    },

    lessonCompleted: {
      type: Boolean,
      default: false
    },

    quizScore: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Progress', progressSchema);