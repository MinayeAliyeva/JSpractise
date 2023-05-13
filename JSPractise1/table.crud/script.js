let tbody = document.querySelector("tbody");
function fillData() {
  let tr = document.createElement("tr");
  axios.get("https://northwind.vercel.app/api/customers").then((data) => {
    tr.innerHTML += `
   data.forEach(Obj => {
    <td>Dear</td>
    <td>Programmer</td>
    <td>25</td>
    <td>
      <a href="" class="btn btn-warning btn-sm edit">Edit</a>
      <a href="" class="btn btn-danger btn-sm delete">Delete</a>
    </td>
   });`;
    tr.append("tbody");
  });
}
