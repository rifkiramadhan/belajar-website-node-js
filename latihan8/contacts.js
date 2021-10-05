// Memanggil Core Module
// File System
const { rejects } = require('assert');
const fs = require('fs');

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});


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

// Menggunakan Promise
const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        });
    });
};

const simpanContact = (nama, email, noHP) => {
    const contact = {
        nama,
        email,
        noHP
    };

    const file = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(contact);
        
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
    console.log('Terimakasih sudah memasukkan data.')

    rl.close();
};

module.exports = {
    tulisPertanyaan,
    simpanContact
};

// const pertanyaan2 = () => {
//     return new Promise((resolve, reject) => {
//         rl.question('Masukkan email Anda : ', (email) => {
//             resolve(email);
//         });
//     });
// };
