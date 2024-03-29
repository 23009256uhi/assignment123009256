const data = require("./data");
const canRenderPage = require("./canRenderPage");

const pageData = data["balances"];

describe("canRenderPage", () => {
  test("returns true for valid question data", () => {
    expect(canRenderPage(pageData)).toBe(true);
  });

  test("does not return null", () => {
    expect(canRenderPage(pageData)).not.toBeNull();
  });

  test("does not return NaN", () => {
    expect(canRenderPage(pageData)).not.toBeNaN();
  });
});

test("render page with valid data", () => {
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

// describe("render page with valid data", () => {
//   const pageData = data["balances"];

//   test("pageData has questions property", () => {
//     expect(pageData).toHaveProperty("questions");
//   });

//   test("questions has title property", () => {
//     expect(pageData.questions).toHaveProperty("title");
//   });

//   test("questions has fullquestion property", () => {
//     expect(pageData.questions).toHaveProperty("fullquestion");
//   });

//   describe("fullQuestion", () => {
//     const fullQuestion = pageData.questions.fullquestion;

//     test("has question property", () => {
//       expect(fullQuestion).toHaveProperty("question");
//     });

//     test("question is a non-empty string", () => {
//       expect(fullQuestion.question).toBeTruthy();
//       expect(typeof fullQuestion.question).toBe("string");
//     });

//     test("has answer property", () => {
//       expect(fullQuestion).toHaveProperty("answer");
//     });

//     test("answer is a non-empty array", () => {
//       expect(Array.isArray(fullQuestion.answer)).toBe(true);
//       expect(fullQuestion.answer.length).toBeGreaterThan(0);
//     });
//   });
// });

describe("hint", () => {
  const hint = pageData.hint;

  test("has titleColumn property", () => {
    expect(hint).toHaveProperty("titleColumn");
    expect(Array.isArray(hint.titleColumn)).toBe(true);
  });

  test("has video property", () => {
    expect(hint).toHaveProperty("video");
    expect(Array.isArray(hint.video)).toBe(true);
  });

  test("has title property", () => {
    expect(hint).toHaveProperty("title");
    expect(Array.isArray(hint.title)).toBe(true);
  });
});
