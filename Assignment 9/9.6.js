const person = {
  name: "Rohit",
  age: 25,
  occupation: "Engineer"
};
function greetPerson(p) {
  console.log(`Hello, my name is ${p.name}, I am ${p.age} years old and work as a ${p.occupation}.`);
}
greetPerson(person);