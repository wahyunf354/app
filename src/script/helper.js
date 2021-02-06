function getUserByUid(db, uid) {
  return new Promise((resolve, reject) => {
    db.collection("users")
      .where("uid", "==", uid)
      .get()
      .then((result) => {
        result.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          resolve(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        reject(error);
      });
  });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(pname) {
  const name = pname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie);
  const ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export { getCookie, setCookie, getUserByUid };
