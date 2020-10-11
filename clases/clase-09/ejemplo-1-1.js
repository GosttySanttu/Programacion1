'use strict';

// Consola:
const _ci = console.info;

// Prueba con var:
var numero = 10;
_ci('Con var antes del if da', numero, 'y debe dar', 10);
if (true) {
	numero = 20;
	_ci('Con var en el if da', numero, 'y debe dar', 20);
}
_ci('Con var después del if da', numero, 'y debe dar', 20);

// Prueba con let:
var texto = 'Nombre';
_ci('Con let antes del if da', texto, 'y debe dar', 'Nombre');
if (true) {
	let texto = 'Apellido';
	_ci('Con let en el if da', texto, 'y debe dar', 'Apellido');
}
_ci('Con let después del if da', texto, 'y debe dar', 'Nombre');

// Constantes:
var url = 'https://www.google.com';
const ip = '192.168.1.1';

// Una variable puede cambiar su valor:
url = 'https://www.google.com.ar';

// Una constante lanzará un error, ya que no puede modificar su valor:
//ip = '192.168.0.1';

// En cuanto al ámbito o scope:
const color = 'red';
_ci('Constante antes del if da', color, 'y debe dar', 'red');
if (true) {
	const color = 'blue';
	_ci('Constante en el if da', color, 'y debe dar', 'blue');
}
_ci('Constante después del if da', color, 'y debe dar', 'red');