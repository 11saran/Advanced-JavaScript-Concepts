const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = { name: "saran" };
    resolve("Completed");
  }, 5000);
});

promise.then(()=>{
    console.log("Then Called") // after 5sec,the then function do that work
})


const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let user = { name: "saran" };
    resolve("Completed");
  }, 5000);
});

promise1.then((result) => {
  console.log("Result:",result); // Here the result get value from resolve function.
});
