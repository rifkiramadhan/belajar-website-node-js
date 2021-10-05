const validator = require('validator');
const chalk = require('chalk');

// Apakah string validasi ini adalah email ?, jika benar maka true
// console.log(validator.isEmail('rrportal07@gmail.com'));

// Apakah string validasi ini adalah nomor telepon ?, jika benar maka true
// console.log(validator.isMobilePhone('08012345678', 'id-ID'));

// Apakah string validasi ini adalah angka ?, jika benar maka true
// console.log(validator.isNumeric('08012345678'));

// Untuk mencetak hello world dengan background warna biru dan tulisan miring
// console.log(chalk.italic.bgBlue.black('Hello World!'));

const nama = 'Rifki';
const pesan = chalk`Lorem ipsum dolor {bgRed.black.bold sit, amet} consectetur {bgGreen.italic.black adipisicing} elit. Quae, officiis!. Nama saya : ${nama}`;
console.log((pesan));