//named import
import { books } from "./data.js";

//default import(It will be exisist only once in one page)
// import sum from "./data.js";

// //ikisi bir
// import sum, {books} from "./data.js";

// console.log(books);
// console.log(sum(2, 5));
let row = document.querySelector(".row");

function fillData(array) {
  array.forEach((obj) => {
    row.innerHTML += `
    <div class="col col-3">
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">${obj.title}</h5>
              <p class="card-text">
               Publisher:${obj.publisher}
              </p>
              <p><i>Year:${obj.year}</i></p>
              <button href="#" class="btn btn-primary" id=${obj.id}>Add Fav</button>
            </div>
          </div>
        </div>
    `;
  });
}
fillData(books);

//localstorege gonderek

let arr = JSON.parse(localStorage.getItem("addFav")) ?? [];
let allBtns = document.querySelectorAll(".btn-primary");
allBtns.forEach((button) =>
  button.addEventListener("click", function () {
    arr.push(books.find((obj) => obj.id == this.id));
    localStorage.setItem("addFav", JSON.stringify(arr));
  })
);
