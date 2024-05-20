const formElem = document.querySelector(".login-form");

formElem.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(formElem);
  const data = {
    email: formData.get("email").trim(),
    password: formData.get("password").trim(),
  };
  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  }

  console.log(data);
  formElem.reset();
});
