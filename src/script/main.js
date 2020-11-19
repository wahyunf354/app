import DataSource from "./data-source.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.querySelector("#searchButtonElement");
  const searchElement = document.querySelector("#searchElement");

  const onSearchButtonClicked = () => {
    const listTanaman = document.querySelector(".list-tanaman");

    DataSource.searchTanaman(searchElement.value)
      .then((results) => {
        listTanaman.innerHTML = "";

        results.forEach((result) => {
          const itemTanaman = document.createElement("div");
          itemTanaman.setAttribute("class", "item-tanaman");
          itemTanaman.innerHTML = `
                <div class="card  shadow-lg">
                  <img src="/src/img/${
                    result.imgUrl
                  }" class="card-img-top rounded" style="width: 100%;"
                       alt="...">
                  <div class="card-body">
                    <h2 class="card-title display-1">${result.nama}</h2>
                    <p class="card-subtitle mb-2 text-muted h1" style="color: #bbb">${
                      result.namaLatin
                    }</p>
                    <p class="card-text">
                      ${result.ramuan.reduce(
                        (acc, cv) => acc + "<br><br>" + cv
                      )}
                    </p>
                  </div>
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
