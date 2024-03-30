const data = require("./data");
const checkAnswer = require("./answer");

test("checkAnswer returns true for a correct answer", () => {
  const selectedAnswer = data.balances.questions.fullquestion.answer[3];
  expect(checkAnswer(selectedAnswer)).toBe(true);
});

test("checkAnswer returns false for an incorrect answer", () => {
  const selectedAnswer = data.balances.questions.fullquestion.answer[0];
  expect(checkAnswer(selectedAnswer)).toBe(false);
});

test("checkAnswer throws an error for a null selected answer", () => {
  const selectedAnswer = null;

  expect(() => {
    checkAnswer(selectedAnswer);
  }).toThrow("Selected answer is null or undefined");
});

test("checkAnswer throws an error for an empty selected answer", () => {
  const selectedAnswer = {};

  expect(() => {
    checkAnswer(selectedAnswer);
  }).toThrow("Selected answer is an empty object");
});
