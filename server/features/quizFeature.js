function evaluateQuiz(questions, answers) {
  let correctAnswers = 0;

  questions.forEach((question, index) => {
    if (question.correctAnswer === answers[index]) {
      correctAnswers++;
    }
  });

  const totalQuestions = questions.length;

  const percentage =
    totalQuestions > 0
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;

  return {
    correctAnswers,
    totalQuestions,
    percentage
  };
}

module.exports = {
  evaluateQuiz
};