const sinhVien = [
  {
    id: 1,
    hoTen: "Nguyễn Văn A",
    tuoi: 20,
    lop: "CNTT1",
    diemTrungBinh: 9.5,
    soThich: ["Đọc sách", "Chơi cờ", "Lập trình"],
  },
  {
    id: 2,
    hoTen: "Trần Thị B",
    tuoi: 21,
    lop: "CNTT2",
    diemTrungBinh: 9.0,
    soThich: ["Nghe nhạc", "Du lịch", "Nấu ăn"],
  },
  {
    id: 3,
    hoTen: "Lê Văn C",
    tuoi: 22,
    lop: "CNTT1",
    diemTrungBinh: 9.8,
    soThich: ["Chơi game", "Đá bóng", "Xem phim"],
  },
  {
    id: 4,
    hoTen: "Phạm Thị D",
    tuoi: 20,
    lop: "CNTT3",
    diemTrungBinh: 9.1,
    soThich: ["Học ngoại ngữ", "Vẽ tranh", "Nghe podcast"],
  },
  {
    id: 5,
    hoTen: "Đỗ Văn E",
    tuoi: 23,
    lop: "CNTT2",
    diemTrungBinh: 8.9,
    soThich: ["Nấu ăn", "Xem bóng đá", "Chạy bộ"],
  },
];
//Map methods : forEach()
function render(arrSinhVien) {
  var renderString = "";
  arrSinhVien.forEach((item, index) => {
    renderString =
      renderString +
      `<tr class="item">
          <td class="item">${index + 1}</td>
          <td class="item">${item.hoTen}</td>
          <td class="item">${item.tuoi}</td>
          <td class="item">${item.lop}</td>
          <td class="item">${item.diemTrungBinh}</td>
        </tr>`;
  });

  document.getElementById("target").innerHTML = renderString;
}
render(sinhVien);
//find(), filter()
//find(): trả về phần tử đầu tiên thỏa mãn điều kiện return
//filter(): trả về một mảng với tất cả các phần tử thỏa mẫn điều kiện return
// var sinhVienXuatSac = sinhVien.find((item, index) => {
//   return item.diemTrungBinh >= 9;
// });
// console.log(sinhVienXuatSac);
// var arrSinhVienTrungBinh = sinhVien.filter((s) => s.diemTrungBinh < 7);

// console.log(arrSinhVienTrungBinh);
//In vào console thông tin của sinh viên có sở thích là xem bóng đá
//includes : trả về true nếu mảng chứa phần tử là tham số truyền vào includes, false nếu ngược lại
// var arrfavSV = sinhVien.filter((s) => s.soThich.includes("Xem bóng đá"));
// console.log(arrfavSV);

// some() và every() some giống toàn tử ||, every() giống toán tử &&
//some() trả về true nếu có 1 phần tử thỏa mãn điều kiện
//every() trả về true nếu có tất phần tử thỏa mãn điều kiện

// var coSinhVienXuatSac = sinhVien.some((s) => s.diemTrungBinh > 9);
// console.log(coSinhVienXuatSac);

// var tatCaDeuLaSinhVienXuatSac = sinhVien.every((s) => s.diemTrungBinh >= 9);
// console.log(tatCaDeuLaSinhVienXuatSac);

//reduce()
// var tongDiem = sinhVien.reduce((bienLuuTru, item, index, arr) => {
//   bienLuuTru = bienLuuTru + item.diemTrungBinh;
//   return bienLuuTru;
// }, 0);
// console.log(tongDiem);
// console.log(tongDiem / sinhVien.length);
// var arrNumber = [1, 2, 5, 6, 7, 8];
// //Tìm min max
// var maxNumber = arrNumber.reduce((khoiTao, item) => {
//   if (item < khoiTao) {
//     khoiTao = item;
//   }
//   return khoiTao;
// }, arrNumber[0]);
// console.log(maxNumber);

//Bài tập : viết hàm thêm sinh viên vào trong mảng sinhVien bên trên thông qua một form
//Với mỗi sinh viên tọa một nút xóa, khi ấn vào nút xóa thì xóa dữ liệu sinh viên trong mảng và render lại
