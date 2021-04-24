const yargs = require('yargs');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        },
        email: {
            describe: 'Email',
            demandOption: false,
            type: 'string'
        },
        noHP: {
            describe: 'Nomor telefon',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.simpanContact(argv.nama, argv.email, argv.noHP);
    },
}).demandCommand();

//menampilkan daftar semua nama dan nomor hp contact
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no Hp contact',
    handler() {
        contacts.listContact();
    }

});

//menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan detail sebuah contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.detailContact(argv.nama);
    },
});

//menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        contacts.deleteContact(argv.nama);
    },
});

yargs.parse();