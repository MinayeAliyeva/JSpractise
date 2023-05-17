const BASE_URL = "https://northwind.vercel.app/api/suppliers";
let tBody = document.querySelector("tbody");

let inputs = document.querySelectorAll(".form-control");

let form = document.querySelector("form");

//fill table with API
function drawTable(array) {
  tBody.innerHTML = "";
  array.forEach((obj) => {
    tBody.innerHTML += `
    <tr>
            <td>${obj.companyName}</td>
            <td>${obj.contactName}</td>
            <td>
            <button class="btn btn-danger" onclick=delFun(${obj.id})>Delete</button>
            <button class="btn btn-success" onclick=editSup(${obj.id})>Edit</button>
            <a href="fav.html?id=${obj.id}" class="btn btn-info">Fav page</a>
          </td>
          </tr>
    `;
  });
}
axios(`${BASE_URL}`).then((res) => drawTable(res.data));

// //post
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let obj = {
//     companyName: inputs[0].value,
//     contactName: inputs[1].value,
//   };
//   console.log(obj);
//   axios.post(`${BASE_URL}`, obj);
// });
//delete
async function delFun(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}
//edit and post
let editstatus = false;
let editedId;
function editSup(id) {
    editstatus = true;
    editedId = id;
  try {
    axios(`${BASE_URL}/${id}`).then((res) => {
      (inputs[0].value = res.data.companyName),
        (inputs[1].value = res.data.contactName);
    });
  } catch (error) {
    console.log(error);
  }
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    companyName: inputs[0].value,
    contactName: inputs[1].value,
  };
  if (inputs[0].value === "" || inputs[1].value === "") {
    alert("filll!!");
  } else if (!editstatus) {
    await axios.post(`${BASE_URL}`, obj);
  } else {
    await axios.patch(`${BASE_URL}/${editId}`, obj);
    editstatus = false;
  }
});
