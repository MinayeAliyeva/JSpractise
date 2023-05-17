let section = document.querySelector("section");
let card = document.querySelector(".card");
let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://northwind.vercel.app/api/suppliers";
axios(`${BASE_URL}/${id}`).then((res) => {
  section.innerHTML += `
  <div class="card">
  <h1>${res.data.companyName}</h1>
  <p>${res.data.contactName}</p> 
  <button class="btn btn-danger" onclick=deleteFun(${res.data.id})>Delete</button>
</div>
    `;
});

function deleteFun(id) {
  axios.delete(`${BASE_URL}/${id}`);
}
