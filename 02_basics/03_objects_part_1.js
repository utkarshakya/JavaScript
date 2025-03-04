// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// Object Is Javascript Data Type Used To Store Various Keyed Collections And More Complex Entities.
// Objects Can Be Created Using The Object() Constructor Or The Object Initializer/Literal Syntax.
// We'll Discuss About Object Literal In This Part.

let key;
const user = {
    name: 'Samantha',
    age: 31,
    gender: 'Female',
    email: 'samantha@example.com',
    isLoggedIn: false,
    lastLoggedInOn: ['Monday', 'Wednesday'],
    [key]: Symbol('HEKA-SJEK-AJSK'), // These square brackets is just a syntax of adding symbol in objects.
    'Full Address': '342/32, Ulta, Heatwave, Ireland, 998123',
    10: "One", // We can also use number as a key.
    12: "Two",
    8: "Three" // Notice this key in the object output, it will come at first.
    // We can even have use 'undefined' and 'Null' as a key because it is treated as a string.
}
// This is how we simply create an object.
// Here --> {key: value, .....} is the syntax.

/*
// --- TWO WAYS TO ACCESS AN OBJECT ---
// 1. Dot Notation
console.log(user.name);

// 2. Square Notation (Note: Symbols and String with whitespace as a key in object can't be access by dot notation)
console.log(user[key]);
console.log(typeof(user[key]));
console.log(user['Full Address']);
console.log(typeof(user['Full Address']));
console.log(user[10]);
*/

/*
// --- CHANGING VALUES OF OBJECT ---
user.email = 'samantha@smantha.com';
console.log(user.email);
*/

/*
// --- freeze() Method ---
Object.freeze(user);
console.log(user.age);
user.age = 18; // this will not take effect.
console.log(user.age);
// freeze() will simple lock user object, that means you can not delete or change it anymore.
// See the above example output to get it.
// --- seal() Method ---
// It is similar to freeze() but the only differ is it allow modification and freeze doesn't allow anything.
// That means we cannot delete or add any property in the object but we can modify if it is seal().
*/

// --- We Can Also Add Function In Objects ---
user.greeting = function(){
    console.log("Hola Amigo");
}
console.log(user);
// See in the output we have add a new key-value pair in our object.
user.greeting();
// Since greeting is a function so we need to call it while accessing.
// See in the output this will give the simply runs the function.