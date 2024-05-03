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

const deleteArticle = async (title, description, markdown) => {
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

export { createArticle };
