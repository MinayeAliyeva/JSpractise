let row = document.querySelector(".allCards");
function drawData() {
  fetch("https://northwind.vercel.app/api/customers")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((obj) => {
        row.innerHTML += `
      <span class="col col-3">
      <div class="card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title ">${obj.companyName}</h5>
          <p class="card-text">
           ${obj.address?.street},${obj.address?.city}
          </p>
          <button href="#" class="btn btn-success">Edit</button>
          <button href="#" class="btn btn-danger" id="${obj.id}" onclick=deleteCard("${obj.id}")>Delete</button>
        </div>
      </div>
    </span>
      `;
      })
    )
    .catch((err) => console.log(err));
}
drawData();
//DELETE
// //one way to delete element
// function deleteCard(id) {
//   fetch(`https://northwind.vercel.app/api/customers/${id}`, {
//     method: "DELETE",
//   });
//   document.querySelector(`#${id}`).closest("span").remove();
// }

// //2 method2

function deleteCard(id) {
  fetch(`https://northwind.vercel.app/api/customers/${id}`, {
    method: "DELETE",
  }).then(() => {
    row.innerHTML = "";
    drawData();
  });
}

//POST
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let obj = {
    companyName: inputs[0].value,
    adress: {
      street: inputs[1].value,
      city: inputs[2].value,
    },
  };
  fetch("https://northwind.vercel.app/api/customers", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then(() => {
    row.innerHTML = "";
    drawData();
  });
});

//EDIT
