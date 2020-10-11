// Variable para guardar mensaje:
var info = '';

// Declaración de variables:
var aAlumnos = [],
	contA = 0, contD = 0,
	contT = 0, acumT = 0,
	pos = 0,
	nombre, apellido, nota,
	prom, porcA, porcD;

// Carga de datos:
do {
	// Inicializo el primer nivel como array:
	aAlumnos[pos] = [];
	
	// Pido, valido y guardo en posición asociativa para nombre:
	do {
		nombre = prompt('Nombre?');
	} while (!isNaN(nombre))
	aAlumnos[pos]['Nombre'] = nombre;

	// Pido, valido y guardo en posición asociativa para apellido:
	do {
		apellido = prompt('Apellido?');
	} while (!isNaN(apellido))
	aAlumnos[pos]['Apellido'] = apellido;

	// Pido, valido y guardo en posición asociativa para nota:
	do {
		nota = parseInt(prompt('Nota?'));
	} while (!(nota >= 1 && nota <= 10))
	aAlumnos[pos]['Nota'] = nota;

	// Incremento la variable pos:
	pos++;
} while (confirm('Desea continuar?'))

// Recorrida de la matriz:
info += '<ul>';
for (var i = 0; i < aAlumnos.length; i++) {
	if (aAlumnos[i]['Nota'] >= 4) {
		contA++;
	} else {
		contD++;
	}
	contT++;
	acumT += aAlumnos[i]['Nota'];
	info += `<li>${aAlumnos[i]['Nombre']} ${aAlumnos[i]['Apellido']}: ${${aAlumnos[i]['Nota']}}</li>`;
}
info += '</ul>';

// Cálculos:
prom = acumT / contT;
porcA = contA / contT * 100;
porcD = contD / contT * 100;

// Armado del mensaje:
info += `
<ul>
	<li>Promedio de las notas: ${prom}</li>
	<li>Porcentaje de alumnos aprobados: ${porcA}%</li>
	<li>Porcentaje de alumnos desaprobados: ${porcD}%</li>
</ul>`;

// Egreso de información:
document.getElementById('info').innerHTML = info;