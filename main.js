// Họ tên: Trần Văn Mạnh
// MSSV: 2180607053

// Khởi tạo mảng
const mangSo = [1, 2, 3, 4, 5];

// 1. map: Đưa ra kết quả là phần tử chẵn hay lẻ
const ketQuaMap = mangSo.map(so => {
  return so % 2 === 0 ? 'chẵn' : 'lẻ';
});

// 2. reduce: Đưa ra tích của các phần tử trong mảng
const ketQuaReduce = mangSo.reduce((tich, soHienTai) => {
  return tich * soHienTai;
}, 1);

// 3. filter: Lọc ra các phần tử chẵn
const ketQuaFilter = mangSo.filter(so => {
  return so % 2 === 0;
});

// 4. some: Kiểm tra xem có phần tử nào chia hết có 2 không?
const ketQuaSome = mangSo.some(so => {
  return so % 2 === 0;
});

// 5. every: Kiểm tra xem tất cả phần tử trong mảng có chia hết cho 3 hay không?
const ketQuaEvery = mangSo.every(so => {
  return so % 3 === 0;
});

// In kết quả ra console
console.log("Mảng ban đầu:", mangSo);
console.log("Kết quả map (chẵn/lẻ):", ketQuaMap);
console.log("Kết quả reduce (tích):", ketQuaReduce);
console.log("Kết quả filter (số chẵn):", ketQuaFilter);
console.log("Kết quả some (có số chia hết cho 2):", ketQuaSome);
console.log("Kết quả every (tất cả chia hết cho 3):", ketQuaEvery);