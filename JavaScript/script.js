// Gallery Lightbox
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const lightbox = new bootstrap.Modal(
      document.getElementById("gallery-modal")
    );
    lightbox.show();
  }
});

// Contact Form Array
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
  //if all inputs are empty
  if (nameVal == "") {
    //Error Code here
    document
      .getElementById("name")
      .insertAdjacentHTML(
        "afterend",
        "<p><span style='color: #fa4750; text-shadow: 0px 0px 2px #000000;'><strong>Error: Your name must be at least 2 characters long.</strong></span></p>"
      );
  } else if (phoneVal.length < 7 || phoneVal.length > 11) {
    // Error Code here
    document
      .getElementById("phoneError")
      .insertAdjacentHTML(
        "afterend",
        "<p><span style='color: #fa4750; text-shadow: 0px 0px 2px #000000;'><strong>Error: Your mobile must be at least 10 digits long.</strong></span></p>"
      );
  } else if (
    emailVal.length < 11 ||
    emailVal.length > 30 ||
    !emailVal.includes("@")
  ) {
    // Error Code here
    document
      .getElementById("emailError")
      .insertAdjacentHTML(
        "afterend",
        "<p><span style='color: #fa4750; text-shadow: 0px 0px 2px #000000;'><strong>Error: Please re-enter your email.</strong></span></p>"
      );
  } else if (messageVal.length < 10 || messageVal.length > 150) {
    // Error Code here
    document
      .getElementById("msgError")
      .insertAdjacentHTML(
        "afterend",
        "<p><span style='color: #fa4750; text-shadow: 0px 0px 2px #000000;'><strong>Error: Please enter valid message.</strong></span></p>"
      );
  } else {
    document.getElementById("OutputName").innerHTML = nameVal;
    document.getElementById("OutputeMail").innerHTML = emailVal;
    document.getElementById("displayForm").style.display = "none";
    document.getElementById("second").style.display = "block";
  }
}

// About Us video pause/play
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
