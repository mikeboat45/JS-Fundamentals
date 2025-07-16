const { argv } = require('node:process');

//numberOfArguments = argv.length - 2;

if (argv[2] === undefined) {
	console.log('No argument');
} else {
	console.log(argv[2]);
}
