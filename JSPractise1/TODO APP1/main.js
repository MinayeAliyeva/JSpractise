let addBtn = document.querySelector(".todoAdd");
let ul = document.querySelector(".list-group ");
let input = document.querySelector(".form-control");

// //mlmden soruc niye disabled olmur
// addBtn.disabled = "true";
// input.addEventListener("input", function (e) {
//   if (e.target.value) {
//     addBtn.disabled = "false";
//   } else {
//     addBtn.disabled = "true";
//   }
// });

//add
function creatList() {
  if (input.value) {
    ul.innerHTML += `
    <li class="list-group-item list-group-item-danger d-flex justify-content-between align-items-center">
    
                <span>  ${input.value} </span>
                <div class="div">
                <button type="button" class="btn btn-success todoAdd" >EDIT</button>
                    <button type="button" class="btn btn-danger todoAdd">DELETE</button>
    
                </div>
                </li>
    
            `;
    //enterlede olsun
    window.addEventListener("keyup", function (e) {
      if (e.code === "Enter") {
        creatList();
      }
    });
    //delete
    let allDEleteBtns = document.querySelectorAll(".btn-danger");
    allDEleteBtns.forEach((btn) =>
      btn.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
      })
    );
  } else {
    window.alert("Pleas fill the note");
  }
  input.value = "";
}
addBtn.addEventListener("click", creatList);
//check
function check(id){

}
