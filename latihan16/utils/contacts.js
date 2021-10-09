// Memanggil Core Module
// File System
const fs = require('fs');

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

// Mengambil semua data di contact.json
const loadContact = () => {
    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');
    const contacts = JSON.parse(fileBuffer);
    return contacts;
};

// Mencari contact berdasarkan nama
const findContact = (nama) => {
    const contacts = loadContact();

    // Mencari kontak kalau misalkan datanya ketemu, kalau tidak maka undefined
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return contact;
};

// Menuliskan / menimpa file contacts.json dengan data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
};

// Menambahkan data contact baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
};

// Mengecek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama);
};

// Mengeksport file
module.exports = {loadContact, findContact, addContact, cekDuplikat};