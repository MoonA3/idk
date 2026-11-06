// C1
const ten1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(ten1[0], ten1[ten1.length - 1]);
let tenMoi = ["Alice", "mindX"];
for (let i = 1; i < ten1.length; i++) {
  tenMoi[tenMoi.length] = ten1[i];
}
tenMoi[tenMoi.length] = "bye";
console.log(tenMoi);

// C2
const ten2 = ["John", "Jane", "Jim", "Jake"];
ten2[1] = "Mary";
console.log(ten2);

// C3
const ten3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i < ten3.length; i++) {
  console.log(ten3[i]);
}

// C4
const ten4 = ["Alice", "Bob", "Charlie", "David"];
ten4[ten4.length] = "MindX";
console.log(ten4);

// C5
const so5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soLe = [];
for (let i = 0; i < so5.length; i++) {
  if (so5[i] % 2 !== 0) {
    soLe[soLe.length] = so5[i];
  }
}
console.log(soLe);

// C6
const ten6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let tim = false;
for (let i = 0; i < ten6.length; i++) {
  if (ten6[i] === "David") {
    tim = true;
    break;
  }
}
console.log(tim);

// C7
const so7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
let dem = 0;
for (let i = 0; i < so7.length; i++) {
  if (so7[i] === 2) {
    dem++;
  }
}
console.log(dem);

// C8
const so8 = [5, 2, 9, 3, 7, 11, 8];
let max = so8[0];
for (let i = 1; i < so8.length; i++) {
  if (so8[i] > max) {
    max = so8[i];
  }
}
console.log(max);

// C9
const goc9 = [1, 2, 3, 4, 5];
let dao9 = [];
for (let i = goc9.length - 1; i >= 0; i--) {
  dao9[dao9.length] = goc9[i];
}
console.log(dao9);

// C10
const trung10 = [1, 2, 2, 3, 4, 4, 5];
let loc10 = [];
for (let i = 0; i < trung10.length; i++) {
  let daCo = false;
  for (let j = 0; j < loc10.length; j++) {
    if (loc10[j] === trung10[i]) {
      daCo = true;
      break;
    }
  }
  if (!daCo) {
    loc10[loc10.length] = trung10[i];
  }
}
console.log(loc10);

// C11
const so11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let tong = 0;
for (let i = 0; i < so11.length; i++) {
  tong += so11[i];
}
console.log(tong);