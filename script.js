const time = document.getElementById("time");
setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
}, 1000);

let modeBtn = document.querySelector("#mode");
let body = document.querySelector(".main");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
  if (currentMode === "light") {
    currentMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currentMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
