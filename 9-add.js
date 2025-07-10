const { argv } = require('node:process');

//parseInt(argv[2], argv[3]);

function add(a, b) {
	sum = a + b;
	return console.log(sum);
}

add(parseInt(argv[2]),parseInt(argv[3]));
