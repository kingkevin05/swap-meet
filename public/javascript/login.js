async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/your-stuff/");
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const firstName = document.querySelector("#firstname-signup").value.trim();
  const lastName = document.querySelector("#lastname-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const address = document.querySelector("#address-signup").value.trim();
  const phoneNumber = document.querySelector("#phone-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (
    username &&
    firstName &&
    lastName &&
    email &&
    address &&
    phoneNumber &&
    password
  ) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        firstName,
        lastName,
        email,
        address,
        phoneNumber,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/your-stuff/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
