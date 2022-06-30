const {crearArchivoMultiplicacion} = require('./funciones/multiplicaciones')
var colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivoMultiplicacion(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));
