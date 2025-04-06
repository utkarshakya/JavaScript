// Map is collection of Key-Value Pair
const newMap = new Map()

newMap.set("name", "kingpin");
newMap.set("name", "Daredevil"); // This will update
newMap.set("age", 100);

newMap.delete("age")

console.log(newMap)
// console.log(newMap.size);
// console.log(newMap.has("age"));

// We can also make it like given below.
const otherMap = new Map([
    ["name", "Mr. Fantastic"],
    ["age", 2000],
    ["power", "Elasticity"]
]);

console.log(otherMap)

// NOTE: An Object is a collection of key-value pairs where keys are strings or symbols, while a Map allows keys of any type and maintains insertion order.