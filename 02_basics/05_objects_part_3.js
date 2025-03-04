// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

/*
// --- There Can Be Array Of Objects Like This ---
const user = [{id: 121, name: 'Ura'}, {id: 324, name: 'Ven'}]
console.log(user[1].name) // This is how we simply access it.
// It is useful while working with database.
*/

const daredevil = {
    name: 'Matt Murdock',
    gender: 'Male',
    age: 27,
    occupation: 'Attorney',
    superPower: 'Extra Ordinary Senses',
    enemy: 'KingPin'
}

// --- Some Methods Of Objects ---
/*
console.log(Object.keys(daredevil));
// As name suggest returns array of keys of object.
console.log(Object.values(daredevil));
// Similarly it returns array of values of object.
console.log(Object.entries(daredevil));
// And this will returns array of key-value pair of object.
*/

/*
console.log(daredevil.hasOwnProperty('occupation'));
console.log(daredevil.hasOwnProperty('friend'));
// See the output to understand.
*/

// --- DESTRUCTURING OF OBJECT ---
const {occupation: op} = daredevil;
const {enemy} = daredevil;
const {name: fullName, ...remaining} = daredevil;
console.log(op);
console.log(enemy);
console.log(fullName);
console.log(remaining); // 'remaining' will contains all the remaining values except 'name' (here this ... know as rest operator) 
// This is how we destructure objects. We can name the keys as we did above for occupation as op and name as fullName.
/*
// We Can Also Destructure Arrays like:
const arr = [1,2,3,4];
const [hello, , ...ping] = arr;
console.log(hello);
console.log(ping);
// we can skip an element by just leaving its space(its position) empty as we did above.
*/
// NOTE: We can also destructure nested elements using this (key: name) syntax like
// for example, if an objet = {name: "Utkarsh", likedMovies: {horror: "Annabelle Creation", scienceFiction: "Mother Android", documentary: "The Social Dilemma"}}
// then we can simply access a nested element value like -> const {likedMovies: {scienceFiction}} = object;
// this is how we can get the value of nested scienceFiction. and it work same with arrays.


// WHILE DEALING WITH API, WE GET RESPONSE IN OBJECTS OR ARRAY OF OBJECTS (KNOWN AS JSON).
// LIKE THIS --> {"name": "utkarsh", "course": "js"} AND THIS --> [{..}, {..}, {..}].
// WE WILL LEARN ABOUT API'S LATER IN DETAILS, SO DON'T WORRY NOW.