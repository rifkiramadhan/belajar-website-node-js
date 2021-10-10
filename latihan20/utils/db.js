const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

// Menambahkan satu data
// const contact1 = new Contact({
//     nama: 'Doddy Ferdiansyah',
//     nohp: '082122115555',
//     email: 'doddy@gmail.com',
// });

// // Menyimpan ke collection
// contact1.save().then((contact) => console.log(contact));


