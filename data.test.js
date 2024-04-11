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

  test("returns false for invalid question data", () => {
    const invalidData = { ...pageData, questions: null };
    expect(canRenderPage(invalidData)).toBe(false);
  });
});

// DATA TEST

describe("page data", () => {
  test("has valid structure", () => {
    expect(pageData).toHaveProperty("questions");
    expect(pageData.questions).toHaveProperty("title");
    expect(pageData.questions).toHaveProperty("fullquestion");
  });

  test("has valid fullquestion", () => {
    const fullQuestion = pageData.questions.fullquestion;
    expect(fullQuestion).toHaveProperty("question");
    expect(fullQuestion.question).toBeTruthy();
    expect(typeof fullQuestion.question).toBe("string");

    expect(fullQuestion).toHaveProperty("answer");
    expect(Array.isArray(fullQuestion.answer)).toBe(true);
    expect(fullQuestion.answer.length).toBeGreaterThan(0);
  });
});

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

  test("titleColumn has valid structure", () => {
    pageData.hint.titleColumn.forEach((column) => {
      expect(column).toHaveProperty("linkTitle");
      expect(typeof column.linkTitle).toBe("string");
      expect(column).toHaveProperty("columnTitle");
      expect(typeof column.columnTitle).toBe("string");
    });
  });

  test("video has valid structure", () => {
    pageData.hint.video.forEach((video) => {
      expect(video).toHaveProperty("image");
      expect(typeof video.image).toBe("string");
      expect(video).toHaveProperty("link");
      expect(typeof video.link).toBe("string");
      expect(video).toHaveProperty("title");
      expect(typeof video.title).toBe("string");
      expect(video).toHaveProperty("type");
      expect(typeof video.type).toBe("string");
    });
  });

  test("title has valid structure", () => {
    pageData.hint.title.forEach((title) => {
      expect(title).toHaveProperty("linkTitle");
      expect(typeof title.linkTitle).toBe("string");
      expect(title).toHaveProperty("rowTitle");
      expect(typeof title.rowTitle).toBe("string");
    });
  });
});
