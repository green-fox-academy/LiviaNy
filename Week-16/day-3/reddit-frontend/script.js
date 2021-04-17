`use strict`;

const main = document.querySelector(`#main`);

const httpRequest = new XMLHttpRequest();
httpRequest.open(`GET`, `http://localhost:3000/posts`);
httpRequest.send();
httpRequest.onload = () => {
  const result = JSON.parse(httpRequest.response);
  result.posts.forEach((post) => {
    createPost(post.vote, post.title, post.id, post.url);
  });

  const deleteButton = document.getElementsByName(`remove`);
  deleteButton.forEach((element, index) => {
    element.addEventListener(`click`, () => {
      const httpRequest = new XMLHttpRequest();
      httpRequest.open(`DELETE`, `http://localhost:3000/posts/${result.posts[index].id}`);
      httpRequest.send();
      httpRequest.onload = () => {
        const response = JSON.parse(httpRequest.response);
        console.log(response);
        console.log(result.posts[index].id);
        const postToRemove = document.querySelector(`#the${result.posts[index].id}`);
        console.log(postToRemove);
        postToRemove.remove();
      };
    });
  });
};

function createPost(votes, postText, id, postLinkText) {
  const thePost = document.createElement(`div`);
  thePost.setAttribute(`id`, id);
  thePost.setAttribute(`class`, `posts`);
  const voteBar = document.createElement(`div`);
  voteBar.setAttribute(`class`, `vote-bar`);
  const upvote = document.createElement(`img`);
  upvote.setAttribute(`class`, `upvote`);
  upvote.setAttribute(`src`, `./assets/upvote.png`);
  voteBar.appendChild(upvote);
  const voteCount = document.createElement(`p`);
  voteCount.textContent = votes;
  upvote.addEventListener(
    `click`,
    () => {
      upvoting(id, voteCount);
    },
    {
      once: true,
    }
  );
  voteCount.setAttribute(`class`, `votes`);
  voteBar.appendChild(voteCount);
  const downvote = document.createElement(`img`);
  downvote.addEventListener(
    `click`,
    () => {
      downvoting(id, voteCount);
    },
    {
      once: true,
    }
  );
  downvote.setAttribute(`class`, `downvote`);
  downvote.setAttribute(`src`, `./assets/downvote.png`);
  voteBar.appendChild(downvote);
  const post = document.createElement(`div`);
  post.setAttribute(`class`, `post`);
  const postContent = document.createElement(`h2`);
  postContent.textContent = postText;
  post.appendChild(postContent);

  const postLink = document.createElement(`div`);
  postLink.setAttribute(`class`, `post`);
  postLink.setAttribute(`id`, `postLink`);
  const postLinkContent = document.createElement(`a`);
  postLinkContent.setAttribute(`href`, postLinkText);
  postLinkContent.textContent = postLinkText;
  postLink.appendChild(postLinkContent);
  post.appendChild(postLink);

  const modify = document.createElement(`button`);
  modify.setAttribute(`class`, `post-button`);
  // modify.setAttribute(`id`, `modify`);
  modify.textContent = `Modify`;
  post.appendChild(modify);
  const remove = document.createElement(`button`);
  remove.setAttribute(`class`, `post-button`);
  remove.setAttribute(`id`, `the${id}`);
  remove.textContent = `Remove`;
  post.appendChild(remove);
  post.appendChild(voteBar);
  thePost.appendChild(voteBar);
  thePost.appendChild(post);
  main.appendChild(thePost);
}

function upvoting(id, voteCount) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(`PUT`, `http://localhost:3000/posts/${id}/upvote`);
  httpRequest.send();
  httpRequest.onload = () => {
    const result = JSON.parse(httpRequest.response);
    voteCount.textContent = result.row[0].vote;
  };
}

function downvoting(id, voteCount) {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(`PUT`, `http://localhost:3000/posts/${id}/downvote`);
  httpRequest.send();
  httpRequest.onload = () => {
    const result = JSON.parse(httpRequest.response);
    voteCount.textContent = result.row[0].vote;
  };
}
