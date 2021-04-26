`use strict`;

const url = '/api/questions';
const container = document.querySelector('#delete-container');

const fetchQuestions = () => {
  fetch(url)
    .then((response) => response.json())
    .then((myResponse) => {
      getQuestions(myResponse);
    });
};

fetchQuestions();
function getQuestions(questions) {
  questions.forEach((question) => {
    const questionDiv = document.createElement('div');
    questionDiv.setAttribute('class', 'question-div');
    const questionToDelete = document.createElement('h1');
    questionToDelete.setAttribute('id', `${question.ID}`);
    questionToDelete.setAttribute('class', 'questionToDelete');
    questionToDelete.textContent = question.question;
    questionDiv.appendChild(questionToDelete);
    const deleteButton = document.createElement(`p`);
    deleteButton.textContent = `delete`;
    questionDiv.appendChild(deleteButton);
    container.appendChild(questionDiv);
  });
}
