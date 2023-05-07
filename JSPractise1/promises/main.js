// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((arr) => console.log(arr)).catch((err)=>console.log(err))
// //fetc data and show it console
// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((data) => data.json())
//   .then((data) => console.log(data));

import { BASE_URL } from "./api.js";
//all data
// function allData() {
//   fetch(`${BASE_URL}suppliers`)
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// }

// allData();
// function allDataById(id) {
//   fetch(`${BASE_URL}suppliers/${id}`)
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// }

// allDataById(3);

// //same
// function getAllDataById(url, id) {
//   fetch(`${url}suppliers/${id}`)
//     .then((data) => data.json())
//     .then((data) => console.log(data));
// }
// getAllDataById(BASE_URL, 4);

// //delete by id
// function deleteById(url, id) {
//   fetch(`${url}suppliers/${id}`, { method: "DELETE" });
// }
// deleteById(BASE_URL, 6);

//post

// function addNewData() {
//   fetch(`${BASE_URL}suppliers`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then((data) => data.json());
// }
// addNewData({
//   companyName: "Code Academy",
//   contactName: " js",
// });

// let obj = {
//   companyName: "Code Academy",
//   contactName: " js",
// };

// //post

// function addNewData(obj) {
//   fetch(`${BASE_URL}suppliers`, {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then((data) => data.json());
// }

// addNewData({
//   companyName: "CodeAcademy company",
//   contactName: "codeeduaz",
// });

// function deleteById(id) {
//   fetch(`${BASE_URL}suppliers/${id}`, {
//     method: "DELETE",
//   }).then((data) => data.json());
// }
// deleteById(40);
// deleteById(41);
// deleteById(42);

// //put
// function updateById(id, obj) {
//   fetch(`${BASE_URL}suppliers/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   }).then((data) => data.json());
// }
// updateById(14,{
//   address: {
//     street: "bayraq meydnani",
//     city: "ganja",
//     region: "qerb",
//     postalCode: 33007,
//     country: "Spain",
//     phone: "(98) 598 76 54",
//   },
// });

//patch speacial filds
let obj3={
  companyName: "odeA2cadejjjjjjjjjmy",
  contactName: "codeedusx",
}
function updateDataById(id, obj) {
  fetch(`https://northwind.vercel.app/api/customers/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());
}

updateDataById("AROUT", obj3);
