let person = {
  name: "john",
  age: 23,
};

Object.seal(person)  // We can only change property value but we can not delete or add any property.

person.age=30;

console.log(person)
