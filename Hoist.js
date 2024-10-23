function hoist() {
    a = 20;
    let b = 10;
}

hoist();

console.log(a); //Javascript consider as global variable, so that error not occur
console.log(b); //ReferenceError: b is not defined