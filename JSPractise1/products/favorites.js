let row = document.querySelector(".row");
let locFavEl = JSON.parse(localStorage.getItem("FavElements"));
locFavEl?.forEach((obj) => {
  row.innerHTML += `
    <div class="col col-3 ">
    <div class="card" style="width: 18rem">
      <img src="./images/images1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> ${obj.productName} </h5>
        <p class="card-text">
         ${obj.price}
        </p>
        <button id="${obj.id}" href="#" class="btn btn-danger">Delete from fav</button>
      </div>
    </div>
  </div> 
    `;
});

let removeBtns = document.querySelectorAll(".btn-danger");
let arrDel;
removeBtns.forEach((item) =>
  item.addEventListener("click", function () {
    let favs = JSON.parse(localStorage.getItem("FavElements"));
    let fav = favs.filter((button) => button.id == item.id);
    this.closest("div").parentElement.parentElement.remove();
    arrDel = localStorage.setItem("fav", JSON.stringify(fav)) ?? [];
    arrDel.push(fav);
  })
);
localStorage.setItem("favDel", JSON.stringify(arrDel));
