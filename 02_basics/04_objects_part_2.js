// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// Now We See The Object Declaration Using Constructor (Also Know as Singleton Object).
/*
const hero = new Object(); // This will create empty object.
hero.name = 'Kingpin';
hero.type = 'villain';
hero.hp = 234;
hero.hates = 'Daredevil';
hero.realName = {firstName: 'Wilson', lastName: 'Fisk'}; // We can give object inside an object.
console.log(hero); // See the output.
*/

const obj1 = {
    1: 'a',
    2: 'b'
};
const obj2 = {
    3: 'c',
    4: 'd'
};

// --- --- DEEP AND SHALLOW COPY --- ---
/*
const shallowObj = obj1;
// This will create a shallow copy (means, it uses reference).
// To create a actually or deep copy we use a structuredClone() method.
const deepObj = structuredClone(obj2);
// Now the main difference is that deep copy creates a new copy of the object, which on change doesn't affect the original object.
// And on the other hand a shallow copy is just refer to the original object and if we make any change
// in this copy it will also change the original object.
shallowObj[1] = "Apple"
deepObj[3] = "Apple"
console.log('shallowObj =', shallowObj, '\nobj1 =', obj1) 
console.log('deepObj =', deepObj, '\nobj2 =', obj2)
// You can see the in the output the obj1 got changed but not obj2
*/



// --- --- MERGING OBJECTS --- ---
/*
// --- assign() Method ---
const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject);
// assign() returns the object after combining two or more of them.
// See in the output this will simply concat these two objects.

// Note: we give an empty object {} in the starting of assign arguments, this is because
// assign() takes two arguments as assign(target, ...source), here first argument is target where
// we copy all other objects data and all after that are source. So this is good way to use like this.
*/

// --- Spread Operator ---
const obj3 = {...obj1, ...obj2};
console.log(obj3);
// This spread operator also do the same thing, we have talked about it in arrays.
// And we don't use assign() method in most cases, spread syntax is mostly preferred.

// NOTE: Both assign() and spread operator they did create a deep copy but not for nested elements,
// like if we have object inside a object then they create a deep copy of the main object but refers 
// the object stored in it as a element, and that's why if we need a actually copy we use structuredClone().