// Asynchronous

// Contoh require untuk setiap modul pada node js
// const getUser = require('./src/getUser');

const getUser = (id, cb) => {

    // Jika id nya 1 maka 3 detik, dan jika id nya 2 maka 2 detik
    const time = id === 1 ? 3000 : 2000;

    setTimeout(() => {
        const nama = id === 1 ? 'Rifki' : 'Ramadhan';
        cb({
            id,
            nama
        });
    }, time);
};

const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World!';
console.log('Selesai');