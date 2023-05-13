const BASE_URL = "http://localhost:3000/users";
let tBody = document.querySelector("tbody");
let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".form-control");
let arrowUp = document.querySelector(".fa-arrow-up");
let arrowDown = document.querySelector(".fa-arrow-down");
let thName = document.querySelector(".thName");
let searchInput = document.querySelector("#searchInput");
let searhStartsWith = document.querySelector("#searhStartsWith");
let detailPageBtn = document.querySelector(".btn-info");
let editStatus = false;
let datevalue = new Date();
let editId;
//draw data
function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((obj) => {
    tBody.innerHTML += `

    <tr>
            <td>${obj.firstname}</td>
            <td>${obj.lastname}</td>
            <td>${obj.email}</td>
            <td>${obj.cardNo.split("").fill("*", 0, -4).join("")}</td>
            <td>
              <button class="btn btn-danger" onclick=delFun(${
                obj.id
              })>Delete</button>
              <button class="btn btn-success" onclick=editSup(${
                obj.id
              })>Edit</button>
              <button class="btn btn-primary" onclick=detailBtn("${
                obj.firstname
              }","${obj.date}")>Details</button>
              <a href="./details.html?id=${obj.id}" class="btn btn-info">Details Page</a>
              <a class="btn btn-secondary">Add to Favorite</a>
            </td>
          </tr>
    `;
  });
}
axios(`${BASE_URL}`).then((res) => drawTable(res.data));
//edit and post
function editSup(id) {
  editStatus = true;
  editId = id;
  try {
    axios(`${BASE_URL}/${id}`).then((res) => {
      (allInputs[0].value = res.data.firstname),
        (allInputs[1].value = res.data.lastname),
        (allInputs[2].value = res.data.email),
        (allInputs[3].value = res.data.cardNo);
    });
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstname: allInputs[0].value,
    lastname: allInputs[1].value,
    email: allInputs[2].value,
    cardNo: allInputs[3].value,
    date: datevalue.toLocaleDateString(),
  };
  if (
    allInputs[0].value === "" ||
    allInputs[1].value === "" ||
    allInputs[2].value === "" ||
    allInputs[3].value === ""
  ) {
    notificationDiv("Pleas fill all the data", "warning");
  } else if (!editStatus) {
    await axios.post(`${BASE_URL}`, obj);
    notificationDiv("Succses!!", "success");
  } else {
    await axios.patch(`${BASE_URL}/${editId}`, obj);
    notificationDiv("It was successfully edit!", "info");
    editStatus = false;
  }
});
//delete data
async function delFun(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  notificationDiv("Delete data!!", "danger");
}
//alert
let notification = document.querySelector(".notification");
function notificationDiv(content, alertColor) {
  notification.className = `alert alert-${alertColor}`;
  notification.style.visibility = "visible";
  notification.innerHTML = content;
  setTimeout(function () {
    notification.style.visibility = "hidden";
  }, 2000);
}
//details
function detailBtn(username, date) {
  notificationDiv(`"${username} has been created on ${date}"`, "primary");
}
//search  INCLUDES
searchInput.addEventListener("input", async function (e) {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let filteredData = data.filter((obj) =>
    obj.firstname
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  drawTable(filteredData);
});

//SEARCH STARTS WITH
searhStartsWith.addEventListener("input", async function (e) {
  let res = await axios(`${BASE_URL}`);
  let data = await res.data;
  let filteredData = data.filter((obj) =>
    obj.firstname
      .toLocaleUpperCase()
      .startsWith(e.target.value.toLocaleUpperCase())
  );
  drawTable(filteredData);
});

//sort
arrowUp.style.display = "none";
arrowDown.style.display = "none";
let bool;
thName.addEventListener("click", async function () {
  bool = !bool;
  if (bool) {
    arrowUp.style.display = "none";
    arrowDown.style.display = "block";
    let res = await axios(`${BASE_URL}`);
    let data = await res.data;
    let sortedData = data.sort((a, b) =>
      a.firstname.localeCompare(b.firstname)
    );
    drawTable(sortedData);
  } else {
    arrowUp.style.display = "block";
    arrowDown.style.display = "none";
    let res = await axios(`${BASE_URL}`);
    let data = await res.data;
    let sortedData = data.sort((a, b) =>
      b.firstname.localeCompare(a.firstname)
    );
    drawTable(sortedData);
  }
});


