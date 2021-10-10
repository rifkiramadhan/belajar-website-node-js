const { error } = require('console');
const { MongoClient, ObjectID } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'wpu';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) {
        return console.log('Koneksi gagal');
    };
    // console.log('Koneksi berhasil');

    // Memilih database
    const db = client.db(dbName);

    // Menambahkan satu data ke collections mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: "Erik",
    //         email: "erik@gmail.com"
    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Gagal menambahkan data!');
    //         }

    //         console.log(result);
    //     }
    // );

    // Menambahkan lebih dari satu data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Erik',
    //             email: 'erik@yahoo.com'
    //         },
    //         {
    //             nama: 'Avip',
    //             email: 'avip@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if(error) {
    //             return console.log('Data gagal ditambahkan!');
    //         };

    //         console.log(result);
    //     }
    // )

    // Menampilkan semua data yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find()
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

    // Menampilkan satu data berdasarkan kriteria yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //         .collection('mahasiswa')
    //         .find({ _id: ObjectID('6161c404c9d4f352f8980a0d') })
    //         .toArray((error, result) => {
    //             console.log(result);
    //         })
    // );

    // Mengubah satu data berdasarkan kriteria id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('6162e429f6dcef11a8bbd029'),
    //     },
    //     {
    //         $set: {
    //             email: 'avip@yahoo.com',
    //         },
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Mengubah data lebih dari satu berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Erik',
    //     },
    //     {
    //         $set:{
    //             nama: 'Erik Doank',
    //         },
    //     }
    // );

    // Menghapus datu data berdasarkan kriteria id
    // db.collection('mahasiswa').deleteOne(
    //     {
    //         _id: ObjectID('6162e429f6dcef11a8bbd029'),
    //     }
    //  ).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // });

    // Menghapus lebih dari satu data berdasarkan kriteria id
    db.collection('mahasiswa').deleteMany(
        {
            nama: 'Erik Doank',
        }
     ).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });
});