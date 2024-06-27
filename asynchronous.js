/**
 * ASYNCHRONOUS
 *
 */
function kalikan(a, b) {
  return a * b;
}
function hitungLuas(sisi) {
  return kalikan(sisi, sisi);
}
function cetakLuasKotak(sisi) {
  const luas = hitungLuas(sisi);
  console.log(luas);
}

cetakLuasKotak(5);

// function satu() {
//   console.log("satu");
// }
// function dua() {
//   console.log("function 2 mau di ekseksi");
//   setTimeout(() => {
//     console.log("dua");
//   }, 3000);
// }

// function tiga() {
//   console.log("tiga");
// }

// satu();
// dua();
// tiga();
