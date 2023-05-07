let tBody = document.querySelector("tbody");
function drowTable() {
  tBody.innerHTML = "";
  fetch("https://northwind.vercel.app/api/suppliers")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((obj) => {
        let trElem = document.createElement("tr");
        trElem.innerHTML += `
        <td>${obj.id}</td>
        <td>${obj.companyName}</td>
        <td>${obj.address?.street}</td>
        <td>${obj.address?.country}</td>
        <td> <button id="${obj.id}" onclick=deleteById(${obj.id})>Delete</button></td>
        `;
        tBody.append(trElem);
      })
    );
}
drowTable();
//If there is more data, the process will be delayed, so it is more advisable to delete it from ui, and the reason for writing the function in the then block is that these two processes are asynchronous.
// function deleteById(id) {
//   fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
//     method: "DELETE",
//   }).then(() => {
//     drowTable();
//   });
// }
//method2
// function deleteById(id) {
//   fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
//     method: "DELETE",
//   });
//   document.querySelector(`#${id}`).closest("td").parentElement().remove();
//   drowTable()
// }
