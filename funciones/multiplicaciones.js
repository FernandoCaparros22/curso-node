const colors = require('colors');
const fs = require('fs');

// const crearArchivoMultiplicacion = (base) => {
   
//     console.log('==============');
//     console.log(`TABLA DEL ${base}`);
//     console.log('==============');

//     let salida = '';

//     for(let i=1; i <= 10; i++){
        
//         salida += `${ base } x ${ i } = ${base*i}\n`;
//     };

//     console.log(salida);

//     // fs.writeFile(`tabla-${base}.txt`, salida, (err) =>{
//     //     if(err) throw err;
//     //     console.log(`tabla-${base}.txt crado`);
//     // });

//     fs.writeFileSync(`tabla-${base}.txt`, salida);
//     console.log(`tabla-${base}.txt creada`);

// };

// module.exports = {
//     crearArchivoMultiplicacion
// };

// con async await
// const creador = async(base) => {
//     try{
//         let salida = '';
//         for(let i=1; i <= 10; i++){  
//             salida += `${ base } x ${ i } = ${base*i}\n`;
//         };
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
//          return(`tabla-${base}.txt creada`);
//     } catch(error){
//         throw(`Ela archivo tabla${base}.txt no pudo ser creado`)
//     };
// };

// module.exports = {
//     creador
// };

// con Promesas
const crearArchivoMultiplicacion = (base, listado, hasta) => {
    return new Promise((resolve, reject) =>{
            

            let salida = '';
            let consola = '';

            for(let i=1; i <= hasta; i++){
                
                salida += `${ base } x ${ i } = ${base*i}\n`;
                consola += `${ base } ${'x'.red} ${ i } = ${base*i}\n`;
            };
            if(listado) {
                    console.log('==============');
                    console.log(`TABLA DEL ${base}`);
                    console.log('==============');
                    console.log(salida);
              };

            try {
                fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
                resolve(`tabla-${base}.txt`)
            } catch(error){
                throw(`ERROR!: El archivo tabla${base}.txt no pudo ser creado`)
            };
        });
    };

    module.exports = {
        crearArchivoMultiplicacion
    };