# assignment123009256

This project tests the structure and properties of question data used for rendering a page, as well as a function to check the correctness and validity of selected answers.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository: git clone https://github.com/23009256uhi/assignment123009256.git
2. Install the dependencies: npm install
3. Run the test: npm test

## Project Structure

The project has the following structure:

- `data.js`: Contains the sample question data used for testing.
- `canRenderPage.js`: Contains the `canRenderPage` function that checks the essential data requirements and structure for rendering the page.
- `data.test.js`: Contains the test suites and test cases for the `canRenderPage` and the data that are necessary to render the page.
- `answer.js`: Contains the `checkAnswer` function that checks if the selected answer has a valid structure and it is correct.
- `answer.test.js`: Contains the test cases for the `checkAnswer` function.

## Tested Functionalities

The project tests the following functionalities:

### In `data.test.js`:

1. `canRenderPage` function:

- Checks the presence and data types of the essential properties required for rendering the page, such as `questions`, `questions.title`, `questions.fullquestion`, `questions.fullquestion.question`, and `questions.fullquestion.answer`.

2. Question data structure:

- Tests the structure of the question data, including the presence of the `questions` object, and the `title` and `fullquestion` properties.
- Checks the structure and data types of the `fullquestion` object, including the `question` and `answer` properties.

3. Hint data structure:

- Tests the structure of the `hint` object and the `titleColumn`, `video`, and `title` properties.
- Checks the structure and data types of the `titleColumn`, `video`, and `title` arrays within the `hint` object.

### In `answer.test.js`:

1. `checkAnswer` function:

- Checks the selected answer and the presence and data type of the `correct` property.
- Checks the correctness of the selected answer based on the value of the `correct` property.
- Throws errors if the selected answer is null, undefined, an empty object, or does not have a valid `correct` property.
