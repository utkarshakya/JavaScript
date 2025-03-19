// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// --- for of ---

/*
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    console.log(num);
}
// That's it, this make things very simply. for of loop automatically iterate to every element of the array.
// We don't need to specify the length as we do with normal for/while loop.
*/


/*
// We can also iterate to strings.
const message = "Hola!"
for (const element of message) {
    console.log(element);
}
*/


/*
// Objects are not iterable using for of loop, see the below output.
const heroes = {
    1: "Abhimanyu",
    2: "Karna",
    3: "Arjun"
}
for (const element of heroes) {
    console.log(element);
}
*/


// But there is one thing very similar or objects known as map is iterable.
// Don't worry we'll discuss maps in details later. Here is simple use.
const map = new Map();
map.set("Immortal", "Bhishma");
map.set("Strong", "Bhima");
map.set("God", "Krishna");
console.log(map); 
// Now using for of loop on maps
for (const element of map) {
    console.log(element);
    // this will print the map elements in array form.
}
// We can also use it like the following way.
for (const [key, value] of map) { // here we use [key, value]
    console.log(`\n${value} is ${key}`);
}
// See the output to see the difference better.