const { argv } = require('node:process');

let i = argv[2];

if (isNaN(argv[2])) {
	console.log('Missing number of occurences');
} else {
	while (i > 0) {
		console.log('C is fun')
		i--
	}

}

