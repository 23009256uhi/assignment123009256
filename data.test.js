const data = require("./data");
const canRenderPage = require("./renderPage");

test("canRenderPage returns true for valid question data", () => {
  const pageData = data["balances"];
  expect(canRenderPage(pageData)).toBe(true);
  expect(canRenderPage(pageData)).not.toBeNull();
  expect(canRenderPage(pageData)).not.toBeNan();
});

test("render page with valid data", () => {
  const pageData = data["balances"];
  expect(pageData).toHaveProperty("questions");
  expect(pageData.questions).toHaveProperty("title");
  expect(pageData.questions).toHaveProperty("fullquestion");

  const fullQuestion = pageData.questions.fullquestion;
  expect(fullQuestion).toHaveProperty("question");
  expect(fullQuestion.question).toBeTruthy();
  expect(typeof fullQuestion.question).toBe("string");

  expect(fullQuestion).toHaveProperty("answer");
  expect(Array.isArray(fullQuestion.answer)).toBe(true);
  expect(fullQuestion.answer.length).toBeGreaterThan(0);
});
