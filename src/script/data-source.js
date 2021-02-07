// import tanamans from "./data.js";

import { getUserByUid } from "./helper.js";

const db = firebase.firestore();
async function getAllTanaman() {
  try {
    const data = [];
    const tanamans = await db.collection("tanaman").get();
    tanamans.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

function bruteForce(text, keyword) {
  const arrText = text.split("");
  const arrKeyword = keyword.split("");

  for (let i = 0; i < arrText.length; i++) {
    let temp = [];
    for (let j = 0; j < arrKeyword.length; j++) {
      if (arrText[i + j] != arrKeyword[j]) {
        break;
      } else {
        temp.push(1);
      }
    }

    if (temp.length == arrKeyword.length) {
      return true;
    }
  }
  return false;
}

class DataSource {
  static async searchTanaman(keyword) {
    const tanamans = await getAllTanaman();
    return new Promise((resolve, reject) => {
      let filteredTanamans = [];
      filteredTanamans = tanamans.filter(
        (tanaman) =>
          bruteForce(tanaman.khasiat.toUpperCase(), keyword.toUpperCase()) ||
          bruteForce(tanaman.nama.toUpperCase(), keyword.toUpperCase())
      );
      if (filteredTanamans.length) {
        resolve(filteredTanamans);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
