'use strict';

// Arrays:
let frutas1 = ['banana', 'limón'];
let frutas2 = ['manzana', 'mango'];

// Aplicación del méotodo:
let frutasA = frutas1.concat(frutas2);
let frutasB = frutas2.concat(frutas1, frutas2);

// Resultados:
console.info('frutasA:', frutasA);
console.info('-----');
console.info('frutasB:', frutasB);