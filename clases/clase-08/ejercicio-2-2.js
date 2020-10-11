// Variable para guardar mensaje:
var info = '';

// Declaración de variables:
var contA = 0, contD = 0,
	contT = 0, acumT = 0,
	nombre, apellido, nota,
	porcA, porcD, promT,
	aAlumnos = [], pos = 0;

// Carga de datos:
do {
	// Inicializando a cada "alumno" como un array
	aAlumnos[pos] = [];

	// Ingrese y valido los valores:
	do {
		nombre = prompt('Ingrese nombre');
	} while (!isNaN(nombre))
	aAlumnos[pos]['Nombre'] = nombre;

	do {
		apellido = prompt('Ingrese apellido');
	} while (!isNaN(apellido))
	aAlumnos[pos]['Apellido'] = apellido;

	do {
		nota = parseInt(prompt('Ingrese nota'));
	} while (!(nota >= 1 && nota <= 10))
	aAlumnos[pos]['Nota'] = nota;
	// Incremento el índice para cargar un nuevo alumno en caso de que el usuario quiera agregar más:
	pos++;
} while (confirm('Desea continuar?'))

// Recorrida de la matriz:
info += '<ul>';
for (var alumno of aAlumnos) {
	// Cuento a los aprobados y desaprobados:
	if (alumno['Nota'] >= 4) {
		contA++;
	} else {
		contD++;
	}
	// Cuento y acumulo todas las notas:
	contT++;
	acumT += alumno['Nota'];
	// Muestro la info de cada alumno:
	info += `<li>${alumno['Nombre']} ${alumno['Apellido']}: ${alumno['Nota']}</li>`;
}
info += '<ul>';

// Cálculos:
porcA = contA / contT;
porcD = contD / contT;
promT = acumT / contT;

// Armado del mensaje:
info += `
<ul>
	<li>Promedio de las notas: ${promT}</li>
	<li>Porcentaje de alumnos aprobados: ${porcA}%</li>
	<li>Porcentaje de alumnos desaprobados: ${porcD}%</li>
</ul>`;

// Egreso de información:
document.getElementById('info').innerHTML = info;