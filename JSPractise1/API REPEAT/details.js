let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:3000/students";
let cardContainer = document.querySelector(".card-container");
axios(`${BASE_URL}/${id}`).then((res) => {
  cardContainer.innerHTML = `
    <div class="card w-50 p-5">
          <div class="text">
            <p>${res.data.userName}</p>
            <p>${res.data.Surname}</p>
            <p>${res.data.city}</p>
            <p><i>${res.data.Age}</i></p>
          </div>
          <div class="actions">
           <a href="index.html" class="btn btn-close"></a>
          </div>
        </div>
    `;
});
