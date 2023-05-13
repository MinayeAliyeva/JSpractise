let id = new URLSearchParams(window.location.search).get("id");
let card = document.querySelector(".card");
let BASE_URL2 = "http://localhost:3000/users";

axios(`${BASE_URL2}/${id}`).then(
  (res) =>
    (card.innerHTML = `
    <h5>${res.data.firstname}</h5>
    <h5>${res.data.lastname}</h5>
    <p>${res.data.email}</p>
    <p>${res.data.cardNo}</p> 

    <a href="home.html" class="btn btn-dark">GoBack</a>
    `)
);
