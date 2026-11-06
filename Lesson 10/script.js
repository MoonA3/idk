function tinhChuVi(chieurong, chieucao) {
    //logic here
    let chuVi = (chieurong + chieucao) * 2;
    return chuVi;
}

// let chuViHinh1 = tinhChuVi(20, 10);
// let chuViHinh2 = tinhChuVi(200, 5000);

function cacCongViecBuoiSang(thu, gio) {
    console.log(`Thứ ${thu}`);
    console.log(`Thức dậy lúc ${gio} giờ sáng`);
    console.log("Ăn sáng");
    console.log("Đi ngủ")
}
cacCongViecBuoiSang(2, 8);
cacCongViecBuoiSang(3, 9);
cacCongViecBuoiSang(4, 10);