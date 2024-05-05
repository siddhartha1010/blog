import { createArticle, deleteArticle, editArticle } from "./function.js";

// const viewBtn = document.querySelector("#view");
// const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector(".delete");
const saveBtn = document.querySelector(".save");
// const EditBtn = document.querySelector(".edit");
const editarticle = document.querySelector(".editarticle");

// if (viewBtn) {
//   viewBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("view");
//   });
// }

// if (editBtn) {
//   editBtn.addEventListener("click", (e) => {
//     e.preventDefault();
//     console.log("edit");
//   });
// }
if (deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("delete");
    deleteArticle();
  });
}

if (saveBtn) {
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = document.querySelector(".name").value;
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const markdown = document.querySelector(".markdown").value;
    createArticle(name, title, description, markdown);

    console.log("save");
  });
}

if (editarticle) {
  editarticle.addEventListener("click", (e) => {
    console.log("clicked");
    e.preventDefault();
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const markdown = document.querySelector(".markdown").value;
    editArticle(title, description, markdown);
    console.log(title, description, markdown);

    // console.log("save");
  });
}
