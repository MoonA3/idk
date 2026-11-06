// C1: Hình chữ nhật
let a = 10, b = 5;
let S = a * b, P = (a + b) * 2;
console.log(S, P);

// C2: Đổi giây
let S2 = 12345;
let h = (S2 / 3600) | 0;
let m = ((S2 % 3600) / 60) | 0;
let s = S2 % 60;
console.log(`${h}h ${m}m ${s}s`);

// C3: Lũy thừa
let x = 5, n = 2;
console.log(x ** n);

// C4: Trung bình cộng
let n1 = 4, n2 = 7, n3 = 10;
console.log((n1 + n2 + n3) / 3);

// C5: Khoảng cách 2 điểm
let x1 = 1, y1 = 2, x2 = 4, y2 = 6;
let d = ((x2 - x1)**2 + (y2 - y1)**2) ** 0.5;
console.log(d);

// C6: Số thứ nhất lớn nhất
let a6 = 15, b6 = 10, c6 = 8;
console.log(a6 > b6 && a6 > c6);

// C7: So sánh chuỗi
let s1 = "Tôi là ai?", s2 = "Tôi là ai?";
console.log(s1 === s2);

// C8: Số dương
let num = 5;
console.log(num, num > 0);

// C9: Năm nhuận
let y = 2024;
let isLeap = (y % 400 === 0) || (y % 4 === 0 && y % 100 !== 0);
console.log(y, isLeap);

// C10: So sánh giờ phút
let h1 = 23, m1 = 30, h2 = 19, m2 = 50;
console.log(h1 * 60 + m1 > h2 * 60 + m2);

//
let you="sad";
console.log(you);