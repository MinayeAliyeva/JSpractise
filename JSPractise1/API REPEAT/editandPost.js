let id = new URLSearchParams(window.location.search).get("id");
let BASE_URL = "http://localhost:3000/students";
let allInputs = document.querySelectorAll(".form-control");
let select = document.querySelector("#select");
let form = document.querySelector("form");
axios(`${BASE_URL}/${id}`).then((res) => {
  allInputs[0].value = res.data.userName;
  allInputs[1].value = res.data.Surname;
  allInputs[2].value = res.data.Age;
  select.value = res.data.city;
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    userName: allInputs[0].value,
    Surname: allInputs[1].value,
    Age: allInputs[2].value,
    city: select.value,
  };
  if (id) {
    axios.patch(`${BASE_URL}/${id}`, obj);
  } else {
    axios.post(`${BASE_URL}`, obj);
  }
  window.location = "index.html";
});
