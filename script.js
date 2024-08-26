const submitBtn = document.querySelector(".form-container .btn");
const inputs = document.querySelectorAll(".form-group input");
const emailInput = document.getElementById("email");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    const errorIcon = input.parentElement.querySelector(".error-icon");
    const toastMsg = input.parentElement.querySelector(".toast-msg");
    const inputValue = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      inputValue === "" ||
      (input.id === "email" && !emailPattern.test(inputValue))
    ) {
      errorIcon.classList.add("active");
      errorIcon.classList.remove("hidden");
      toastMsg.classList.add("active");
      toastMsg.classList.remove("hidden");
      input.style.outline = "2px solid var(--primary-red)";
      input.style.marginBottom = "40px";
    } else {
      errorIcon.classList.remove("active");
      errorIcon.classList.add("hidden");
      toastMsg.classList.remove("active");
      toastMsg.classList.add("hidden");
      input.style.outline = "none";
      input.style.marginBottom = "20px";
    }
  });
});
