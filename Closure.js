function outer(){
    var a = 10;
    function inner(){
        var b = 20;
        console.log(a+b);
    }

    return inner;
}


let add = outer();
console.log(add());                    // add is work as inner  function, because here return inner function.