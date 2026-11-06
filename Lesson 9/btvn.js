// C1
let student = { name: "John", age: 20 };
student.major = "Computer Science";
console.log(student);

// C2
let person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;
console.log(person);

// C3
let car = { brand: "Toyota", model: "Camry", year: 2020 };
console.log(Object.keys(car).length);

// C4
let product1 = { name: "Laptop", price: 1000 };
let pairs = [];
for (let key in product1) {
    pairs.push([key, product1[key]]);
}
console.log(pairs);

// C5
let products = [
  { name: "Phone", price: 500 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 }
];
let found;
for (let item of products) {
  if (item.name === "Camera") found = item;
}
console.log(found);

// C6
let products2 = [
  { name: "Phone", price: 50 },
  { name: "Camera", price: 300 },
  { name: "Tablet", price: 700 }
];
let list = [];
for (let item of products2) {
  if (item.price > 100) list.push(item);
}
console.log(list);

// C7
let person2 = { name: "Bob", age: 25, job: "Developer" };
person2.age = 30;
console.log(person2);

// C8
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let result = {};
for (let k in obj1) {
  result[k] = obj1[k];
}
for (let k in obj2) {
  result[k] = obj2[k];
}
console.log(result);

// C9
let animal = { type: "Dog", name: "Buddy", age: 3 };
let values = [];
for (let k in animal) values.push(animal[k]);
console.log(values.join(", "));

// C10
let car2 = { brand: "BMW", model: "X5" };
let hasColor = false;
for (let k in car2) {
  if (k === "color") hasColor = true;
}
console.log(hasColor);