let allInputs = document.querySelectorAll(".form-control");
let form = document.querySelector("form");
console.log(form);
let array=[]
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
  };
  array.push(obj)
  localStorage.setItem("array", JSON.stringify(array));
});
