import { getCookie, getUserByUid, setCookie } from "./helper.js";
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
// storage
const storage = firebase.storage();

// Sign up
const btnSignUp = document.getElementById("btn-signup");
const nameSignup = document.getElementById("input-name-signup");
const emailSignup = document.getElementById("input-email-signup");
const passwordSignup = document.getElementById("input-password-signup");
// Login
const btnLogin = document.getElementById("btn-login");
const emailLogin = document.getElementById("input-email-login");
const passwordLogin = document.getElementById("input-password-login");
// loading
const btnLoadingSign = document.getElementById("btn-loading-signup");
const btnLoadingLogin = document.getElementById("btn-loading-login");
const btnLoadingSave = document.getElementById("btn-loading-save");
// home
const btnLoginHome = document.getElementById("link-login-home");
const btnSignUpHome = document.getElementById("link-signup-home");
const helloUser = document.getElementById("link-user-home");
// button logout
const btnLogout = document.getElementById("btn-logout");
// tambah data
const nameTanaman = document.getElementById("nama-tanaman");
const nameLatin = document.getElementById("nama-latin");
const khasiat = document.getElementById("khasiat");
const imgBtn = document.getElementById("img-url");
const ramuan = document.getElementById("ramuan");
const btnSaveTanaman = document.getElementById("btn-save");

// check jika cookies ada
const uid = getCookie("uid");
(async function () {
  if (uid) {
    const userLogin = await getUserByUid(db, uid);
    changeHelloUserLogin(userLogin.name);
  }
})();

const upload = (e) => {
  const file = e.files[0];
  // generate new file name
  const newName = Math.random().toString().substr(2, 12);
  // get extention file
  const nameFileArray = file.name.split(".");
  const extentionFile = nameFileArray[nameFileArray.length - 1];
  // upload to store
  const storageRef = storage.ref("tanaman/" + newName + "." + extentionFile);
  const uploadTask = storageRef.put(file);
  // to get url
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        reject(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          resolve(downloadURL);
        });
      }
    );
  });
};

btnSaveTanaman.addEventListener("click", () => eventSaveTanaman());
btnSignUp.addEventListener("click", (e) => eventSignup(e));
btnLogin.addEventListener("click", (e) => eventLogin(e));
btnLogout.addEventListener("click", (e) => {
  e.preventDefault();
  setCookie("uid", "", 1);
  location.reload(true);
});

// save tanaman
const eventSaveTanaman = async () => {
  btnSaveTanaman.classList.add("d-none");
  btnLoadingSave.classList.remove("d-none");
  try {
    const uid = getCookie("uid");
    const user = await getUserByUid(db, uid);
    const img = await upload(imgBtn);
    const docRef = await db.collection("tanaman").add({
      imgUrl: img,
      khasiat: khasiat.value,
      nama: nameTanaman.value,
      namaLatin: nameLatin.value,
      ramuan: ramuan.value.split("\n"),
      uid,
      author: user.name,
    });
    console.log("Document written with ID: ", docRef.id);
    btnSaveTanaman.classList.remove("d-none");
    btnLoadingSave.classList.add("d-none");
    alert("Data berhasil ditambahkan");
    khasiat.value = "";
    nameTanaman.value = "";
    nameLatin.value = "";
    ramuan.value = "";
    imgBtn.value = "";
  } catch (err) {
    console.log("Error adding document: ", err);
    alert("Error: ", err);
    btnSaveTanaman.classList.remove("d-none");
    btnLoadingSave.classList.add("d-none");
  }
};

// Signup function
const eventSignup = (e) => {
  e.preventDefault();
  console.log("hit ni");
  btnLoadingSign.classList.remove("d-none");
  btnSignUp.classList.add("d-none");
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
    .then(() => {
      btnLoadingSign.classList.add("d-none");
      btnSignUp.classList.remove("d-none");
      changeHelloUserLogin(nameSignup.value);
      alert("Berhasil membuat akun");
      nameSignup.value = "";
      emailSignup.value = "";
      passwordSignup.value = "";
      document.querySelector(".close").click();
    })
    .catch((error) => errorSignup(error));
};

const errorSignup = (error) => {
  const errorMessage = error.message;
  console.log(error);
  changeToSignupBtn();
  alert("Error: " + errorMessage);
};

// login function
const eventLogin = (e) => {
  e.preventDefault();
  console.log("hit ni login");

  btnLoadingLogin.classList.remove("d-none");
  btnLogin.classList.add("d-none");

  auth
    .signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
    .then((result) => successLogin(result))
    .catch((error) => errorLogin(error));
};

const successLogin = async (result) => {
  btnLoadingLogin.classList.add("d-none");
  btnLogin.classList.remove("d-none");
  console.log("proses loading...");
  console.log(result);
  alert("Berhasil Login");

  const dataUser = await getUserByUid(db, result.user.uid);

  changeHelloUserLogin(dataUser.name);
  setCookie("uid", result.user.uid, 1);

  document.querySelector(".close.login-close").click();
};

const errorLogin = (error) => {
  var errorMessage = error.message;
  console.log(error);
  btnLoadingLogin.classList.add("d-none");
  btnLogin.classList.remove("d-none");
  alert("Error: " + errorMessage);
};

function changeHelloUserLogin(name) {
  const nameEl = helloUser.children[0];
  console.log(nameEl);
  nameEl.innerHTML = "Hi, " + name;
  btnLoginHome.classList.toggle("d-none");
  btnSignUpHome.classList.toggle("d-none");
  helloUser.classList.toggle("d-none");
}
