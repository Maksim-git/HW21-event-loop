const title = document.querySelector(".main-wrapper__title");
const description = document.querySelector(".main-wrapper__description");
const comments = document.querySelector(".list-comments");

async function getData(url) {
  let response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    console.log("Error HTTP", response.status);
  }
}

class DisplayInfoPost {
  constructor(title, description, comments) {
    this.list = title;
    this.description = description;
    this.comments = comments;
  }

  displayInfoPost(id) {
    getData(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data) => {
      this.renderDisplayInfo(data);
    });
  }

  displayComents(id) {
    getData(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
      (data) => {
        this.renderComents(data);
      }
    );
  }

  renderComents(render = []) {
    let list = "";
    for (let el of render) {
      if (!el) {
        return;
      }
      list += `<li>${el.body}</li>`;
    }
    this.comments.innerHTML = list;
  }

  renderDisplayInfo(render) {
    let title = `<p class= "text-center"><b>Title</b>: ${render.title}</p>`;
    let description = `<p class= "text-center"><b>Description</b>: ${render.body}</p>`;
    this.list.innerHTML = title;
    this.description.innerHTML = description;
  }
}

let infoPost = new DisplayInfoPost(title, description, comments);

infoPost.displayInfoPost(1);
infoPost.displayComents(1);

console.log("------SetTimeout -----");

console.log(1);

setTimeout(function () {
  console.log(2);
}, 100);

setTimeout(function () {
  console.log(3);
}, 0);

new Promise(function (resolve) {
  setTimeout(() => resolve(), 20);
}).then(() => {
  console.log(4);
});

console.log(5);
