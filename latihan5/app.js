// Memanggil Core Module
// File System
const fs = require('fs');

// Menuliskan string ke file secara (synchronous)
// try {
//     fs.writeFileSync('data/test.txt', 'Hello World! secara synchronous');
// } catch(e) {
//     console.log(e);
// }

// Menuliskan string ke file ssecara (asynchronous)
// fs.writeFile('data/contacts.json', 'Hello World! secara Asynchronous', (e) => {
//     console.log(e);
// });

// Membaca isi file secara (synchronous)
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// Membaca isi file secara (Asynchronous)
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
// });

// Readline
const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('Masukkan nama Anda : ', (nama) => {
    rl.question('Masukkan nomor HP Anda : ', (noHP) => {

        const contact = {
            nama,
            noHP 
        };

        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        // console.log(contacts);

        contacts.push(contact);
        
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log('Terimakasih sudah memasukkan data.')

        rl.close();
    });
});