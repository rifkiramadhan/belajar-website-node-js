// console.log('Hello World!');

function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

// Fungsi cetak nama akan bisa digunakan oleh file manapun yang menuliskan variable untuk merequire ke dalam file ini
module.exports = cetakNama;
