let row = document.querySelector(".row");

let favs = JSON.parse(localStorage.getItem("addFav"));

favs?.forEach((obj) => {
  row.innerHTML += `
        <span class="col col-3">
              <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">${obj.title}</h5>
                  <p class="card-text">
                   Publisher:${obj.publisher}
                  </p>
                  <p><i>Year:${obj.year}</i></p>
                  <button href="#" class="btn btn-danger" id=${obj.id}>Remove Fav</button>
                </div>
              </div>
            </span>
        `;
});

//removeData
let allRemoveBtns = document.querySelectorAll(".btn-danger");
allRemoveBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    favs = JSON.parse(localStorage.getItem("addFav"));
    let updated = favs.filter((obj) => obj.id != this.id);
    localStorage.setItem("addFav", JSON.stringify(updated));
    
    this.closest("span").remove()
  })
);
