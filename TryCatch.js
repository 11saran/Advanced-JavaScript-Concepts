//The tryCatch statement is used to find the error and it help run the code continuously.
try{
let result= add(10,20)
console.log(result)
} catch(e){
  console.log({name:e.name,message:e.message})   
}

console.log("Bye")