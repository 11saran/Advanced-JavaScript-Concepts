// for ..in Object 

let decoration ={
    color:"red",
    radius:10
}

for(const prop in decoration){
   // console.log(prop);        //Here the output is key or property
    console.log(decoration[prop]); // Here the output is value
}


// for ..in loop in Array
 const arr = ['hello',2,'JavaScript',true];

 for(let x in arr){
    //console.log(x);   // Here, the out put is index value
    console.log(arr[x]); // Here, the out put is value
 }

