// Cara export menggunakan function
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

// Cara export menggunakan variable
const PI = 3.14;

// Cara export menggunakan object
const mahasiswa = {
    nama : 'Doddy Ferdiansyah',
    umur : 20,
    cetakMhs() {
        return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
    },
};

// Cara export mengunakan class
class Orang {
    constructor() {
        console.log('Object Orang Telah Dibuat');
    }
}

// Fungsi cetak nama akan bisa digunakan oleh file manapun yang menuliskan variable untuk merequire ke dalam file ini
// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama : cetakNama,
//     PI : PI,
//     mahasiswa : mahasiswa,
//     Orang : Orang,
// };

module.exports = {
    cetakNama,
    PI,
    mahasiswa,
    Orang
};