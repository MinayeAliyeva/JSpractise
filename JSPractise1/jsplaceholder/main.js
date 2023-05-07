// //get
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => data.json())
//   .then((resolve) => console.log(resolve));

// //post
// let obj = {
//   name: "Minaya",
//   surname: "Aliyeva",
//   age: 19,
// };
// function addSublier(obj) {
//   fetch("https://northwind.vercel.app/api/customers", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   })
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// }
// addSublier(obj);

// //put

// function update(id, obj) {
//   fetch(`https://northwind.vercel.app/api/customers/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }
// update("WOLZA", {
//   companyName: "MINHHH",
//   contactName: "Zbyszek Piestrzeniewicz",
//   contactTitle: "Owner",
// });

// //patch

// let obj = {
//   companyName: "Around  Ganja",
//   contactName: "Thomas Hardy",
//   contactTitle: "Sales Representative",
// };
// function uploadSomeOf(id, obj) {
//   fetch(`https://northwind.vercel.app/api/customers/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });
// }
// uploadSomeOf("AROUT", obj);
//delete

function deleteById(id) {
  fetch(`https://northwind.vercel.app/api/customers/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(),
  }).then((data) => data.json());
}
deleteById("BERGS");
