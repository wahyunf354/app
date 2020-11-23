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
                  <h5 data-toggle="modal" data-target="#exampleModal">${result.nama}</h5>
                  `;
          listTanaman.appendChild(itemTanaman);
        });
      })
      .catch((message) => {
        listTanaman.innerHTML = message;
      });
  };

  const displayModal = (data) => {
    const html = ` <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <img src="/src/img/${data.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        
        </div>
      </div>
    </div>` 
    return html;
  }

  searchElement.addEventListener("keyup", onSearchButtonClicked);
  searchButton.addEventListener("click", onSearchButtonClicked);
});
