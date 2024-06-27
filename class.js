class Siswa {
  constructor(username, password, nama_kelas) {
    this.username = username;
    this.password = password;
    this.nama_kelas = nama_kelas;
  }
  gabung() {
    console.log(
      this.username + " telah bergabug pada kelas " + this.nama_kelas
    );
  }
}

// let tambahSiswa = new Siswa("Merlina", "123123", "Fashion Design");
// tambahSiswa.gabung();
// di komen dulu karna mau inheritance

// Mari Kita INHERITANCE
class Langganan extends Siswa {
  constructor(username, paket) {
    super(username);
    this.paket = paket;
  }
  gabungPaket() {
    console.log("Hi " + this.username + " telah langganan paket " + this.paket);
  }
}

let tambahLangganan = new Langganan("Lingga", "Premium");
tambahLangganan.gabungPaket();
