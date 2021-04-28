`use strict`;

const url = '/api/questions';

const fetchQuestions = () => {
  fetch(url)
    .then((response) => response.json())
    .then((myResponse) => {
      getQuestions(myResponse);
    });
};

const fetchDelete = (id) => {
  fetch(`/api/questions/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    // .then((myResponse) => {
    //   console.log(myResponse);
    //   console.log(`/api/questions/${id}`);
    // })
    .then(clearQuestions())
    .then(fetchQuestions());
};

fetchQuestions();
createForm();

const container = document.querySelector('#delete-container');
container.addEventListener(`click`, (event) => {
  fetchDelete(parseInt(event.target.id));
});

const submit = document.querySelector('#submit');
submit.addEventListener(`click`, () => {
  fetchQuestions();
});

function getQuestions(questions) {
  questions.forEach((question) => {
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('class', 'question-div');
    const questionToDelete = document.createElement('p');
    questionToDelete.setAttribute('id', `${question.ID}`);
    questionToDelete.setAttribute('class', 'questionToDelete');
    questionToDelete.textContent = question.question;
    questionDiv.appendChild(questionToDelete);
    const deleteButton = document.createElement(`button`);
    deleteButton.setAttribute('id', `${question.ID}`);
    deleteButton.textContent = `delete`;
    deleteButton.setAttribute('class', `delete_buttons`);
    questionDiv.appendChild(deleteButton);
    container.appendChild(questionDiv);
  });
}

function clearQuestions() {
  container.textContent = '';
}

function clearForm() {
  const form = document.querySelector('form');
  form.textContent = '';
}

function createForm() {
  const formContainer = document.querySelector(`#new_question_container`);
  const form = document.querySelector('form');
  const question = document.createElement('input');
  question.setAttribute('type', 'text');
  question.setAttribute('name', 'question');
  question.setAttribute('id', 'question');
  question.setAttribute('placeholder', 'Typle your question here');
  form.appendChild(question);
  const answer = document.createElement('h1');
  answer.textContent = 'Answers';
  form.appendChild(answer);

  const answerOne = document.createElement('div');
  answerOne.setAttribute('class', 'answer');
  const answerOneLabel = document.createElement('label');
  answerOneLabel.textContent = '#1';
  answerOneLabel.setAttribute('for', 'answer_1');
  answerOne.appendChild(answerOneLabel);
  const answerOneInput = document.createElement('input');
  answerOneInput.setAttribute('type', 'text');
  answerOneInput.setAttribute('name', 'answer_1');
  answerOneInput.setAttribute('placeholder', 'Type your answer here');
  answerOne.appendChild(answerOneInput);
  const answerOneRadio = document.createElement('input');
  answerOneRadio.setAttribute('type', 'radio');
  answerOneRadio.setAttribute('name', 'answer_1');
  answerOne.appendChild(answerOneRadio);
  form.appendChild(answerOne);

  const answerTwo = document.createElement('div');
  answerTwo.setAttribute('class', 'answer');
  const answerTwoLabel = document.createElement('label');
  answerTwoLabel.textContent = '#2';
  answerTwoLabel.setAttribute('for', 'answer_2');
  answerTwo.appendChild(answerTwoLabel);
  const answerTwoInput = document.createElement('input');
  answerTwoInput.setAttribute('type', 'text');
  answerTwoInput.setAttribute('name', 'answer_2');
  answerTwoInput.setAttribute('placeholder', 'Type your answer here');
  answerTwo.appendChild(answerTwoInput);
  const answerTwoRadio = document.createElement('input');
  answerTwoRadio.setAttribute('type', 'radio');
  answerTwoRadio.setAttribute('name', 'answer_2');
  answerTwo.appendChild(answerTwoRadio);
  form.appendChild(answerTwo);

  const answerThree = document.createElement('div');
  answerThree.setAttribute('class', 'answer');
  const answerThreeLabel = document.createElement('label');
  answerThreeLabel.textContent = '#3';
  answerThreeLabel.setAttribute('for', 'answer_3');
  answerThree.appendChild(answerThreeLabel);
  const answerThreeInput = document.createElement('input');
  answerThreeInput.setAttribute('type', 'text');
  answerThreeInput.setAttribute('name', 'answer_3');
  answerThreeInput.setAttribute('placeholder', 'Type your answer here');
  answerThree.appendChild(answerThreeInput);
  const answerThreeRadio = document.createElement('input');
  answerThreeRadio.setAttribute('type', 'radio');
  answerThreeRadio.setAttribute('name', 'answer_3');
  answerThree.appendChild(answerThreeRadio);
  form.appendChild(answerThree);

  const answerFour = document.createElement('div');
  answerFour.setAttribute('class', 'answer');
  const answerFourLabel = document.createElement('label');
  answerFourLabel.textContent = '#4';
  answerFourLabel.setAttribute('for', 'answer_4');
  answerFour.appendChild(answerFourLabel);
  const answerFourInput = document.createElement('input');
  answerFourInput.setAttribute('type', 'text');
  answerFourInput.setAttribute('name', 'answer_4');
  answerFourInput.setAttribute('placeholder', 'Type your answer here');
  answerFour.appendChild(answerFourInput);
  const answerFourRadio = document.createElement('input');
  answerFourRadio.setAttribute('type', 'radio');
  answerFourRadio.setAttribute('name', 'answer_4');
  answerFour.appendChild(answerFourRadio);
  form.appendChild(answerFour);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.textContent = 'SUMBMIT';
  submitButton.setAttribute('id', 'submit');
  form.appendChild(submitButton);

  formContainer.appendChild(form);
}

function createAnswer(name, innerText) {
  const answer = document.createElement('div');
  const answerLabel = document.createElement('label');
  answerLabel.textContent = innerText;
  answerLabel.setAttribute('for', name);
  answer.appendChild(answerLabel);
  const answerInput = document.createElement('input');
  answerInput.setAttribute('type', 'text');
  answerInput.setAttribute('name', name);
  answerInput.setAttribute('placeholder', 'Type your answer here');
  answer.appendChild(answerInput);
  const answerRadio = document.createElement('input');
  answerRadio.setAttribute('type', 'radio');
  answerRadio.setAttribute('name', name);
  answer.appendChild(answerRadio);
}
