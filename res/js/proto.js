// Método indexOfAll:
Array.prototype.indexOfAll = function(busqueda = '', inicio = 0) {
	let indice, aIndices = [];
	do {
		indice = this.indexOf(busqueda, inicio);
		if (indice != -1) {
			aIndices.push(indice);
			inicio = indice + 1;
		}
	} while (indice != -1 && inicio < this.length)
	return aIndices;
}

// Método Promedios:
Array.prototype.Promedios = function () {
	let acum = 0, cont = 0;
	for (let valor of this) {
		if (typeof valor === 'number') {
			acum += valor;
			cont++;
		}
	}
	return acum / cont;
}

// Método lastIndexOfAll:
Array.prototype.lastIndexOfAll = function(busqueda = '', inicio = this.length - 1) {
	let indice, aIndices = [];
	do {
		indice = this.lastIndexOf(busqueda, inicio);
		if (indice != -1) {
			aIndices.push(indice);
			inicio = indice - 1;
		}
	} while (indice != -1 && inicio >= 0)
	return aIndices;
}

// Método replaceAll:
String.prototype.ReplaceAll = function(busqueda, reemplazo, insensible = false) {
	let expresionRegular = new RegExp(busqueda, insensible ? 'gi' : 'g');
	return this.replace(expresionRegular, reemplazo);
}