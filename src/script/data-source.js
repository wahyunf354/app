import tanamans from "./data.js";

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
  static searchTanaman(keyword) {
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
