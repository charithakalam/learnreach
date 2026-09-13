function getLearningLevel(progress, quizScore) {
  const average = (progress + quizScore) / 2;

  if (average < 40) {
    return 'Beginner';
  }

  if (average < 75) {
    return 'Intermediate';
  }

  return 'Advanced';
}

module.exports = {
  getLearningLevel
};