const string = "Hello world!"
console.log(string.length)  // length keyword count all characters including space.
console.log(string.toLowerCase())
console.log(string.toUpperCase())
console.log(string.charAt(6))
console.log(string.substring(0,5)) // Here we can separate "Hello" word using by substring keyword.

let text = "Learn JavaScript, JavaScript is Fun"
console.log(text.indexOf("JavaScript"))  //Give the JavaScript word's first letter index number, Count from starting point.
console.log(text.lastIndexOf("JavaScript")) //Give the JavaScript word's first letter index number, Count from ending point.


let text1 = "I Love Coding With Python";
console.log(text1.replace("Python","JavaScript"))

console.log(text1.split(" ")) // Split every space and give as array format.

let text2 = "     Hello World    "
console.log(text2.trim())    // Remove front and back Unwanted space in the Hello world text.