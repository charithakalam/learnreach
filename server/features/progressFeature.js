function calculateProgress(completedLessons, totalLessons) {
  if (totalLessons <= 0) {
    return 0;
  }

  const progress = (completedLessons / totalLessons) * 100;

  return Math.round(progress);
}

function getProgressStatus(progress) {
  if (progress <= 0) {
    return 'Not Started';
  }

  if (progress >= 100) {
    return 'Completed';
  }

  return 'In Progress';
}

module.exports = {
  calculateProgress,
  getProgressStatus
};