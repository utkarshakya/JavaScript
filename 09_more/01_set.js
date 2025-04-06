// NOTE: Uncomment The Below Multi-Line Comment To See The Output.

/*
const mobile = new Set([1,3,2,5,5,9])
console.log(mobile)
// Set only accepts a unique value, if you pass duplicates it will automatically remove them.

// We can use
mobile.add(23)
console.log(mobile.has(3))
console.log(mobile)

// In simple words, a set is just a collection like array but with unique values.
*/

/*
// --- Some Operations On Set ---
let set1 = new Set([10, 9, 8, 7, 6, 5]);
let set2 = new Set([6, 5, 4, 3, 2, 1]);

// --- Union ---
let unionSet = new Set([...set1, ...set2]);
console.log("Union -> ", unionSet);

// --- Intersection ---
let intersectionSet = new Set([...set1].filter((num) => set2.has(num)));
console.log("Intersection -> ", intersectionSet);
*/

/*
// --- Iterating Over Set ---
// Using for-of loop
for (const element of set2) {
    console.log(element)
}
// Using for-each loop
set2.forEach((num) => {
    console.log(num)
})
*/

// More
let arr = [1,2,3,4,5,1,2,3];
console.log(`Original Array = ${arr}`)
const oneSet = new Set(arr); // This is Array to Set Conversion
arr = [...oneSet]; // This is Set To Array Conversion
console.log(`Array With Unique Values = ${arr}`)
// This used when want to have a unique element in an array, then we can do this.
