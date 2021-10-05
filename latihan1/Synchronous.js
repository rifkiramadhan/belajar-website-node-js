// Synchronous

const getUserSync = (id) => {
    // let nama = '';

    // // Jika id nya bernilai satu
    // if( id === 1 ) {
    //     // Maka usernya nama saya
    //     nama = 'Rifki';
    // } else {
    //     nama = 'Ramadhan';
    // };

    // Menggunakan operator ternary
    const nama = id === 1 ? 'Rifki' : 'Ramadhan';
    
    // Mereturn object id
    return {
        // id: id,
        // nama: nama

        id,
        nama
    };
};  

// Baris misalnya merequest data ke file lain
// const getUserSync = require('./src/getUserSync');

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World!';
console.log(halo);