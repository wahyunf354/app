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
                    <h4>${result.nama}</h4>
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
