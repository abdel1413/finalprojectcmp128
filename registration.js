function getOfferValue() {
  let total = document.getElementById("totalDiv");
  console.log(total);

  let coupon = document.getElementById("coupon-input").value;
  // console.log("THis is coupon "+ coupon);

  //  get input field cleared after execution
  function clearInputField() {
    let inputField = document.getElementById("coupon-input");
    console.log("this input value" + inputField.value);
    inputField.value = "";
  }

  //create variables where you save the new created elements
  let author, participant, student;

  //let inputField = document.getElementById("coupon-input");

  if (
    document.getElementById("level_1").checked == true &&
    coupon === "Lehman College"
  ) {
    //create each element
    author = document.createElement("p");
    author.innerHTML = "Amount Due: $" + 400 / 2 + ".";
    total.appendChild(author);
    //inputField.value = "";
    clearInputField();
  } else if (document.getElementById("level_1").checked == true) {
    author = document.createElement("p");
    author.innerHTML = " Amount Due:  $" + 400 + ".";
    total.appendChild(author);

    //inputField.value = "";
    clearInputField();
  }

  if (
    document.getElementById("level_2").checked == true &&
    coupon === "Lehman College"
  ) {
    participant = document.createElement("p");
    participant.innerHTML = "Amount Due:  $" + 300 / 2 + ".";
    total.appendChild(participant);
    clearInputField();
  } else if (document.getElementById("level_2").checked == true) {
    participant = document.createElement("p");
    participant.innerHTML = "Amount Due: $" + 300 + ".";
    total.appendChild(participant);
    clearInputField();
  }

  if (
    document.getElementById("level_3").checked == true &&
    coupon === "Lehman College"
  ) {
    student = document.createElement("p");
    student.innerHTML = "Amount Due: $" + 100 / 2 + ".";
    total.appendChild(student);
    clearInputField();
  } else if (document.getElementById("level_3").checked == true) {
    student = document.createElement("p");
    student.innerHTML = "Amount Due: $" + 100 + ".";
    total.appendChild(student);
    clearInputField();
  } else {
    document.getElementById("level_3").checked == false;
  }
}

//get coupon button and add event listener to it
let couponBtn = document.getElementById("coupon-button");
couponBtn.addEventListener("click", getOfferValue);

function doesContainNumbers(num) {
  if (
    num.indexOf("9") >= 0 ||
    num.indexOf("8") >= 0 ||
    num.indexOf("7") >= 0 ||
    num.indexOf("6") >= 0 ||
    num.indexOf("5") >= 0 ||
    num.indexOf("4") >= 0 ||
    num.indexOf("3") >= 0 ||
    num.indexOf("2") >= 0 ||
    num.indexOf("1") >= 0 ||
    num.indexOf("0") >= 0
  ) {
    return true;
  } else {
    return false;
  }
}

function Validation() {
  let firstname = document.getElementById("firstname").value;

  let lastname = document.getElementById("lastname").value;

  let emailElement = document.getElementById("emailaddress").value;

  let country = document.getElementById("country").value;

  let phone = document.getElementById("phone").value;

  let organization = document.getElementById("organization").value;

  let passwd = document.getElementById("password").value;

  let confirmPswd = document.getElementById("confirm").value;
  console.log(passwd);
  console.log(confirmPswd);

  //get the errors div
  let errorList = document.getElementById("errors");

  firstname = firstname.trim();
  lastname = lastname.trim();

  //create a paragraph element  that will display on screen
  //when the user did not enter first name
  let firstNameElement;
  if (firstname.length <= 0) {
    // console.log("You must enter your first name ");
    hideShowErrors();

    //    firstNameElement = document.createElement("li");
    //    firstNameElement.innerHTML = "Your first name  is required"
    //    //apppend the innerHTML to the errors div
    //    errorList.appendChild(firstNameElement);

    showErrorElement("firstNError");
  } else {
    hideErrorElement("firstNError");
  }

  if (lastname.length <= 0) {
    showErrorElement("lastNError");
  } else {
    hideErrorElement("lastNError");
  }

  let filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;

  //test regExp and email enterred
  if (!filter.test(emailElement)) {
    showErrorElement("emailError");
  } else {
    hideErrorElement("emailError");
  }

  if (country === "") {
    showErrorElement("countryError");
  } else {
    hideErrorElement("countryError");
  }

  let checker = /^[2-9]{3}\-([0-9]{3})\-[0-9]{4}/;
  if (!checker.test(phone)) {
    showErrorElement("phoneError");
  } else {
    hideErrorElement("phoneError");
  }

  if (organization <= 0) {
    showErrorElement("organizationError");
  } else {
    hideErrorElement("organizationError");
  }

  let filter1 = /[a-z0-9]/;
  let filter2 = /[A-Z0-9]/;
  if (doesContainNumbers(passwd) === false) {
    showErrorElement("digitError");
  } else {
    hideErrorElement("digitError");
  }

  if (passwd.length < 10) {
    showErrorElement("passwordError");
  } else {
    hideErrorElement("passwordError");
  }

  if (!filter1.test(passwd)) {
    showErrorElement("lowerError");
  } else {
    hideErrorElement("lowerError");
  }

  if (!filter2.test(passwd)) {
    showErrorElement("upperError");
  } else {
    hideErrorElement("upperError");
  }

  if (passwd !== confirmPswd) {
    showErrorElement("ErrorMatching");
    return false;
  } else {
    hideErrorElement("ErrorMatching");
    return true;
  }

  if (doesContainNumbers(lastname) === false) {
    console.log("last name must contain number");
  }
}

// function fctn(par1,par2){

// }

//for function with param
// document.getElementById("register").addEventListener("click",function(){
//     fctn(par1, par2);
// });

document.getElementById("register").addEventListener("click", Validation);

function showErrorElement(nameError) {
  let errorElement = document.getElementById(nameError);
  errorElement.style.display = "block";
}

function hideErrorElement(nameError) {
  let errorElement = document.getElementById(nameError);
  errorElement.style.display = "none";
}

function hideShowErrors() {
  errorList = document.getElementById("errors");
  // console.log(errorList);

  //  errorDiv.style.display = "block";
  if (errorList.style.display === "none") {
    errorList.style.display = "block"; //display
  } else {
    errorList.style.display = "none"; //hide
  }
}

hideShowErrors();
