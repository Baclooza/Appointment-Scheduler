document.getElementById("appointment-form").onsubmit = () => {
  // Reset validation
  let isValid = true;

  // Clear errors
  clearErrors();

  // Validate First Name
  let fname = document.getElementById("fname").value.trim();
  if (fname == "") {
    document.getElementById("err-fname").style.display = "block";
    isValid = false;
  }

  // Validate Last Name
  let lname = document.getElementById("lname").value.trim();
  if (lname == "") {
    document.getElementById("err-lname").style.display = "block";
    isValid = false;
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("err");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
  isValid = true;
}
