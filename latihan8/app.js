const contacts = require('./contacts');

// Variable untuk fungsi untama menggunakan async dan await
const main = async () => {
    const nama = await contacts.tulisPertanyaan('Masukkan nama Anda : ');
    const email = await contacts.tulisPertanyaan('Masukkan email Anda : ');
    const noHP = await contacts.tulisPertanyaan('Masukkan No Hp Anda : ');

    contacts.simpanContact(nama, email, noHP);
};
main();


// Menggunakan Callback
// rl.question('Masukkan nama Anda : ', (nama) => {
//     rl.question('Masukkan nomor HP Anda : ', (noHP) => {

//         const contact = {
//             nama,
//             noHP 
//         };

//         const file = fs.readFileSync('data/contacts.json', 'utf-8');
//         const contacts = JSON.parse(file);
//         // console.log(contacts);

//         contacts.push(contact);
        
//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
//         console.log('Terimakasih sudah memasukkan data.')

//         rl.close();
//     });
// });