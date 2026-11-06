//B1:
function bai1(A, B, x) {
  return A * x + B;
}
console.log(bai1(3, 4, 5));

//B2:
function bai2(rong, dai) {
  return (rong + dai) * 2;
}
console.log(bai2(10, 15));

//B3:
function bai3(r) {
  let pi = 3.14159;
  let dt = pi * r * r;
  return ((dt * 100 + 0.5) | 0) / 100;
}
console.log(bai3(5));

//B4:
function bai4(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(bai4(17));

//B5:
function bai5(...daySo) {
  let tong = 0;
  for (let i = 0; i < daySo.length; i++) {
    tong += daySo[i];
  }
  return tong;
}
console.log(bai5(1, 2, 3, 4, 5));

//B6:
function bai6(dau, cuoi) {
  let tong = 0;
  for (let i = dau; i <= cuoi; i++) {
    tong += i;
  }
  return tong;
}
console.log(bai6(5, 10));

//B7:
function bai7(chuoi) {
  let len = chuoi.length;
  for (let i = 0; i < (len / 2 | 0); i++) {
    if (chuoi[i] !== chuoi[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(bai7("madam"));

//B8:
function bai8(mang) {
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}
console.log(bai8([2, 4, 6, 8, 10]));

//B9:
function bai9(mang) {
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    if (mang[i] > 0) {
      tong += mang[i];
    }
  }
  return tong;
}
console.log(bai9([3, -1, 4, -2, 5]));

//B10:
function bai10(...daySo) {
  let max = daySo[0];
  for (let i = 1; i < daySo.length; i++) {
    if (daySo[i] > max) {
      max = daySo[i];
    }
  }
  return max;
}
console.log(bai10(1, 3, 7, 0, -2));

//B11:
function bai11(mang) {
  for (let i = 0; i < mang.length - 1; i++) {
    for (let j = 0; j < mang.length - 1 - i; j++) {
      if (mang[j] > mang[j + 1]) {
        let temp = mang[j];
        mang[j] = mang[j + 1];
        mang[j + 1] = temp;
      }
    }
  }
  return mang;
}
console.log(bai11([12, 33, 45, 7, 89]));

//B12:
function bai12(mang, k) {
  let loc = [];
  for (let i = 0; i < mang.length; i++) {
    let co = false;
    for (let j = 0; j < loc.length; j++) {
      if (loc[j] === mang[i]) {
        co = true;
        break;
      }
    }
    if (!co) {
      loc[loc.length] = mang[i];
    }
  }

  for (let i = 0; i < loc.length - 1; i++) {
    for (let j = 0; j < loc.length - 1 - i; j++) {
      if (loc[j] < loc[j + 1]) {
        let temp = loc[j];
        loc[j] = loc[j + 1];
        loc[j + 1] = temp;
      }
    }
  }
  return loc[k - 1];
}
console.log(bai12([2, 5, 2, 7, 9, 10], 3));

//B13:
function bai13(mang) {
  let dem = {}, maxDem = 0, ketQua = mang[0];
  for (let i = 0; i < mang.length; i++) {
    let x = mang[i];
    dem[x] = (dem[x] || 0) + 1;
    if (dem[x] > maxDem || (dem[x] === maxDem && x > ketQua)) {
      maxDem = dem[x];
      ketQua = x;
    }
  }
  return ketQua;
}
console.log(bai13([1, 2, 3, 2, 1, 1, 4, 5, 10]));

//B14:
function bai14(chuoi) {
  let ketQua = [];
  let tu = "";
  for (let i = 0; i < chuoi.length; i++) {
    if (chuoi[i] === " ") {
      if (tu.length > 0) {
        ketQua[ketQua.length] = tu;
        tu = "";
      }
    } else {
      tu += chuoi[i];
    }
  }
  if (tu.length > 0) {
    ketQua[ketQua.length] = tu;
  }
  return ketQua;
}
console.log(bai14("This is a test"));

//B15:
function bai15(doiTuong) {
  let tong = 0;
  for (let k in doiTuong) {
    if (typeof doiTuong[k] === "number") {
      tong += doiTuong[k];
    }
  }
  return tong;
}
console.log(bai15({ a: 1, b: "hello", c: 3, d: "world" }));