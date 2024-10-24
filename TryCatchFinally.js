let result = 0;

try{
    result=add(10,20);
    console.log(result)
} catch(e){
    console.log({name:e.name, message:e.message})
}finally{                     // The finally statement's code is run when error will occur or not,We can give the correct code into the finally statement.
    console.log(result)
}