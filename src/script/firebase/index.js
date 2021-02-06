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
// firestore
const db = firebase.firestore();

// Sign up
const btnSignUp = document.getElementById("btn-signup");
const formSignUp = document.getElementById("form-signup");
const nameSignup = document.getElementById("input-name-signup");
const emailSignup = document.getElementById("input-email-signup");
const passwordSignup = document.getElementById("input-password-signup");
console.log(btnSignUp);
btnSignUp.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hit ni");
  btnSignUp.classList.remove("btn-outline-success");
  btnSignUp.classList.add("btn-secondary");
  btnSignUp.innerText = "Loading";
  auth
    .createUserWithEmailAndPassword(emailSignup.value, passwordSignup.value)
    .then((result) => {
      db.collection("users").add({
        name: nameSignup.value,
        email: result.user.email,
        uid: result.user.uid,
      });
      console.log(result);
    })
    .then((docRef) => {
      console.log(docRef);
      alert("Berhasil membuat akun");
      btnSignUp.classList.add("btn-outline-success");
      btnSignUp.classList.remove("btn-secondary");
      btnSignUp.innerText = "Singup";
      nameSignup.value = "";
      emailSignup.value = "";
      passwordSignup.value = "";
      document.querySelector(".close").click();
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      alert("Error: " + errorMessage);
    });
});

// Login
const btnLogin = document.getElementById("btn-login");
const formLogin = document.getElementById("form-login");
const emailLogin = document.getElementById("input-email-login");
const passwordLogin = document.getElementById("input-password-login");

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("hit ni login");
  btnLogin.classList.remove("btn-outline-success");
  btnLogin.classList.add("btn-secondary");
  btnLogin.innerText = "Loading";
  auth
    .signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
    .then((result) => {
      btnLogin.classList.add("btn-outline-success");
      btnLogin.classList.remove("btn-secondary");
      btnLogin.innerText = "Login";
      console.log("proses loading...");
      console.log(result);
      alert("Berhasil Login");
      document.querySelectorAll(".close")[1].click();
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      alert("Error: " + errorMessage);
    });
});
