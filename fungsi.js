// alternatif pakai FUNGSI

function addName() {
  return "prawita";
}
alert(addName());
// -----------------------------------------------------------
function addName(fullname) {
  return fullname;
}
alert(addName("praw cantik"));
// -----------------------------------------------------------

function addName(fullname) {
  console.log(fullname);
}
addName("prawww");
// -----------------------------------------------------------

function addName(firstname, lastname) {
  // cara 1 ---> log(firsname, lastname);
  // cara 2
  console.log("nama depan aku :", firstname);
  console.log("nama belakang aku :", lastname);
}
addName("arman", "cibaw");

// -----------------------------------------------------------
function namaGelar(nama, gelar) {
  return `nama aku : ${nama}, gelar aku : ${gelar}`;
}
console.log(namaGelar("praw", "s.pd"));
// -----------------------------------------------------------

function sekolah() {
  console.log(`nama sekolah : `, arguments[0]);
  console.log(`nama domsili : `, arguments[1]);
}
sekolah("smp 7", "kota serang");

// jika tidak tau arguments nya ke berapa bisa pake LENGTH
// -----------------------------------------------------------

// cara ribet untuk kasus tertentu
function siswa() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(`nama siswa :`, arguments[i]);
  }
}
siswa("lingga", "merlina", "melati", "khairul");

// -----------------------------------------------------------
// pakai ini aja yang simple
function fullnameGuru(firsname, lastname) {
  console.log(firsname, lastname);
}
fullnameGuru("awit", "pujiatin");
// -----------------------------------------------------------
// pakai VARIABLE
const guru = function mapel(namaMapel, hari) {
  console.log(namaMapel, hari);
};
guru("ipa", "rabu");

// -----------------------------------------------------------
// CARA 1 ---- KEYWORD NEW FUNCTION
const sum1 = new Function("a", "b", "console.log(a + b)");

// -----------------------------------------------------------
// CARA 2 ---- STANDARD FUNCTION
// hati hati ini bisa hoisting (pemanggilan meskipun di atas function tetap bisa running)
function sum2(a, b) {
  return a + b;
  //   console.log(a + b); //bisa pakai clog atau return (return -> console.log)
}

// -----------------------------------------------------------
// CARA 3 ---- ARROW FUNCTION
const sum3 = (a, b) => {
  return a + b;
  //   console.log(a + b); //bisa pakai clog atau return (return -> console.log)
};

// -----------------------------------------------------------
// panggil lagi fungsi nya
sum1(2, 2);
console.log(sum2(4, 4));
console.log(sum3(5, 5));

// -----------------------------------------------------------
// kita coba
function randomize() {
  const randomNumber = Math.floor(Math.random() * 1000);
  if (randomNumber > 200) {
    return [`wah lebih dari 200 nih`, randomNumber];
  } else {
    return randomNumber;
  }
}
console.log(randomize());

// -----------------------------------------------------------
/* TUGAS
1. MEMBUAT PERHITUNGAN MATEMATIKA
- 1.1 luas lingkaran
- 1.2 luas segitiga
- 1.3 luas persegi panjang
- 1.4 luas jajargenjang
- 1.5 luas persegi
- 1.6 volume kubus
- 1.7 volume tabung
- 1.8 ganjil genap
- 1.9 konversi suhu
- 1.10 check nilai positif/ negatif
- 1.11 menentukan nilai terbesar dari 3 parameter
- 1.12 searching pada parameter string
- 1.13 palindrom

2. Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal :
- nama karyawan
- gaji perhari
- jumlah hari masuk kerja
*/

//1.1 Luas lingkaran
const luasLingkaran = (r) => {
  const hitungan = Math.PI * r ** 2;
  if (hitungan > 10) {
    return [`Wah lebih dari 10`, hitungan];
  } else {
    return [`oke good`, hitungan];
  }
};
console.log(luasLingkaran(5));

// 1.2 Luas Segitiga
const luasSegitiga = (alas, tinggi) => {
  const hitung = (1 / 2) * alas * tinggi;
  return hitung;
};
console.log(luasSegitiga(7, 10));

// 1.3 Luas persegi panjang
function persegiPanjang(panjang, lebar) {
  return panjang * lebar;
}
console.log(persegiPanjang(5, 8));

// 1.4 Luas jajargenjang
const jajargenjang = (alas, tinggi) => alas * tinggi;
const alas = 5;
const tinggi = 3;
const hitunglah = jajargenjang(alas, tinggi);
console.log(
  `Luas jajargenjang dengan alas ${alas} dan tinggi ${tinggi} adalah ${hitunglah} `
);

// 1.5 luas persegi
function luasPersegi(sisi) {
  return sisi ** 2;
}
console.log(luasPersegi(8));

// 1.6 volume kubus (sisi * sisi * sisi)
function volumeKubus(s) {
  return pangkat(s, 3);
}
console.log(volumeKubus(5));

function pangkat(s, n) {
  return s ** n;
}

// 1.7 volume tabung
function volumeTabung (r, t) {
    return Math.PI * r * r * t
}
console.log (volumeTabung(5, 10));

// 1.8 ganjil genap
const cekGanjilGenap = 

// 1.9 konversi suhu
// 1.10 check nilai positif/ negatif
// 1.11 menentukan nilai terbesar dari 3 parameter
// 1.12 searching pada parameter string
// 1.13 palindrom

/* 2. Menghitung total gaji yang di dapat dalam satu bulan dengan input minimal :
- nama karyawan
- gaji perhari
- jumlah hari masuk kerja */
const totalGaji = (namaKaryawan, gajiperHari, jumlahKehadiran) => {
    // hitung total gaji
    const hitungTotalGaji = gajiperHari * jumlahKehadiran * 30; //hari
    // pesan output
    const pesanOutput = `Total gaji ${namaKaryawan} dalam sebulan, dengan gaji per hari ${gajiperHari}, dan masuk kerja selama ${jumlahKehadiran} hari, adalah ${hitungTotalGaji}`;
    return pesanOutput;
}
// contoh penggunaan
const namaKaryawan = "praw";
const gajiperHari = 900000;
const jumlahKehadiran = 22;

console.log(totalGaji(namaKaryawan, gajiperHari, jumlahKehadiran));
