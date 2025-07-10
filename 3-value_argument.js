const { argv } = require('node:process');

//numberOfArguments = argv.length - 2;

if (argv == undefined) {
	console.log('No argument');
} else {
	console.log(argv[2]);
}
