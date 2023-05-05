
let array=JSON.parse(localStorage.getItem("books"))??[]
let row = document.querySelector(".row");

array.forEach((obj) => {
  row.innerHTML += `
    <div class="col col-3 my-4 ">
  <div class="card" style="width: 18rem ">
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">
       Publisher:${obj.publisher}
      </p>
     <i> <p> Year:${obj.year}</p></i>
    <button id=${obj.id} class="btn btn-danger ">Add</button>
    </div>
  </div>
</div>
    `;
});


let allRemoves=document.querySelectorAll(".btn-danger")

allRemoves.forEach((button)=>{
 button.addEventListener("click",function(){
   console.log( JSON.parse(localStorage.getItem(button.id!=array.id)));
   
 })
})