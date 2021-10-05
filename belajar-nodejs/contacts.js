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
}

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama,
        email,
        noHP
    };

    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);
    
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

module.exports = {
    simpanContact
};