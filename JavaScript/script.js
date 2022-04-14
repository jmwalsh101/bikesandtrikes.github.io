document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    myModal.show();
  }
});
// contact form

function validateform() {
  var nameVal = document.getElementById("name").value;
  var emailVal = document.getElementById("emailAddress").value;
  var messageVal = document.getElementById("message").value;
  alert(messageVal);
  //if all inputs are empty
  if (nameVal == "" || emailVal == "" || messageVal == "") {
    //Error Code here
    alert("Please enter valid data.");
  }
  if (nameVal.length < 2 || nameVal.length > 22) {
    // Error Code here
    alert("Your Name must be less than 22 but more than 2 Characters.");
    //document.contactForm.name.focus();
    document
      .getElementById("nameError")
      .insertAdjacentHTML(
        "afterend",
        "<h7>Error:Your name must be less than 22 but more than 2 Characters.</h7>"
      );
  }
  if (emailVal.length < 11 || emailVal.length > 30 || !address.contains("@")) {
    // Error Code here
    alert("Please re-enter your email.");
    document
      .getElementById("emailError")
      .insertAdjacentHTML(
        "afterend",
        "<h7>Error:Please reenter your email.</h7>"
      );
  }
  if (messageVal.length < 10 || messageVal.length > 150) {
    // Error Code here
    console.log();
    alert("please enter valid message");
    document
      .getElementById("msgError")
      .insertAdjacentHTML(
        "afterend",
        "<h7>Error:Please enter valid message.</h7>"
      );
  }
}

// need to add to HTML
// add to button: onclick=validateform()
//html5 validation
