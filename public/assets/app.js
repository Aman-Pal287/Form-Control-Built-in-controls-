const form = document.getElementById("form");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");




form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});


//more email validation idea
const isEmail = (emailVal) =>{
  

}

// define the validate function
const validate = () => {
  const usernameVal = username.value.trim();
  const phoneVal = phone.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  // validate username
  if (usernameVal === "") {
    setErrormsg(username, "username can not blank");
  } else if (usernameVal.length <= 2) {
    setErrormsg(username, "username must be at least 2 characters");
  } else {
    setSuccessmsg(username);
  }

  //validate email
  if (emailVal === "") {
    setErrormsg(email, "email can not blank");
  } else if (!isEmail(emailVal)) {
    setErrormsg(emailVal, "Not a valid email");
  } else {
    setSuccessmsg(email);
  }
};