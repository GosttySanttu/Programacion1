'use strict';

// Variables:
const _ci = console.info;

let Test = () => { return 'Sin parámetros'; }
_ci(Test());

let Test1 = dato => { return 'El dato es: ' + dato; }
_ci(Test1(4));

let Test2 = (...dato) => { return dato; }
_ci(Test2(4, 6, 8));

let Test3 = (dato, ...datos) => { return dato + ' | ' + datos; }
_ci(Test3(4, 6, 8));

let Test4 = dato => 'El dato es: ' + dato;
_ci(Test4(4));