const name = "Hello World" //Global Scope
 
function scope(){
    const name = "Hello  JavaScript" // Function Scope
    if(true){
        const name = "Hello Saran"   // Block Scope
        console.log(name)
    }
    console.log(name)
}

console.log(name) //Hello World
scope()           //Hello  JavaScript