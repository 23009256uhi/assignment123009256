function checkAnswer(selectedAnswer) {
  // Check if selectedAnswer is null or undefined
  if (selectedAnswer == null) {
    throw new Error("Selected answer is null or undefined");
  }

  // Check if selectedAnswer is an empty object
  if (Object.keys(selectedAnswer).length === 0) {
    throw new Error("Selected answer is an empty object");
  }

  // Check if selectedAnswer has a 'correct' property
  if (!selectedAnswer.hasOwnProperty("correct")) {
    throw new Error("Selected answer does not have a 'correct' property");
  }

  // Check if the value of 'correct' key is a boolean
  if (typeof selectedAnswer.correct !== "boolean") {
    throw new Error("The value of 'correct' key is not a boolean");
  }

  return selectedAnswer.correct;
}

module.exports = checkAnswer;
