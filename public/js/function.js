import { showAlert } from "./alert.js";
// import { axios } from "axios";

const createArticle = async (title, description, markdown) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:4000/create",
      data: {
        title,
        description,
        markdown,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
    //console.log(res);
  } catch (err) {
    showAlert("error", err.response.data.message);
    // showAlert("error", "an article must have a title");
  }
};

const editArticle = async (edittitle, editdescription, editmarkdown) => {
  try {
    const res = await axios({
      method: "PATCH",
      url: "http://127.0.0.1:4000/:slug",
      data: {
        edittitle,
        editdescription,
        editmarkdown,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
    //console.log(res);
  } catch (err) {
    showAlert("error", err.response.data.message);
    // showAlert("error", "an article must have a title");
  }
};

// const deleteArticle = async () => {
//   try {
//     const res = await axios({
//       method: "DELETE",
//       url: "http://127.0.0.1:4000/article/:slug",
//       data: {},
//     });
//     console.log(res);
//     if (res.data.status === "success") {
//       showAlert("success", "Deleted Succesfully");
//       window.setTimeout(() => {
//         location.assign("/");
//       }, 1000);
//     }
//     //console.log(res);
//   } catch (err) {
//     showAlert("error", err.response.data.message);
//     // showAlert("error", "an article must have a title");
//   }
// };
const deleteArticle = async () => {
  try {
    // const res = await axios({
    //   method: "DELETE",
    //   url: "http://127.0.0.1:4000/article/:slug",
    //   data: {},
    // });
    // console.log(res);
    // if (res.data.status === "success") {
    // showAlert("success", "Deleted Succesfully");
    showAlert("error", "ONLy by admin");

    // window.setTimeout(() => {
    //   location.assign("/");
    // }, 1000);
    //}
    //console.log(res);
  } catch (err) {
    // showAlert("error", err.response.data.message);
    showAlert("success", "Deleted Succesfully");

    // showAlert("error", "an article must have a title");
  }
};

// const deleteArticle = () => {
//   showAlert("error", "Can only be done by admin");
// };
export { createArticle, deleteArticle, editArticle };
