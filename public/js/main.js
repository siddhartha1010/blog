// import axios from "axios";
//   const title = document.querySelector("#title").value;
//   const description = document.querySelector("#description").value;
//   const markdown = document.querySelector("#markdown").value;

//   console.log(title, description, markdown);
// document.querySelector(".form-group").addEventListener("submit", (e) => {
//   //   e.preventDefault();
//   console.log("hello");
// });
// const save=async()=>{
//     try{
//         const res=await axios({
//             method:'POST',
//             url:'http://127.0.0.1:4000/create',

//         })

//     }catch(err){

//     }
// }
// const saveBtn = document.querySelector("#save");

// if(saveBtn){
//     saveBtn.addEventListener('click',(e)=>{
//         e.preventDefault();

//     })
// }

const save = async (title, description, markdown) => {
  //   console.log(title, description, markdown);

  //alert(`Email: ${email}, Password: ${password}`);
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
      //   showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
    //console.log(res);
  } catch (err) {
    // showAlert("error", err.response.data.message);
  }
};

document.querySelector("#save").addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log("he");

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;
  const markdown = document.querySelector("#markdown").value;
  save(title, markdown, description);
  //   console.log(title, markdown, description);
});
