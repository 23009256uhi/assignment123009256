function canRenderPage(questionData) {
  if (
    questionData.questions &&
    questionData.questions.title &&
    questionData.questions.fullquestion
  ) {
    return true;
  }
  return false;
}

module.exports = canRenderPage;
