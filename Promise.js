const promise = new Promise((resolve,reject)=>{
 setTimeout(()=>{let user = {name:"saran"};resolve("Completed")},5000);
});
 console.log(promise)

//Here the resolve and reject are functions,when we call these functions we can check resolve or reject
// we can put any value into the resolve and reject functions