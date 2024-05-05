import { showAlert } from "./alert.js";
// import { axios } from "axios";

const createArticle = async (name, title, description, markdown) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:4000/create",
      data: {
        name,
        title,
        description,
        markdown,
      },
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Article created successfully");
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

const editArticle = async (title, description, markdown) => {
  try {
    // Extract slug from the URL
    const urlParts = window.location.pathname.split("/");
    const slug = urlParts[urlParts.length - 1];

    const res = await axios({
      method: "PATCH",
      url: `http://127.0.0.1:4000/${slug}`, // Adjust the URL accordingly
      data: {
        title,
        description,
        markdown,
      },
    });

    console.log(res); // Log the entire response object for debugging

    if (res && res.data && res.data.status === "success") {
      showAlert("success", "Edited successfully");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    } else {
      showAlert("error", "Failed to edit article");
    }
  } catch (err) {
    showAlert("error", err.message); // Display error message if request fails
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
    showAlert("error", "You are not an admin");

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
