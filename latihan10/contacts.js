// Memanggil Core Module
// File System
const fs = require('fs');
const chalk = require('chalk');
const validator= require('validator');

// Membuat folder data jika belum ada
// Apakah ada folder data ?, jika belum ada maka akan dibuatkan
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
}

// Membuat file contacts.json jika belum ada
// Apakah ada file data path ?, jika belum ada maka akan dibuatkan
const dataPath = './data/contacts.json';
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    return contacts;
};

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama,
        email,
        noHP
    };

    // const file = fs.readFileSync('data/contacts.json', 'utf-8');
    // const contacts = JSON.parse(file);

    const contacts = loadContact();

    // Mengecek duplicate data
    const duplikat = contacts.find((contact) => contact.nama === nama);
    // Jika ada isinya
    if(duplikat) {
        console.log(chalk.red.inverse.bold('Contact sudah terdaftar, gunakan nama lain!'));
        return false;
    }

    // Mengecek email
    if(email) {
        // Jika emailnya salah
        if(!validator.isEmail(email)) {
            console.log(chalk.red.inverse.bold('Email tidak valid!'));
            return false;
        }
    }

    // Mengecek nomor hp
    // Jika nomornya salah
    if(!validator.isMobilePhone(noHP, 'id-ID')) {
        console.log(chalk.red.inverse.bold('Nomor HP tidak valid!'));
        return false;
    }

    contacts.push(contact);
        
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log(chalk.green.inverse.bold('Terimakasih sudah memasukkan data.'));
};

const listContact = () => {
    const contacts = loadContact();

    console.log(chalk.cyan.inverse.bold('Daftar Kontak : '));
    // Setiap kontak yang ada di dalam contacts
    contacts.forEach((contact, i) => {
        console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
    });
};

const detailContact = (nama) => {
    const contacts = loadContact();

    // Mencari kontak kalau misalkan datanya ketemu, kalau tidak maka undefined
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase())

    if(!contact) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    };
    
    console.log(chalk.cyan.inverse.bold(contact.nama));
    console.log((contact.noHP));
    if(contact.email) {
        console.log((contact.email));
    };
};

const deleteContact = (nama) => {
    const contacts = loadContact();
    
    const newContacts = contacts.filter((contact) => contact.nama.toLowerCase() !== nama.toLowerCase());

    if(contacts.length === newContacts.length) {
        console.log(chalk.red.inverse.bold(`${nama} tidak ditemukan!`));
        return false;
    };

    fs.writeFileSync('data/contacts.json', JSON.stringify(newContacts));
    console.log(chalk.green.inverse.bold(`Data contact ${nama} berhasil dihapus!`));
};

// Export module supaya dapat digunakan di halaman app
module.exports = {
    simpanContact,
    listContact,
    detailContact,
    deleteContact
};