const form = document.getElementById("emailForm");

function validateEmail() {
  const email = document.getElementById("email").value;
  const paragraph = document.querySelector("#error");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)) {
    paragraph.innerHTML = "Please enter a valid email address.";
    return false;
  }
  paragraph.innerHTML = "";
  return true;
}

form.addEventListener("submit", function (e) {
  if (!validateEmail()) {
    e.preventDefault();
  } else {
    validateEmail();
    alert("Email is valid");
  }
});
