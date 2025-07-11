const { argv } = require('node:process');

let width = Number(argv[2]);
let height = Number(argv[3])

function printSquare(width, height) {
        for (let i = 0; i < height; i++) {
                console.log('X'.repeat(width));
        }
}

if (argv[2] && argv[3] === undefined) {
        console.log('Missing unit');
} else if (isNaN(width) || isNaN(height)) {
        console.log('Missing width or height');
} else {
        printSquare(width, height)
}
