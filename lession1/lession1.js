//Extensions: auto close tag, auto rename tag, html css support, live server, prettier,
//Biến và phạm vị biến
// 3 cách khai báo biến : var , let , const
// Biến cục bộ : let , const, giá trị của biến khai báo bằng const thì không thể bị thay đổi
//Biến toàn cục : var

// {
//   var a = 7;
//   var a = 6;
//   let b = 9;
//   b = 10;
//   console.log(b);
//   const c = 12;
//   c = 16;
//   //   let b = 10;
// }
// console.log(a);
// // console.log(b);
// console.log(c);

//Chuỗi
// var hoTen = "Minh";
// var ngheNghiep = "Giảng viên";
// var loiChao = `Xin chào ${hoTen} nghề nghiệp ${ngheNghiep}`;
// console.log(loiChao);

//Hàm : fuction
// var tinhTong = (a, b) => {
//   console.log(a + b);
// };
// var arrNumber = [1, 2, 3];
// var newArr = arrNumber.map(value => {
//   return value * 2;
// });
// console.log(newArr);
// tinhTong(5, 7);
//arrow function
// (()=>{console.log('Đây là một function được kích hoạt ngay lập tức')})()//IIFE

//Destructuring
var arr = [1, 2, 3];
// var ojb = {ten: "Minh", ngheNghiep:"Giảng viên", "/" : "https://go-vietnam.vn/"}
var arr2 = [2, 3, 4];

// var {ten,ngheNghiep} = ojb
// console.log(ten,ngheNghiep)
//Spread,rest

// var [first, ...rest] = arr
// console.log(first,rest)
//Spread,rest
// var arrCopy = [...arr]
// arrCopy[0] = 9

// var [first,...rest] = arr
// console.log(rest)
// var temp = arr[0]
// arr[0] = arr[2]
// arr[2] = temp
// console.log(arr)
var [f, s, t] = arr;
arr = [t, s, f];
console.log(arr);

var students = [
  { ten: "Minh", chuyenNganh: "Công nghệ thông tin" },
  { ten: "Ngọc", chuyenNganh: "Du lịch" },
  { ten: "Tuấn", chuyenNganh: "Nhà Hàng khách sạn" },
  { ten: "Hòa", chuyenNganh: "Đồ họa" },
];
//Hiển thị ra màn hình thông tin của các sinh viên trên theo dạng bảng
//Viết Hàm in vào console thông tin của các sinh viên mà người dùng nhập vào thông qua promt
