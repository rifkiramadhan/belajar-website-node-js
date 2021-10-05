// Core module
// const fs = require('fs');

// const PI = require("./coba");

// Memanggil file lain dengan mengimport local module
// const cetakNama =   ('./coba')

// Third party module atau npm module di dalam fodler node_modules
// const moment = require('moment');

// console.log('Hello WPU!');

const coba = require('./coba');

// Mencetak nama dari variable
console.log(
    coba.cetakNama('Rifki Ramadhan'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang
);