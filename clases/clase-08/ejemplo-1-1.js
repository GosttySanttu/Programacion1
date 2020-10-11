'use strict';

// Creación del tablero:
var aTablero = [];
aTablero[0] = ['N', 'N', 'A', 'N', 'N', 'A', 'N', 'A'];
aTablero[1] = ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'];
aTablero[2] = ['A', 'N', 'N', 'N', 'N', 'A', 'N', 'A'];
aTablero[3] = ['A', 'A', 'A', 'A', 'A', 'A', 'N', 'A'];
aTablero[4] = ['A', 'A', 'N', 'N', 'N', 'A', 'N', 'A'];
aTablero[5] = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];
aTablero[6] = ['N', 'A', 'N', 'N', 'N', 'A', 'A', 'N'];
aTablero[7] = ['N', 'A', 'A', 'A', 'A', 'A', 'A', 'N'];

// Funciones para las acciones de los botones:
function MostrarTablero() {
	console.info(aTablero);
}

function MostrarFilaIndice4() {
	console.info(aTablero[4]);
}

function MostrarCoordenadas21() {
	console.info(aTablero[2][1]);
}

function MostrarCoordenadas67() {
	console.info(aTablero[6][7]);
}

function MostrarCoordenadas() {
	var f, c;
	do {
		f = parseInt(prompt('Índice de la fila'));
	} while (!(f >= 0 && f <= 7))
	do {
		c = parseInt(prompt('Índice de la celda'));
	} while (!(c >= 0 && c <= 7))
	console.info(aTablero[f][c]);
}