let person = {
    name:"john",
    age:23,
}
Object.freeze(person) // We can not change and delete property value

person.age=30;
 console.log(person)