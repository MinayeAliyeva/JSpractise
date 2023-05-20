//data cekmek
const BASE_URL = "https://northwind.vercel.app/api/suppliers";
let row = document.querySelector(".row");
function getData(array) {
  array.forEach((obj) => {
    row.innerHTML += `
    <div class="col col-xl-3 col-sm-12 col-md-4">
        <div class="card" >
          <div class="card-body">
            <h5 class="card-title">${obj.companyName}</h5>
            <p class="card-text">
             ${obj.contactName}
            </p>
            <a href="favorite.html?id=${obj.id}" class="btn btn-primary" onclick=getData(${obj.id})>Go FavPage</a>
          </div>
        </div>
      </div>
`;
  });
}

axios(`${BASE_URL}`).then((res) => getData(res.data));
