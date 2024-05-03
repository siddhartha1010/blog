import { createArticle, deleteArticle, editArticle } from "./function.js";

// const viewBtn = document.querySelector("#view");
// const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector(".delete");
const saveBtn = document.querySelector(".save");
const EditBtn = document.querySelector(".edit");

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
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const markdown = document.querySelector(".markdown").value;
    createArticle(title, description, markdown);

    console.log("save");
  });
}

if (EditBtn) {
  EditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const edittitle = document.querySelector(".edittitle").value;
    const editdescription = document.querySelector(".editdescription").value;
    const editmarkdown = document.querySelector(".editmarkdown").value;
    editArticle(edittitle, editdescription, editmarkdown);

    // console.log("save");
  });
}
