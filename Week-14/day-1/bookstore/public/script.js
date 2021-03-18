`use strict`;

const apiURL = `http://localhost:3000`;
function getAllTitle() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.onload = () => {
    const titles = httpRequest.response;
  };
  httpRequest.open(`GET`, `${apiURL}/titles`, true);
  httpRequest.send();
}
