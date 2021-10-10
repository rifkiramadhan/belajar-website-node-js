const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const {body, validationResult, check} = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');
const { result } = require('lodash');

const app = express();
const port = 3000;

// Mensetup method override
app.use(methodOverride('_method'));

// Mensetup EJS
// Menggunakan EJS
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayouts);

// Build-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// Konfigurasi flash
app.use(cookieParser('secret'));
app.use(
  session({
    cookie: {maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// Halaman Home
app.get('/', (req, res) => {

  const mahasiswa = [
    {
      nama: 'Rifki Ramadhan',
      email: 'rrxportal07@gmail.com',
    },
    {
      nama: 'Erik',
      email: 'erik@gmail.com',
    },
    {
      nama: 'Doddy',
      email: 'doddy@gmail.com',
    },
  ];

  res.render('index', {
      nama: 'Rifki Ramadhan', 
      title: 'Halaman Home',
      mahasiswa,
      layout: 'layouts/main-layout',
    });
});

// Halaman About
app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});

// Halaman Contact
app.get('/contact', async (req, res) => {
    
    // Mengirim data dalam bentuk promise
    // Contact.find().then((contact) => {
    //     res.send(contact);
    // });

  const contacts = await Contact.find();
  
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
    msg: req.flash('msg'),
  });

});

// Halaman form tambah data contact
app.get('/contact/add', (req, res) => {
  res.render('add-contact', {
    layout: 'layouts/main-layout',
    title: 'Form Tambah Data Contact',
  });
});

// Memproses form tambah data contact
app.post('/contact', [
  body('nama').custom(async (value) => {
    const duplikat = await Contact.findOne({nama: value});
    if(duplikat) {
      throw new Error('Nama contact sudah digunakan!');
    };

    return  true
  }),
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.render('add-contact', {
      title: 'Form Tambah Data Contact',
      layout: 'layouts/main-layout',
      errors: errors.array()
    });
  } else {
    Contact.insertMany(req.body, (error, result) => {

        // Mengirimkan flash message
        req.flash('msg', 'Data contact berhasil ditambahkan');
        res.redirect('/contact');
    });
  };
});

// Memproses delete contact
// app.get('/contact/delete/:nama', async (req, res) => {
//   const contact = await Contact.findOne({nama: req.params.nama});

//   // Jika contact tidak ada
//   if(!contact) {
//     res.status(404);
//     res.send('<h1>404</h1>');
//   } else {
//     // Jika berhasil
//     Contact.deleteOne({_id: contact._id}).then((result) => {

//         req.flash('msg', 'Data contact berhasil dihapus');
//         res.redirect('/contact');
//     });

//   };
// });

app.delete('/contact', (req, res) => {
    Contact.deleteOne({nama: req.body.nama}).then((result) => {

        req.flash('msg', 'Data contact berhasil dihapus');
        res.redirect('/contact');
    });
});

// Halaman form ubah data
app.get('/contact/edit/:nama', async (req, res) => {
  const contact = await Contact.findOne({nama: req.params.nama});

  res.render('edit-contact', {
    layout: 'layouts/main-layout',
    title: 'Form Ubah Data Contact',
    contact,
  });
});

// Proses mengubah data
app.put('/contact', [
  body('nama').custom(async (value, {req}) => {
    const duplikat = await Contact.findOne({nama: value});
    if(value !== req.body.oldNama && duplikat) {
      throw new Error('Nama contact sudah digunakan!');
    };

    return  true;
  }),
  check('email', 'Email tidak valid!').isEmail(),
  check('nohp', 'No HP tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    res.render('edit-contact', {
      title: 'Form Ubah Data Contact',
      layout: 'layouts/main-layout',
      errors: errors.array(),
      contact: req.body,
    });
  } else {
    Contact.updateOne(
        {_id: req.body._id}, 
        {
            $set: {
                nama: req.body.nama,
                email: req.body.email,
                nohp: req.body.nohp,
            },
        }
    ).then((result) => {
        
        // Mengirimkan flash message
        req.flash('msg', 'Data contact berhasil diubah');
        res.redirect('/contact');
    });
  };
});

// Halaman detail contact
app.get('/contact/:nama', async (req, res) => {
  const contact = await Contact.findOne({nama: req.params.nama});
  
  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact,
  });

});

app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});