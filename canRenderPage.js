function canRenderPage(questionData) {
  if (
    questionData.questions &&
    typeof questionData.questions.title === "string" &&
    questionData.questions.fullquestion &&
    typeof questionData.questions.fullquestion.question === "string" &&
    Array.isArray(questionData.questions.fullquestion.answer) &&
    questionData.questions.fullquestion.answer.every(
      (answer) =>
        typeof answer === "object" && typeof answer.correct === "boolean"
    )
  ) {
    return true;
  }
  return false;
}

module.exports = canRenderPage;
