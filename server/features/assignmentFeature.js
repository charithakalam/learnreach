function getRecommendedAssignment(assignments, progress) {
  if (!assignments || assignments.length === 0) {
    return null;
  }

  if (progress < 50) {
    return assignments[0];
  }

  if (progress < 80) {
    return assignments[Math.min(1, assignments.length - 1)];
  }

  return assignments[assignments.length - 1];
}

module.exports = {
  getRecommendedAssignment
};