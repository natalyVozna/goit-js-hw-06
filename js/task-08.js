const formEl = document.querySelector("form.login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const userData = {};

  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    userData.email = email.value;
    userData.password = password.value;

    console.log(userData);
    event.currentTarget.reset();
  }
}
