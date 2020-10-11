'use strict';

// Variables:
var html = '';
var aColores = [
	'red',
	'green',
	'blue',
	'cyan',
	'magenta',
	'yellow',
	'black',
	'white',
	'orange',
	'pink',
	'khaki',
	'tomato',
	'lime',
	'aqua',
];

// Recorrida del array:
for (var i = 0; i < aColores.length; i++) {
	//html += '<span style="background-color: ' + aColores[i] + '">' + i + '</span>';
	html += `<span style="background-color: ${aColores[i]}">${i}</span>`;
}

			`<div>
				<img src="ruta/${}" alt="${}" />
				<p>${}</p>
			</div>`