const hideAlert = () => {
  const el = document.querySelector(".alert");
  if (el) el.parentElement.removeChild(el);
};

const showAlert = (type, msg) => {
  hideAlert();
  const markup = `<style>
                    .alert {
                      position: fixed;
                      top: 0;
                      left: 50%;
                      -webkit-transform: translateX(-50%);
                      transform: translateX(-50%);
                      z-index: 9999;
                      color: #fff;
                      font-size: 1rem;
                      font-weight: 200;
                      text-align: center;
                      border-bottom-left-radius: 0.5rem;
                      border-bottom-right-radius: 0.5rem;
                      padding: 0.6rem 1.5rem;
                      -webkit-box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
                      box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.25);
                    }
                    .alert--success {
                      background-color: #20bf6b;
                    }
                    .alert--error {
                      background-color: #eb4d4b;
                    }
                  </style>
                  <div class="alert alert--${type}">${msg}</div>`;
  document.querySelector("body").insertAdjacentHTML("afterbegin", markup);
  window.setTimeout(hideAlert, 5000);
};

export { showAlert };
