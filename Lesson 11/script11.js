// Bài 1
let a1 = ["John", "Alice"];
a1.push("Tom");
console.log(a1);

// Bài 2
let a2 = [1, 2, 3, 4];
console.log(a2.map(x => x ** 2));

// Bài 3
let a3 = [5, 10, 15, 20, 25];
console.log(a3.filter(x => x % 2 === 0));

// Bài 4
let a4 = [{ name: 'John', score: 7 }, { name: 'Alice', score: 9 }, { name: 'Tom', score: 8 }];
console.log(a4.find(x => x.score >= 8));

// Bài 5
let a5 = [3, 5, 8, 12, 15];
console.log(a5.findIndex(x => x > 10));

// Bài 6
let a6 = ['a', 'b', 'c', 'd', 'e'];
a6.splice(3, 1, 'f');
console.log(a6);

// Bài 7
let a7 = { name: 'Tom', age: 21, major: 'Computer Science' };
console.log(Object.keys(a7));

// Bài 8
let a8 = { name: 'Tom', age: 21, major: 'Computer Science' };
console.log(Object.values(a8));

// Bài 9
let o9_1 = { a: 1, b: 2 }, o9_2 = { c: 3, d: 4 };
console.log(Object.assign({}, o9_1, o9_2));

// Bài 10
let a10 = [1, 2, 3];
console.log([...a10, 4]);

// Bài 11
let o11_1 = { name: 'Alice', age: 25 }, o11_2 = { job: 'Developer' };
console.log({ ...o11_1, ...o11_2 });

// Bài 12
let a12 = ['john', 'alice', 'tom'];
console.log(a12.map(x => x.toUpperCase()));

// Bài 13
let a13 = [1, 2, 3, 4, 5, 6];
console.log(a13.filter(x => x % 2 === 0).reduce((s, x) => s + x, 0));

// Bài 14
let a14 = [1, 2, 2, 3, 4, 4, 5];
console.log(a14.filter((x, i) => a14.indexOf(x) === i));

// Bài 15
let a15 = ['a', 'b', 'a', 'c', 'b', 'a'];
console.log(a15.reduce((o, x) => ({ ...o, [x]: (o[x] || 0) + 1 }), {}));