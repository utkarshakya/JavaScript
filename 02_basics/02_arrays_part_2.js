// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// --- --- --- MORE ON ARRAY --- --- ---

/*
let marvelHeroes = ['Vision', 'Captain Marvel', 'Spider-Man'];
let dcHeroes = ['Victor', 'Wounder Women', 'Super-Man'];

// --- --- concat() Method --- ---
let allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
// concat() method simply returns an new array after performing concatenation.

// --- --- Spread Operator (...) --- ---
let newHeroesList = [...marvelHeroes, ...dcHeroes];
console.log(newHeroesList);
// Spread Operator (...), In simple words spread the array or string into its individual elements.
// See the output to understand clearly.
*/

/*
let numbersArray = [1,2,3,[4,5,[6,7], 8], 9, 0];

// --- --- flat() Method --- ---
console.log(numbersArray.flat(Infinity));
console.log(numbersArray.flat(1));
console.log(numbersArray.flat()); // By default flat() takes 1 as argument.
// flat() returns array in a simplified manner by removing the sub-arrays.
// It takes one argument namely 'depth', which tell how many inner sub-arrays we simplify.
// Here, Simplify --> means getting values of array after removing the square brackets [].
// See the output of the above example to understand it better.
*/

// NOTE: ALL METHOD AND PROPERTIES DISCUSSED BEFORE THIS SECTION ARE KNOWN AS INSTANCE METHODS & PROPERTIES.
// --- --- --- STATIC METHODS IN ARRAY --- --- ---

// 1. Array.from() --> Creates a new Array instance from an iterable or array-like object.
// 2. Array.isArray() --> Returns true if the argument is an array, or false otherwise.
// 3. Array.of() --> Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

console.log(Array.isArray("Amigo"));
console.log(Array.isArray([3,4,5]));

console.log(Array.from("Amigo"));

let num1 = 45;
let num2 = 78;
console.log(Array.of("Amigo", 34, 381, "Galactus", num1, num2));
// See the output to get them all.

// REMEMBER:
// Instance Methods & Properties: Called on instances of the object.
// Static Methods & Properties: Called on the constructor itself.

// Learn More About Instance Methods/Properties And Static Methods/Properties
// From This Stackoverflow Answer. This Will Make Things Clear, Link Is Give Below:
// https://stackoverflow.com/questions/50251894/javascript-static-method-vs-instance-method