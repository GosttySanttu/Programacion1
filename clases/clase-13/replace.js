'use strict';

// String:
let cadena = 'La programación es algo maravilloso';

// Aplicación del método:
let cadena1 = cadena.replace('La programación', 'El diseño');
let cadena2 = cadena.replace(/l/i, '-');
let cadena3 = cadena.replace(/a/g, '*');
let cadena4 = cadena.replace(/l/gi, '#');

// Resultados:
console.info('cadena1:', cadena1);
console.info('-----');
console.info('cadena2:', cadena2);
console.info('-----');
console.info('cadena3:', cadena3);
console.info('-----');
console.info('cadena4:', cadena4);


