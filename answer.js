function checkAnswer(selectedAnswer) {
  // Check if selectedAnswer is null or undefined
  if (selectedAnswer == null) {
    throw new Error("Selected answer is null or undefined");
  }

  // Check if selectedAnswer is an empty object
  if (Object.keys(selectedAnswer).length === 0) {
    throw new Error("Selected answer is an empty object");
  }

  return selectedAnswer.correct;
}

module.exports = checkAnswer;
