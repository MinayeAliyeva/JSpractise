let row = document.querySelector("row");

fetch("https://northwind.vercel.app/api/customers")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((obj) => {
      row.innerHTML += `
    <div class="col col-3">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button href="#" class="btn btn-primary">Go somewhere</button>
          </div>
        </div>
      </div> 
    `;
      document.body.append("row");
    })
  );
