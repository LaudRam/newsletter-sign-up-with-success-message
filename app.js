const subscribeButton = document.querySelector("#subscribe-btn");

function handleSubscribe() {
  const email = document.querySelector("#email");
  const errorMessage = document.querySelector(".error-msg");
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const subscriptionPage = document.querySelector(".sign-up-container");
  const successPage = document.querySelector(".success-container");
  const userEmailAddress = document.querySelector("#user-email");

  if (email.value.match(mailformat)) {
    email.classList.remove("error-input");
    errorMessage.style.display = "none";
    subscriptionPage.classList.add("hidden");
    successPage.classList.remove("hidden");
    userEmailAddress.innerHTML = email.value;
  } else {
    email.classList.add("error-input");
    errorMessage.style.display = "unset";
    subscriptionPage.classList.remove("hidden");
    successPage.classList.add("hidden");
  }

  const dismissButton = document.querySelector("#dismiss-btn");

  function handleDismiss() {
    successPage.classList.add("hidden");
    subscriptionPage.classList.remove("hidden");
    email.value = "";
  }
  dismissButton.addEventListener("click", handleDismiss);
}
subscribeButton.addEventListener("click", handleSubscribe);
