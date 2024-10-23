let colors = ['red','blue','white'];
console.log(colors);
console.log(colors[0])

colors[2] = "black"   //Change color name white to black
console.log(colors); 

console.log(colors.length)

colors.push("Yellow")  // insert new value
console.log(colors)

colors.unshift("Green") // Change Green color to first position 
console.log(colors);

colors.pop();        //Remove last value('Yellow')
console.log(colors);  

colors.shift();
console.log(colors);  // remove first value('Green')

console.log(colors.indexOf('blue')) // Get index value 