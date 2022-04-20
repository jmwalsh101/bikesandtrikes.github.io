// gallery lightbox
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

// contact form 2

function validateform() {
  var nameVal = document.getElementById("name").value;
  var phoneVal = document.getElementById("phone").value;
  var emailVal = document.getElementById("emailAddress").value;
  var messageVal = document.getElementById("message").value;
  //contact array
  var retainVals = [nameVal, phoneVal, emailVal, messageVal];
  console.log(retainVals);
  //local storage of contact array
  localStorage.setItem("contactdata", retainVals);

  //rev sound effect onclick
  document.getElementById("rev").play();
  //alert(messageVal);
  //if all inputs are empty
  if (nameVal == "") {
    //Error Code here
    //alert("Please enter your name.");
    document
      .getElementById("name")
      .insertAdjacentHTML(
        "afterend",
        "<h3>Error: Your name must be at least 2 characters long.</h3>"
      );
  } else if (phoneVal.length < 7 || phoneVal.length > 11) {
    // Error Code here
    // alert("Please enter a valid mobile number.");
    document
      .getElementById("phoneError")
      .insertAdjacentHTML(
        "afterend",
        "<h3>Error: Your mobile must be at least 10 digits long.</h3>"
      );
  } else if (
    emailVal.length < 11 ||
    emailVal.length > 30 ||
    !emailVal.includes("@")
  ) {
    // Error Code here
    // alert("Please re-enter your email.");
    document
      .getElementById("emailError")
      .insertAdjacentHTML(
        "afterend",
        "<h3>Error: Please re-enter your email.</h3>"
      );
  } else if (messageVal.length < 10 || messageVal.length > 150) {
    // Error Code here
    // console.log();
    // alert("please enter valid message");
    document
      .getElementById("msgError")
      .insertAdjacentHTML(
        "afterend",
        "<h3>Error: Please enter valid message.</h3>"
      );
  } else {
    document.getElementById("OutputName").innerHTML = nameVal;
    document.getElementById("OutputeMail").innerHTML = emailVal;
    document.getElementById("displayForm").style.display = "none";
    document.getElementById("second").style.display = "block";
  }
}

// contact form
/* function validateform() {
  var nameVal = document.getElementById("name").value;
  var phoneVal= document.getElementById("phone").value;
  var emailVal = document.getElementById("emailAddress").value;
  var messageVal = document.getElementById("message").value;
  //contact array
  var retainVals=[nameVal, phoneVal, emailVal, messageVal];
  console.log(retainVals);
  //local storage of contact array
  localStorage.setItem("contactdata", retainVals);

  //rev sound effect onclick
  document.getElementById("rev").play();
  alert(messageVal);
  //if all inputs are empty
  if (nameVal == "" || phoneVal ==""|| emailVal == "" || messageVal == "") {
  //Error Code here
  alert("Please enter valid data.");
  }
  //phone validation
  if (phoneVal.length < 7 || phoneVal.length > 11) {
    // Error Code here
    alert("Please enter a valid mobile number.");
    //document.contactForm.name.focus();
    document.getElementById("phoneError").insertAdjacentHTML("afterend","<h7>Error:Your mobile must be at least 10digits long.</h7>");
  }
  //email validation
  if (emailVal.length < 11 || emailVal.length > 30 || !emailVal.includes("@")) {
    // Error Code here
    alert("Please re-enter your email.");
    document.getElementById("emailError").insertAdjacentHTML("afterend","<h7>Error:Please reenter your email.</h7>");
  }
  //message validation
  if (messageVal.length < 10 || messageVal.length > 150) {
    // Error Code here
    console.log();
    alert("please enter valid message");
    document.getElementById("msgError").insertAdjacentHTML("afterend","<h7>Error:Please enter valid message.</h7>");
  }
 
    alert (nameVal + "thank you we will be in contact shortly via"+  emailVal);
  }
  
} */

// video pause/play
var v1Playing = true; //video 1
var v2Playing = true; //video 2

function pauseVideo1() {
  if (v1Playing == true) {
    document.getElementById("pause").pause();
    return (v1Playing = false);
  } else {
    document.getElementById("pause").play();
    return (v1Playing = true);
  }
}

function pauseVideo2() {
  if (v2Playing == true) {
    document.getElementById("third-p-order-2").pause();
    return (v2Playing = false);
  } else {
    document.getElementById("third-p-order-2").play();
    return (v2Playing = true);
  }
}
