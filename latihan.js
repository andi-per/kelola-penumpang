// tambahPenumpag(namaPenumpang, penumpang); & hapus penumpang
var penumpang = [];

// array untuk cek nama non-case senstive
var cekNamaSama = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array. bisa pakai push() juga
    penumpang.unshift(namaPenumpang);
    // tambah ke array untuk cek tapi versi huruf kecil
    cekNamaSama.push(namaPenumpang.toLowerCase());
    return penumpang;
  } else {
    // telusuri seluru isi kursi
    for (let i = 0; i < penumpang.length; i++) {
      //jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // cek dulu seluruh kursi apakah ada yg sama namanya pakai array cek nama
        if (cekNamaSama.includes(namaPenumpang.toLowerCase())) {
          // include utk cek apakah isi array ada yg sama dengan yang baru diinput
          console.log('penumpang bernama ' + namaPenumpang + ' sudah ada.');
          return penumpang;
        } else {
          penumpang[i] = namaPenumpang;
          cekNamaSama[i] = namaPenumpang.toLowerCase(); //tambahkan element yg sama tapi lowercase
          // kembalikan isi array dan kelaur dari function
          return penumpang;
        }
      } else if (namaPenumpang.toLowerCase() == cekNamaSama[i]) {
        console.log('penumpang bernama ' + namaPenumpang + ' sudah ada.');
        return penumpang;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        cekNamaSama.push(namaPenumpang.toLowerCase()); //tambahkan lagi
        return penumpang;
      }
    }
  }
};

// hapusPenumpang(namaPenumpang,penumpang);

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tampilkan pesan angkot masih kosong
    console.log('angkot masih kosong');
    return penumpang;
  } else {
    // telusuri seluru isi penumpang
    for (let i = 0; i < penumpang.length; i++) {
      //jika ada nama yg sama
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang jadi undefined
        penumpang[i] = undefined;
        cekNamaSama[i] = undefined; //sama juga dibagian hapus
        // cek isi array apakah semua undefined
        if (cekAngkot(penumpang) == true) {
          // hapus semua undefined, untuk menghilangkan bug undefined
          penumpang.length = 0;
          cekNamaSama.length = 0;
          console.log('angkot kosong. Penumpang terakhir sudah turun.');
          return penumpang;
        } else {
          return penumpang;
        }
      } else if (i == penumpang.length - 1) {
        // cek semuanya
        // nama tidak sama.tampilkan pesan kesalahan
        console.log('Tidak ada penumpang bernama ' + namaPenumpang.toUpperCase + '.');
        // return bikin keluar dari seluruh isi funtion
        return penumpang;
      }
    }
  }
};

// utk cek apakah semua isi array nya undefined. hasilnya true dan false
var cekAngkot = function (penumpang) {
  var checkPenumpang = penumpang.every((value) => value === undefined);
  return checkPenumpang;
};
