let person = {
  firstName: "Saran", 
  lastName: "Kalai",
  age: 23,
  student: true,
};
 
const entry = Object.entries(person)
 console.log(entry)
//--------------------------------------------------

 const obj = {42:'a',22:'b',71:'c'}

 const ascend = Object.entries(obj); // Object.entries() method change the key as ascending order
 console.log(ascend);