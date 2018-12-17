const math = require('./math.js');

//console.log(math.add(1,2,3))
//console.log(math.multiply(1,2,3,4));

const argv = process.argv.slice(2);
if(argv[0] === 'add'){
    console.log(math.add(parseInt(argv[1]),parseInt(argv[2])));
}

else if(argv[0] === 'multiply'){
    console.log(math.multiply(parseInt(argv[1]),parseInt(argv[2])));
}

