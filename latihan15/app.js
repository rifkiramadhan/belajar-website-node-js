const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const {loadContact, findContact} = require('./utils/contacts');
const app = express();
const port = 3000;

// Menggunakan EJS
app.set('view engine', 'ejs');

// Third-party middleware
app.use(expressLayouts);

// Build-in middleware
app.use(express.static('public'));

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

app.get('/about', (req, res) => {
  res.render('about', {
    layout: 'layouts/main-layout',
    title: 'Halaman About'
  });
});

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  
  res.render('contact', {
    layout: 'layouts/main-layout',
    title: 'Halaman Contact',
    contacts,
  });

});

app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  
  res.render('detail', {
    layout: 'layouts/main-layout',
    title: 'Halaman Detail Contact',
    contact,
  });

});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
