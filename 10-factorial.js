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


/*
const { argv } = require('node:process');
const Big = require('big.js');

let input = argv[2];
let n = Number(input);

function getFactorial(n) {
	let result = Big(1);

	for (let i = 2; i <= n; i++) {
		result = result.times(i);
	}

	console.log(result.toString());
}

getFactorial(n);
*/
