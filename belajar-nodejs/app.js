const yargs = require("yargs");
const contacts = require("./contacts");

// Ketika perintah add dijalankan maka harus mengisi nama, email dan no hp
yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: "Email",
            demandOption: false,
            type: 'string',
        },
        noHP: {
            describe: "Nomor Handphone",
            demandOption: false,
            type: 'string',
        },
    },
    handler(argv) {
       contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
});

yargs.parse();

// Mengambil argument dari command line
// const command = process.argv[2];

// Jika command nya adalah add
// if(command === 'add') {
//     // Menambah data contact

// } else if (command === 'remove') {
//     // Menghapus data contact

// } else if (command === 'list') {
//     // Menampilkan semua contact

// }

// console.log(yargs.argv);


// const contacts = require('./contacts');

// // Variable untuk fungsi untama menggunakan async dan await
// const main = async () => {
//     const nama = await contacts.tulisPertanyaan('Masukkan nama Anda : ');
//     const email = await contacts.tulisPertanyaan('Masukkan email Anda : ');
//     const noHP = await contacts.tulisPertanyaan('Masukkan No Hp Anda : ');

//     contacts.simpanContact(nama, email, noHP);
// };
// main();
