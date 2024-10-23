let person = {
    firstName: "Saran",  // 'firstName' is called key or property, 'Saran' is called value
    lastName:"Kalai",
    age:23,
    student:true 
}

console.log(person.firstName)
person.firstName = "John"
person.lastName = "Doe"
console.log(person)

delete person.student;  // Remove the property
console.log(person);

// in operator

console.log("firstName" in person) // in operator used to find the property