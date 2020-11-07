import tanamans from"./data.js";

class DataSource {
    static searchTanaman(keyword) {
        return new Promise((resolve,reject)=>{
            const filteredTanamans = tanamans.filter(tanaman => tanaman.nama.toUpperCase().includes(keyword.toUpperCase()));
            if (filteredTanamans.length) {
                resolve(filteredTanamans);
            } else {
                reject(`${keyword} is not found"`);
            }
        });
    }
}

export default DataSource;