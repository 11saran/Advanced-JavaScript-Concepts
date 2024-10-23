function hello(){
    console.log("Hello World")
}

hello();

function first(message){
  console.log(message)
}

let result = first("Hello World");
console.log("Result:",result) // The out put is undefined because the function not return any value.

// return keyword

function add (a,b){
    return (a+b)
}

let Add = add(1,2)
console.log("Total",Add)