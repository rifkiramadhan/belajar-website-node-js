# Belajar Node JS

## 1. Apa itu Node JS ?
### Node.js is a JavaScript runtime built on Chrome's V8 JavaScript Engine
  - Jadi artinya Node.js ini adalah javascript runtime yang di bangun atau dibuat di dalam JavaScript Engine yang bernama V8 punya nya Google Chrome
### An Asyncronous event-driven JavaScript runtime, designed to build scalable network applications
  - Jadi adalah sebuah runtime untuk membuat aplikasi yang asyncronous
  - Apa itu runtime ?
    - Runtime adalah sebuah koteks atau tempat dimana kita menjalankan atau mengeksekusi kode kita
    - Jadi Node.js ini bukan bahasa pemrograman karena node js ini adalah runtime dimana kita bisa menjalankan script
      JavaScript di dalamnya, jadi sebenarnya bahasa pemrograman yang dipakai adalah JavaScript dan Node.js adalah sebuah runtime
    - Jadi dengan menggunakan javascript itu kita bisa membuat website kita menjadi bisa melakukan banyak hal yang keren-keren
      - Manipulasi DOM (Menambah element, menghilangkan, dll)
      - Event Listener (Jika tombol di klik ngapain, mouse di gerakan ngapain, dll)
      - Interaktivitas (Menambahkan transisi, animasi, buat slide show, game bahkan)
      - HTTP Request (Mengambil data ke halaman web lain, ke halaman API, bahkan ke halaman API lain)
      - DST
    - Tapi problemnya terbatas, jadi JavaScript hanya bisa melakukan apapun selama itu di dalam browser, bahkan jika browsernya di close yasudah jadi JavaScript nya tidak berjalan, jadi segala sesuatu konteks nya adalah web browser kita, karena engine nya tertanam di dalam browser

### Karakteristik NodeJS
  - Asyncronous & Event Driven
    - Karena JavaScript pada awalnya dia membawa perilaku ini
  - Non-Blocking
    - Karena dia asyncronous maka dia biasa membuat program yang non blocking
  - Single Threaded but Highly Scalable
    - Jadi artinya dia hanya bisa mengerjakan satu lah dalam satu proses dalam satu waktu tertentu, tapi highly scalable Karena Node.js itu cenderung cepat
  - Cross Platform
    - Jadi Node.js nya bisa di install di berbagai sistem operasi, jadi tidak perlu khawatir jika membuat script yang beda untuk tiap-tiap operasi, cukup satu program itu dapat dijalankan di sistem operasi manapun seperti Windows, Linux atau Mac OS
  - MIT License
    - Open source dengan license nya MIT
  - NPM (Node Package Manager)
    - Adalah kumpulan atau tempat untuk menyimpan banyak sekali library yang bisa ditambahkan ke dalam aplikasi Node.js

### Fitur Utama NodeJS
  - File System
    - Kita bisa mengakses file system
  - Buffer
    - Ketika kita mengelola binary dari file nya, ini cocok sekali ketika kita ingin membuat sebauh aplikasi yang bisa tarnsfer file, streaming video, kita dapat mengatur buffer atau binarynya
  - HTTP & HTTPS
    - Kita bisa juga mampu melakukan fitur network, jadi bisa mengirimkan request, menerima response, ini yang dijadikan sebagai web server
      fitur HTTP atau HTTPS
  - REPL (Read Evaluate Print & Loop)
    - Berfungsi untuk mengeksekusi program Node.js kita melalui Command Line atau Terminal
  - Console
    - Jika sebelumnya kita dapat mengakses console pada browser untu melihat JavaScriptnya itu berjalan melalui V8 Engine, tetapi sekarang console nya juga dapat kita akses jadi sama saja ketika kita mengetik console.log() itu jalan juga di Node.js, sama seperti pada browser
  - Cryptografi
  - Zlip
  - Dokumentasi: https://nodejs.org/dist/latest-v14.x/docs/api/

### NodeJS Cocok Untuk...
  - Dynamic Single Page Application (SPA)
    - Artinya aplikasi yang hanya satu halaman tapi isinya bisa secara dinamis berubah-ubah, jadi tidak berpindah-pindah halaman tapi hanya menggunakan satu halaman saja
  - Realtime App (Chat, Multiplayer)
    - Berfungsi untuk membuat aplikasi yang butuh pertukaran data secara realtime
  - API
    - Misalnya kita ingin membuat sebuah REST API, sehingga orang lain dapat merequest data ke aplikasi kita
  - Streaming App (Video, Music)
    - Cocok untuk membuat streaming application
  - Microservices
    - Jadi kita dapat membuat satu aplikasi besar di dalamnya banyak aplikasi-aplikasi
  - Command Line Tool (MERN, MEAN MEVN)
    - MERN
      - MongoDB
      - Express
      - React
      - Node
    - MEAN
      - MongoDB
      - Express
      - Angular
      - Node
    - MEVN
      - MongoDB
      - Express
      - VUE
      - Node

### Pre Requisite
  - JavaScript Dasar
    - Varible
    - Looping
    - Array
    - Object
  - JavaScript Lanjutan (Modern JS / ES6)
    - Arrow Function
    - Destructuring
    - Asyncronous
    - Callback
    - Promise
    - Async & Await

### System & Software Requirement
  - Windows / Linux / MacOS
  - Code Editor
  - Visual Studio Code
  - Terminal / Command Prompt
    - Git Bash
 
## 2. Arsitektur Node JS
  - Asynchronous
  - Synchronous
  - Multi Thread Synchronous
  - Single Thread Asynchronous

## 3. Instalasi, Konfigurasi & Menjalankan Node JS
  - nodejs.org
    - Gunakan versi LTS (Stabil)
    - Gunakan versi Lates Version (Ketika sudah familiar dengan NodeJS)
  - Node Version Manager
    - https://github.com/nvm-sh/nvm
  - brew.sh
    - Ketik brew install node pada terminal ketika tidak ingin menginstall melalui file.exe nya
  - File yang terinstall
    - File Node.js
    - File NPM
  - Rule
    - Ketika mengetik node -v belum muncul versinya maka clsoe terminal kemudian di ketikkan lagi

## 4. Node JS Module System
  - Modules
    - Sekumpulan code yang dapat digunakan kembali, dengan antarmuka yang terdefinisi
    - Jadi ada baris-baris code yang dapat kita pakai menggunakan cara tertentu, maksudnya antar muka adalah jadi ada caranya untuk menggunakan code tersebut
  - Node Modules
    - Fungsionalitas yang simpel ataupun kompleks yang tersimpan di dalam sebuah file javascript, yang dapat kita gunakan kembali pada aplikasi NodeJS, jadi seperti fungsionalitas di file yang satu kita export lalu kita gunakan fungsionalitas itu di file yang lain dengan menggunakan require
    - Prilaku pada Node Modules ini adalah Setiap modul di dalam NodeJS memiliki konteksnya masing-masing, tidak bisa saling tercampur dengan modul lain pada lingkup global, jadi tidak bisa sembarang dipakai kecuali kita lakukan export dan require
  - NodeJS Modules
    - Core Modules
      - Yaitu modules yang sudah dimiliki oleh NodeJS di dalam library nya, jadi nanti kita bisa memakainya misalnya kita ingin mengakses file System dan network maka kita tinggal panggil module nya
      - Jika menggunakan Core Modules proses export nya sudah dilakukan oleh NodeJS maka kita tinggal merequire saja
    - Local Modules
      - Ini adalah module yang kita buat sendiri, kalau kita buat sendiri berarti kita perlu melakukan dua hal
        - export()
        - require(), mencari module dengan urutan sebagai berikut
          - Core Modules
          - File atau direktori (./ atau / atau / ../)
          - Folder 'node_modules'
    - Third Party Modules
      - Ini adalah module yang dibuat oleh orang lain yang bisa kita pakai, ini biasa disebut dengan npm modules, karena semua module yang dibuat oleh pihak ketiga itu sudah dikumpulkan oleh NodeJS ke sebuah package manager yang namanya npm
    - Constructor
      - Adalah method yang automatice di jalankan class ini di instansiasi

## 5. NPM
  - NPM (Node Package Manager)
    - Adalah sebuah tempat dimana programmer-programmer NodeJS itu bisa menyimpan modul-modul mereka, karena sudah disimpan disana, maka kita juga dapat mengunakan modul-modul tersebut, dan modul modulnya banyak sekali yang dapat digunakan
    - Adalah sebuah perusahaan yang dibuat tahun 2014, dan di akuisisi oleh GitHub, dan GitHub sudah di ambil alih oleh microsoft, jadi sebenarnya ini secara tidak langsung dibawa oleh microsoft juga.
    - Selain itu NPM juga package manager untuk NodeJS ini dibuat sejak tahun 2009 untuk mengelola project-project open source, walaupun sekarang kita juga bisa menggunakan layanannya secara berbayar untuk menyimpan package yang kita punya sendiri secara private, jadi orang lain tidak dapat mengakses package kita

## 6. Membuat Aplikasi Node JS Sederhana
