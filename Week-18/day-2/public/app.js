`use strict`;

const url = '/api/game';
const question = document.querySelector('#question');
const answer1 = document.querySelector('#answer_1');
const answer2 = document.querySelector('#answer_2');
const answer3 = document.querySelector('#answer_3');
const answer4 = document.querySelector('#answer_4');
const score = document.querySelector('#score-amount');
const answerContainer = document.querySelector(`#answers`);

let answerObject = {};
let usedQuestions = [];

const fetchQuestion = () => {
  fetch(url)
    .then((response) => response.json())
    .then((myResponse) => {
      getQuestion(myResponse);
    })
    .then(
      answerContainer.addEventListener(
        'click',
        (event) => {
          const answer = document.querySelector(`#${event.target.id}`);
          answerObject.forEach((element) => {
            if (event.target.textContent === element.answer) {
              if (element.isCorrect === 1) {
                answer.style.backgroundColor = 'lightgreen';
                score.textContent++;
              } else {
                answer.style.backgroundColor = 'red';
                score.textContent = 0;
              }
              setTimeout(() => {
                answer.style.backgroundColor = '#40b3ff';
                fetchQuestion();
              }, 2000);
            }
          });
        },
        { once: true }
      )
    );
};

function getQuestion(questionObject) {
  question.textContent = questionObject.question;
  answer1.textContent = questionObject.answer[0].answer_1;
  answer2.textContent = questionObject.answer[1].answer_2;
  answer3.textContent = questionObject.answer[2].answer_3;
  answer4.textContent = questionObject.answer[3].answer_4;
  //   usedQuestions.push(questionObject.id);
  answerObject = [
    {
      answer: questionObject.answer[0].answer_1,
      isCorrect: questionObject.answer[0].is_correct,
    },
    {
      answer: questionObject.answer[1].answer_2,
      isCorrect: questionObject.answer[1].is_correct,
    },
    {
      answer: questionObject.answer[2].answer_3,
      isCorrect: questionObject.answer[2].is_correct,
    },
    {
      answer: questionObject.answer[3].answer_4,
      isCorrect: questionObject.answer[3].is_correct,
    },
    { id: questionObject.id },
  ];
}

fetchQuestion();
