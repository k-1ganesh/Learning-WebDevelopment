function randomColor() {
  // This function generate random color using hex code.
  let colorString = "0123456789ABCDEF";

  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    color += colorString[index];
  }
  color = "#" + color;
  return color;
}

const start = document.querySelector(".start");
const end = document.querySelector(".end");
const body = document.body;
let interval;
start.addEventListener("click", () => {
  interval = setInterval(() => {
    body.style.backgroundColor = randomColor();
  }, 1000);
});

end.addEventListener("click", () => {
  clearInterval(interval);
});
