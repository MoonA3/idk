// C1:
let s1 = 0;
for (let i = 1; i <= 100; i++) {
  s1 += i;
}
console.log(s1);

// C2:
for (let i = 0; i <= 100; i += 15) {
  console.log(i);
}

// C3:
let n3 = prompt("Nhập n:");
if (n3 % 1 !== 0 || n3 < 0) {
  console.log("Không hợp lệ");
} else {
  let f = 1;
  for (let i = 1; i <= n3; i++) {
    f *= i;
  }
  console.log(f);
}

// C4:
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// C5:
let n5 = prompt("Nhập n:");
let b = "";
while (n5 > 0) {
  b = (n5 % 2) + b;
  n5 = (n5 / 2) | 0;
}
console.log(b);

// C6:
let n6 = prompt("Nhập n:");
let s6 = 0;
for (let i = 1; i <= n6; i++) {
  s6 = (i + s6) ** 0.5;
}
console.log(s6);

// C7:
let n7 = prompt("Nhập n:");
let s7 = 0;
for (let i = n7; i >= 1; i--) {
  s7 = (i + s7) ** 0.5;
}
console.log(s7);