let tbody = document.querySelector("tbody");
function filldata() {
  axios.get("https://northwind.vercel.app/api/customers").then((res) =>
    res.data.forEach((obj) => {
      let tr = document.createElement("tr");
      tr.innerHTML += `
        <td>${obj.id}</td>
        <td>${obj.companyName}</td>
        <td>${obj.contactName}</td>
        <td>
          <button id="${obj.id}" onclick=delFunc("${obj.id}")  class="btn btn-danger">delete</button>
          <button class="btn btn-success">edit</button>
        </td>
        `;
      tbody.append(tr);


    })
  );
}
filldata();

//delete
function delFunc(id) {
  axios.delete(`https://northwind.vercel.app/api/customers/${id}`);
}

//post
let addUser = document.querySelector(".btn-primary");
addUser.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/JSPractise1/table/add.html";
  });
