`use strict`;

function getQuestion(
  randomQuestion,
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  isCorrect1,
  isCorrect2,
  isCorrect3,
  isCorrect4
) {
  question.textContent = randomQuestion;
  answer1.textContent = answerOne;
  answer2.textContent = answerTwo;
  answer3.textContent = answerThree;
  answer4.textContent = answerFour;
  answerObject = [
    {
      answer: answerOne,
      isCorrect: isCorrect1,
    },
    {
      answer: answerTwo,
      isCorrect: isCorrect2,
    },
    {
      answer: answerThree,
      isCorrect: isCorrect3,
    },
    {
      answer: answerFour,
      isCorrect: isCorrect4,
    },
  ];
}
