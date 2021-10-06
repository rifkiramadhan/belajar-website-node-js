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
}).demandCommand();

// Menampilkan daftar semua nama dan no hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no hp contact',
    handler() {
        contacts.listContact();
    },
});

// Menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

// Menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: "Nama Lengkap",
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();