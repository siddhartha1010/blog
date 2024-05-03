const viewBtn = document.querySelector("#view");
const editBtn = document.querySelector("#edit");
const deleteBtn = document.querySelector("#delete");
const saveBtn = document.querySelector("#save");

if (viewBtn) {
  viewBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("view");
  });
}

if (editBtn) {
  editBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("edit");
  });
}
if (deleteBtn) {
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("delete");
  });
}

if (saveBtn) {
  saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("save");
  });
}
