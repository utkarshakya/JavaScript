// --- --- map() Method --- ---
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let result = arr.filter(e => e * 10); // this e*10 is true for all numbers but false when we get 0, see it in output.
console.log(result);
// Now you can see in the above example we just get the same array, this is because
// we cannot perform operations using filter. Filter is more like a true and false game.
// But to perform any operation we use Map.
result = arr.map(e => e * 10);
console.log(result);
// Now it works, see the output it make things clear.
// So this is how we use Map and now you can differentiate Map with filter.

// --- Chaining ---
console.log("\n--- Chaining ---");
// Ok, We can also chain many methods one after the other like the one given below:
result = arr.map(e => e + 1).map(e => e * 10).filter(e => e <= 50);
console.log(result);
// NOTE: In chaining, statement evaluated from left to right. That means first map will return the
// value to second map and second will return it to its next one and so on till the end.
// And in the end it will get returned to the result.
// Now, Evaluate The above chaining statement and then see the output again.