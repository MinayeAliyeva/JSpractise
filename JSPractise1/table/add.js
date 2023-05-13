let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    companyName: inputs[0].value,
    contactName: inputs[1].value,
  };
  console.log(obj);
  axios.post("https://northwind.vercel.app/api/customers", obj);
});

