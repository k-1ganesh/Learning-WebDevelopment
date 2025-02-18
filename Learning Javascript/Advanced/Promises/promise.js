// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
const promise = new Promise(function (resolve, reject) {
  // Do here some asynchronous code.
  // console.log(promise)
  setTimeout(() => {
    console.log("Ha Ha Async work done !");
    resolve("welcome"); // Result of async function is sent through resolve. Resolve indicate promise satisfied.
  }, 1000);
});

// Then is used to get the value from the resolve.
// Then executes when promise is resolved.
// Catch executes when the promise is rejected.

promise.then((data) => {
  // Then takes a callback function which gets value from resolve()

  console.log("Promise is rosolved successfully");
  console.log(promise, data);
});
console.log(promise);

// Lets study of the chaining of .then()

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Work is done");
    resolve({ username: "Ganesh", useremail: "random@gmail.com" });
  }, 1000);
})
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise is used to avoid the issue of callback hell.
// Callback hell is nesting of call back function which grows code horizantally.
