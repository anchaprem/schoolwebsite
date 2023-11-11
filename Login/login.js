const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


let login = async () => {
  var email = document.getElementById("email");
  var loginResult = document.getElementById("login-result");
  var password2 = document.getElementById("id_password");

  loginResult.innerHTML = "Logging Please Wait.....";

  if (email.value == "anchapremchand@gmail.com" && password2.value == "blackman") {
    loginResult.innerHTML = "Admin Login Successful.....";
    window.location.assign("../Admin/adminportal.html");
  } else {
    try {
      await firebase.auth().signInWithEmailAndPassword(email.value, password2.value);

      // Signed in successfully
      const user = firebase.auth().currentUser;
      localStorage.setItem("userId", user.uid);
      window.location.assign("../student Data/studentPortal.html");
      loginResult.innerHTML = "User logged in successfully";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      loginResult.innerHTML = errorMessage;
      loginResult.innerHTML = errorCode;
    }
  }
};
