import DataSource from "./data-source.js";
import { getUserByUid } from "./helper.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchElement = document.querySelector("#searchElement");
  const onSearchButtonClicked = () => {
    const listTanaman = document.querySelector(".list-tanaman");

    DataSource.searchTanaman(searchElement.value)
      .then((results) => {
        listTanaman.innerHTML = "";

        results.forEach((result) => {
          const itemTanaman = document.createElement("div");
          // itemTanaman.setAttribute("class", "item-tanaman");
          itemTanaman.innerHTML = `
                  <div class="col-md-4 col-12 mb-3">
                    <div class="card" style="width:18rem; cursor: pointer;" data-toggle="modal" data-target="#modal-${
                      result.id
                    }">
                      <img src="${
                        result.imgUrl
                      }" class="card-img-top img-tanaman" alt="...">
                      <div class="card-body">
                        <h5 class="card-text">${result.nama}</h5>
                        <p class="card-text text-secondary">by ${
                          result.author || "anonimus"
                        }</p>
                      </div>
                    </img>
                  </div>
                  <!-- Modal -->
                  <div class="modal fade" id="modal-${
                    result.id
                  }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="card-title">${result.nama}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <img src="${result.imgUrl}" class="card-img-top" alt="${
            result.nama
          }">
                        <div class="card-body">
                          <p class="card-text">
                            ${result.ramuan.reduce(
                              (acc, cv) => acc + "<br>" + cv
                            )}
                          </p>
                        </div>
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
  // searchButton.addEventListener("click", onSearchButtonClicked);
});
