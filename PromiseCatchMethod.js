const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("We have failed")},2000);
    setTimeout(()=>{let user={name:"saran"}},5000);
})

promise.catch((reason)=>{console.log(reason)})   //here the promise catch method is used to handle the error, when use the reject function,if not use catch method "Uncaught"error will come.