const firebaseConfig = {
  apiKey: "AIzaSyBx5kfkOIj8EE1tbWT3UrFj8v469WJp5qQ",
  authDomain: "cari-herbal.firebaseapp.com",
  projectId: "cari-herbal",
  storageBucket: "cari-herbal.appspot.com",
  messagingSenderId: "928163763213",
  appId: "1:928163763213:web:a9e973f0e46d26356af144",
  measurementId: "G-SKV1SWCBHN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// authentication
const auth = firebase.auth();
// Sign up
const btnSignUp = document.getElementById("btn-signup");
const nameSignup = document.getElementById("input-name-signup");
const emailSignup = document.getElementById("input-email-signup");
const passwordSignup = document.getElementById("input-password-signup");

btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameSignup.value == "") {
    alert("nama tidak boleh kosong");
  } else if (emailSignup.value == "") {
    alert("email tidak boleh kosong");
  } else if (passwordSignup.value == "") {
    alert("password tidak boleh kosong");
  } else {
    auth
      .createUserWithEmailAndPassword(emailSignup.value, passwordSignup.value)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
  }
});

// Login
const btnLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("input-email-login");
const passwordLogin = document.getElementById("input-password-login");

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  if (emailLogin.value == "") {
    alert("email kosong");
  } else if (passwordLogin.value == "") {
    alert("password kosong");
  } else {
    auth
      .signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Error: " + errorMessage);
      });
  }
});
