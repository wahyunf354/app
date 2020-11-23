import DataSource from "./data-source.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("#searchButtonElement");
  const searchElement = document.querySelector("#searchElement");
  const radioBerdasarkan = document.getElementsByName('berdasarkan');

  let berdasarkan = "tanaman"; 
  radioBerdasarkan.forEach(e => {
    e.addEventListener('click', (e) => {
      berdasarkan = e.target.value;
    })
  })

  const onSearchButtonClicked = () => {
    const listTanaman = document.querySelector(".list-tanaman");

    console.log(berdasarkan)
    DataSource.searchTanaman(searchElement.value, berdasarkan)
      .then((results) => {
        listTanaman.innerHTML = "";

        results.forEach((result) => {
          const itemTanaman = document.createElement("div");
          itemTanaman.setAttribute("class", "item-tanaman");
          itemTanaman.innerHTML = `
                  <img src="/src/img/${
                    result.imgUrl
                  }" class="card-img-top rounded">
                  <div class="card-body">
                    <h2 class="card-title">${result.nama}</h2>
                    <p class="card-subtitle mb-2 text-muted " style="color: #bbb">${
                      result.namaLatin
                    }</p>
                    <p class="card-text">
                      ${result.ramuan.reduce(
                        (acc, cv) => acc + "<br><br>" + cv
                      )}
                    </p>
                  </div>
                
                `;
          listTanaman.appendChild(itemTanaman);
        });
      })
      .catch((message) => {
        listTanaman.innerHTML = message;
      });
  };

  searchElement.addEventListener("keyup", onSearchButtonClicked);
  searchButton.addEventListener("click", onSearchButtonClicked);
});
