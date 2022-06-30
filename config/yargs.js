const colors = require('colors');
const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de lafuncion de multiplicar'.green
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra listar'
                })
                .option('h',{
                    alias: 'Hasta',
                    type: 'number',
                    describe: 'Hasta que numero se multiplicara'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'.red
                    }
                    return true;
                })
                .argv;

module.exports = argv;