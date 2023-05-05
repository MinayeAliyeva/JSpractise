let data = [
  {
    src: "./images/avatar1.png",
    info: "avatar",
    time: "11:05",
  },
  {
    src: "./images/avatar1.png",
    info: "Shrek",
    time: "12:05",
  },
  {
    src: "./images/shrek.png",
    info: "Shrek",
    time: "12:05",
  },
  {
    src: "./images/avatar1.png",
    info: "Shrek",
    time: "12:05",
  },
];
let container = document.querySelector(".container");

data.forEach(
  (obj) =>
    (container.innerHTML += `
<div class="card">
        <img
          class="avatar"
          style="width: 320px; heigth:600px"
          src="${obj.src}"
          alt=""
        />
        <h3 class="info">${obj.info}</h3>
        <h4 class="time">${obj.time}</h4>
        <div class="social-icons">
         <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star"></i>
         <i class="fa-regular fa-star-half-stroke"></i>
        </div>`)
);
let icons = document.querySelectorAll(".fa-star");
console.log(icons);
icons.forEach((icon) => {
  icon.addEventListener("click", function () {
    this.style.backgroundColor = "red";
  });
});

let search = document.querySelector(".search");

search.addEventListener("input", function () {
  data.forEach((obj) => {
    if (obj.info.toLocaleLowerCase() == search.value.toLocaleLowerCase()) {
      container.innerHTML = "";
      container.innerHTML += `
          <div class="card">
              <img
                class="avatar"
                style="width: 220px"
                src="${obj.src}"
                alt=""
              />
              <h3 class="info">${obj.info}</h3>
              <h4 class="time">${obj.time}</h4>
              <div class="social-icons">
                <a href=""><i class="fa-regular fa-star"></i></a>
                <a href=""><i class="fa-regular fa-star"></i></a>
                <a href=""><i class="fa-regular fa-star"></i></a>
                <a href=""><i class="fa-regular fa-star-half-stroke"></i></a>
              </div>
          `;
    }
  });
});
console.log(search);
