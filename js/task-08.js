const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  if (email === "" || password === "") {
    return alert("Всі поля повинні бути заповнені");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  form.reset();
}
