const { argv } = require('node:process');

let a = Number(argv[2]);

function getFactorial(a) {
	let result = 1;

	for (i = a; i > 0; i--) {
		result *= i;
	}

	console.log(result);
} 

getFactorial(a);
