const btn = document.getElementsByTagName("button");
const result = document.querySelector(".result");

btn[0].addEventListener("click", (e) => {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  console.log(height);
  console.log(weight);
  if (height === "" || isNaN(height)) {
    result.innerHTML = `Enter Correct Height ${height}`;
  } else if (weight === "" || isNaN(weight)) {
    result.innerHTML = `Enter Correct Weight ${weight}`;
  } else {
    const res = (weight * 100 * 100) / height ** 2;
    console.log(res);

    if (res < 18.6) {
      result.innerHTML = `${res.toFixed(2)}! You are Underweight`;
    } else if (res >= 18.6 && res < 22.9) {
      result.innerHTML = `${res.toFixed(2)} ! You are Normal. Smile ;)`;
    } else {
      result.innerHTML = `${res.toFixed(2)} ! You are Overweight`;
    }
  }
});
