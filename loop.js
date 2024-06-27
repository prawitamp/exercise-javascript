// pakai for loop
function bintang(a) {
  let pola = "";
  for (let i = 0; i < a; i++) {
    for (let j = 0; j <= i; j++) {
      pola += "*";
    }
    pola += "\n"; //new line
  }
  return pola;
}
console.log(bintang(5));
