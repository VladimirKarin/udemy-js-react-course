const hamburger = true;
const fries = true;

if (hamburger && fries) {
    console.log('You are happy, dude.'); //Happy
}

console.log(hamburger && fries); // True

//If any of variables would be false, first if wouldn't return any text, and the console.log would return False
// && is true until there will be at least one FALSE>

const cheeseburger = 5;
const nuggets = 1;
const cola = 2;

//Dynamical typization;
//Always return  false = 0, ''(epmty string), null, undefined, NaN.
// Everything else will return true.

if (cheeseburger >= 3 && cola >= 1 && nuggets >= 1) {
    console.log('Feel the happyness, bro!');
} else {
    console.log("Let's go elsewhere.");
}

console.log(cheeseburger >= 3 && cola >= 1 && nuggets >= 1);

// Will return on first false value and will return it.

console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'abracadabra');

// OR

const dumplings = 5;
const sushi = 1;
const sake = 0;

if (dumplings >= 3 || sushi >= 1 || sake >= 1) {
    console.log('Feel the happyness, bro!');
} else {
    console.log("Let's go elsewhere.");
}

let hanReport,
    soloReport,
    chewieReport,
    bakaReport = 'done';

console.log(hanReport || soloReport || chewieReport || bakaReport);
// OR (||) will always return TRUE as long as there will be atleast one True.

//Excercises
if ((cheeseburger >= 3 && cola >= 2) || (sushi >= 3 && sake >= 1)) {
    console.log('Feel the happyness, bro!');
} else {
    console.log("Let's go elsewhere.");
}

// Operator ! means NOT. and returns opposite meaning. Ex: !true = false.
