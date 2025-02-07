const clock = document.getElementsByClassName("clock");
console.log(clock);
setInterval(function () {
  const dt = new Date();
  clock[0].innerHTML = dt.toLocaleTimeString();
}, 1000);
