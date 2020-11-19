import tanamans from "./data.js";

function bruteForce(array, keyword) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].nama.toUpperCase() === keyword.toUpperCase()) {
      result.push(array[i]);
    }
  }
  return result;
}

class DataSource {
  static searchTanaman(keyword) {
    return new Promise((resolve, reject) => {
      const filteredTanamans = tanamans.filter(
        (tanaman) =>
          tanaman.nama.toUpperCase().includes(keyword.toUpperCase()) ||
          tanaman.khasiat.toUpperCase().includes(keyword.toUpperCase())
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
