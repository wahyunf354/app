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
                  <h5 data-toggle="modal" data-target="#modal-${result.id}">${result.nama}</h5>
                  <!-- Modal -->
                  <div class="modal fade" id="modal-${result.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="card-title">${result.nama}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <img src="/src/img/${result.imgUrl}" class="card-img-top" alt="${result.name}">
                        <div class="card-body">
                          <p class="card-text">
                            ${result.ramuan.reduce((acc, cv) => acc + "<br> <br>" + cv)}
                          </p>
                        </div>
                      
                      </div>
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
