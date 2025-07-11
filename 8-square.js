const { argv } = require('node:process');

let size = Number(argv[2]);

function printSquare(size) {
	for (let i = 0; i < size; i++) {
		console.log('X'.repeat(size));
	}
}

if (argv[2] === undefined) {
	console.log('Missing size');
} else if (isNaN(size)) {
	console.log('Missing size');	
} else {
	printSquare(size)
}
