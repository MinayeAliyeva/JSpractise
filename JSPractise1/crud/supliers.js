let tBody = document.querySelector("tbody");
let search = document.querySelector("#search");
let sort = document.querySelector("#sort");

//draw table
function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    tBody.innerHTML += `
            <tr>
                <td>${element.id}</td>
                <td>${element.companyName}</td>
                <td>${element.address?.street}</td>
                <td>${element.address?.country}</td>
                <td><a class="btn btn-warning" href="edit.html?id=${element.id}">edit</a></td>
                <td><button class="btn btn-danger" onclick=deleteSupplier("${element.id}",this)>delete</button></td>
                <td><a class="btn btn-primary" href="details.html?id=${element.id}">details</a></td>
            </tr>
            `;
  });
}
axios("https://northwind.vercel.app/api/suppliers").then((res) => {
  drawTable(res.data);
});

//delete suplier
function deleteSupplier(id, btn) {
  axios.delete(`https://northwind.vercel.app/api/suppliers/${id}`);
  btn.closest("tr").remove();
}
//search
search.addEventListener("input", function (e) {
  axios("https://northwind.vercel.app/api/suppliers").then((res) => {
    let filteredData = res.data.filter((obj) =>
      obj.companyName
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    drawTable(filteredData);
  });
});
//sort
sort.addEventListener("click", function () {
  if (this.innerHTML == "Ascending") {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      let sortAsc = res.data.sort((a, b) => a.id - b.id);
      drawTable(sortAsc);
    });
    this.innerHTML = "Descending";
  } else if (this.innerHTML == "Descending") {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      let sortDesc = res.data.sort((a, b) => b.id - a.id);
      drawTable(sortDesc);
    });
    this.innerHTML = "Default";
  } else {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      drawTable(res.data);
    });
    this.innerHTML = "Ascending";
  }
});

