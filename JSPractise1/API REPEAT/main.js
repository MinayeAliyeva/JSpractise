let BASE_URL = "http://localhost:3000/students";
let allInputs = document.querySelectorAll(".form-control");
let form = document.querySelector("form");
let select = document.querySelector("#select");

let selectValue;
//selectin valuesini goturmek
select.addEventListener("change", function (e) {
  selectValue = e.target.value;
});
//fill table
let tBody = document.querySelector("tbody");
function fillTable(array) {
  tBody.innerHTML = "";
  array.forEach((obj) => {
    tBody.innerHTML += `
        <tr>
                    <td>${obj.userName}</td>
                    <td>${obj.Surname}</td>
                    <td>${obj.Age}</td>
                    <td>${obj?.city}</td>
                <td><button class="btn btn-danger" onclick=delFunc(${obj.id})>Delete</button>
                <a class="btn btn-info" href="details.html?id=${obj.id}">Details</a>
                <a href="edit.html?id=${obj.id}" class="btn btn-success" )>Edit</a>
                <a href="editandPost.html?id=${obj.id}" class="btn btn-warning">Edit</a> 
                <a href="editandPost.html" class="btn btn-warning" >Post</a></td>
                </tr>
        
        `;
  });
}
axios(`${BASE_URL}`).then((res) => fillTable(res.data));

//post eyni sehifede
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    userName: allInputs[0].value,
    Surname: allInputs[1].value,
    Age: allInputs[2].value,
    city: selectValue,
  };
  axios.post(`${BASE_URL}`, obj);
});
//alert
let notification = document.querySelector("#notification");
function alertDiv(content, alertcolor) {
  console.log("asdas");
  notification.className = `alert alert-${alertcolor}`;
  notification.innerText = content;
  notification.style.visibility = "visible";
  setTimeout(function () {
    notification.style.visibility = "hidden";
  }, 5000);
}

//delete
function delFunc(id) {
  axios.delete(`${BASE_URL}/${id}`);
  alertDiv("ghghhghg", danger);
}

//SEARCH
//axdarisa click edende cixsin
let search = document.querySelector(".fa-magnifying-glass");
let searchInput = document.querySelector(".searchInput");
search.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let filtered = data.filter((obj) =>
    obj.userName
      .toLocaleLowerCase()
      .includes(searchInput.value.toLocaleLowerCase())
  );
  fillTable(filtered);
});
//daxiline yazan kimi cixsin
searchInput.addEventListener("input", async function (e) {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let filtered = data.filter((obj) =>
    obj.userName
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  fillTable(filtered);
});
//age gore
let searchInput2 = document.querySelector(".searchInput2");
searchInput2.addEventListener("input", async function (e) {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let filteredAge = data.filter((obj) => obj.Age == this.value);
  fillTable(filteredAge);
});
//SORT
/////
let sortByNameAsc = document.querySelector(".sortByNameAsc");
sortByNameAsc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let nameAsc = data.sort((a, b) => a.userName.localeCompare(b.userName));
  fillTable(nameAsc);
});
/////
let sortByNameDesc = document.querySelector(".sortByNameDesc");
sortByNameDesc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let nameDesc = data.sort((a, b) => b.userName.localeCompare(a.userName));
  fillTable(nameDesc);
});
/////
let sortByAgeAsc = document.querySelector(".sortByAgeAsc");
sortByAgeAsc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let ageAsc = data.sort((a, b) => a.Age - b.Age);
  fillTable(ageAsc);
});
/////
let sortByAgeDesc = document.querySelector(".sortByAgeDesc");
sortByAgeDesc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let ageDesc = data.sort((a, b) => b.Age - a.Age);
  fillTable(ageDesc);
});
/////
let sortByNameAscDesc = document.querySelector(".sortByNameAscDesc");
let bool = true;
sortByNameAscDesc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  if (bool) {
    let ascDesc1 = data.sort((a, b) => a.userName.localeCompare(b.userName));
    fillTable(ascDesc1);
    bool = false;
  } else {
    let ascDesc2 = data.sort((a, b) => b.userName.localeCompare(a.userName));
    fillTable(ascDesc2);
    bool = true;
  }
});
/////
let sortByAgeAscDesc = document.querySelector(".sortByAgeAscDesc");
let num = true;
sortByAgeAscDesc.addEventListener("click", async function () {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  if (bool) {
    let ascDescAge1 = data.sort((a, b) => a.Age - b.Age);
    fillTable(ascDescAge1);
    bool = false;
  } else {
    let ascDescAge2 = data.sort((a, b) => b.Age - a.Age);
    fillTable(ascDescAge2);
    bool = true;
  }
});
//fill card
let cards = document.querySelector(".cards");
let card = document.querySelector(".card");

function fillCard(array) {
  array.forEach((obj) => {
    cards.innerHTML += `
     <div class="card p-3 mt-4 d-flex ">
    <div class="text">
     

 <p>${obj.userName}</p>
 <p>${obj.Surname}</p></div>
 <p>${obj.Age}</p>
    
 
    <div class="actions">
  
      <button class="btn btn-danger">Delete</button>
      <a class="btn btn-info" href="">Details</a>
      <button class="btn btn-success">Edit</button>
    
  
  </div>
              </div>
    `;
  });
}

axios(`${BASE_URL}`).then((res) => fillCard(res.data));
