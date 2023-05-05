let data = [
  {
    productName: "Short",
    price: 20,
    id: 1,
    // image: //www.google.com/url?sa=i&url=https%3A%2F%2Farnoticias.tv%2Fsobre-andres-repetto%2Flook-like-a-rich-lady-with-expensive-looking-zara-xx-20133495&psig=AOvVaw1AmzDKcQaEDIODaJht1eLl&ust=1683241459815000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCsnZyh2v4CFQAAAAAdAAAAABAJ
  },
  {
    productName: "T-Shirt",
    price: 15,
    id: 3,
    // image://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vogue.com%2Farticle%2Fzara-sustainable-initiatives&psig=AOvVaw1AmzDKcQaEDIODaJht1eLl&ust=1683241459815000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCsnZyh2v4CFQAAAAAdAAAAABAY
  },
  {
    productName: "Dress",
    price: 30,
    id: 6,
    // image://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zara.com%2Fus%2Fen%2Fpoplin-midi-dress-p02183044.html&psig=AOvVaw1AmzDKcQaEDIODaJht1eLl&ust=1683241459815000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCsnZyh2v4CFQAAAAAdAAAAABAd
  },
  {
    productName: "Bluz",
    price: 20,
    id: 8,
    // image://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zara.com%2Ftr%2Fen%2Fmidi-dress-with-cutwork-embroidery-p04387021.html&psig=AOvVaw1AmzDKcQaEDIODaJht1eLl&ust=1683241459815000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCsnZyh2v4CFQAAAAAdAAAAABAj
  },
];

let row = document.querySelector(".row");

data.forEach((obj) => {
  row.innerHTML += `
    <div class="col col-3 ">
    <div class="card" style="width: 18rem">
      <img src="./images/images1.png" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title"> ${obj.productName} </h5>
        <p class="card-text">
         ${obj.price} $
        </p>
        <button id="${obj.id}" href="#" class="btn btn-primary">Favorite</button>
      </div>
    </div>
  </div> 
    `;
});
let searchBtn = document.querySelector(".search");
let searchInput = document.querySelector(".searchInput");

searchBtn.addEventListener("click", function (e) {
  let filterData = data.filter((obj) =>
    obj.productName.toLocaleLowerCase().includes(searchInput.value)
  );
  filterData.forEach((obj) => {
    if (searchInput.value) {
      row.innerHTML = "";
      row.innerHTML += `
          <div class="col col-3 ">
          <div class="card" style="width: 18rem">
            <img src="./images/images1.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> ${obj.productName} </h5>
              <p class="card-text">
               ${obj.price}
              </p>
              <button id="${obj.id}" href="#" class="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div> 
          `;
    } else {
      window.alert("You have nothing added already!!");
    }
  });
});

let arr = JSON.parse(localStorage.getItem("FavElements")) ?? [];
let AllfavBtn = document.querySelectorAll(".btn-primary");
AllfavBtn.forEach((button) =>
  button.addEventListener("click", function () {
    let fuvEl = data.find((obj) => obj.id == button.id);
    arr.push(fuvEl);
    localStorage.setItem("FavElements", JSON.stringify(arr));
  })
);

let sortPrice = document.querySelector(".sortPrice");

sortPrice.addEventListener("click", function () {
  let sortedData = data.sort((a, b) => a.price - b.price);
  console.log(sortedData);
  row.innerHTML = "";
  sortedData.forEach((obj) => {
    row.innerHTML += `
        <div class="col col-3">
        <div class="card" style="width: 18rem">
          <img src="./images/images1.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> ${obj.productName} </h5>
            <p class="card-text">
             ${obj.price}
            </p>
            <button id="${obj.id}" href="#" class="btn btn-primary">Favorite</button>
          </div>
        </div>
      </div>
        `;
  });
});

let sortPrice2 = document.querySelector(".sortPrice2");
sortPrice2.addEventListener("click", function () {
  let sortedData2 = data.sort((a, b) => b.price - a.price);
  row.innerHTML = "";
  sortedData2.forEach(
    (obj) =>
      (row.innerHTML += `
  <div class="col col-3">
  <div class="card" style="width: 18rem">
    <img src="./images/images1.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title"> ${obj.productName} </h5>
      <p class="card-text">
       ${obj.price}
      </p>
      <button id="${obj.id}" href="#" class="btn btn-primary">Favorite</button>
    </div>
  </div>
</div>
  `)
  );
});
