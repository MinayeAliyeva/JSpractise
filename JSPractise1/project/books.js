import { books } from "./data.js";
let row = document.querySelector(".row");

books.forEach((obj) => {
  row.innerHTML += `
   <div class="col col-3 my-4 ">
  <div class="card" style="width: 18rem ">
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">
       Publisher:${obj.publisher}
      </p>
     <i> <p> Year:${obj.year}</p></i>
    <button id=${obj.id} class="btn btn-primary ">Add</button>
    </div>
  </div>
</div> `;
});
let array = JSON.parse(localStorage.getItem("favoritedBook")) ?? [];
let Allbuttons = document.querySelectorAll(".btn-primary");
Allbuttons.forEach((button) => {
  button.addEventListener("click", function () {
    let favoritedBook = books.find((obj) => obj.id == button.id);
    array.push(favoritedBook);
    localStorage.setItem("books", JSON.stringify(array));
  });
});
