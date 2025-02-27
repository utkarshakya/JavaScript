// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// NOTE: Javascript TC39 is working on Temporal, a new Date/Time API.
// TC39 working to make it a global object but for now Date object is used, in future it change.
// Check this to know more --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const myDate = new Date();
// This is how simply define a data, this will give my current data and time.
console.log(myDate);

/*
// --- --- Using Some Methods Of Date --- ---

// 1. get methods
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.getMilliseconds());
console.log(myDate.getTime());

// NOTE: We also have the similar methods with set like setFullYear(), setMonth(), etc.

// 2. to methods
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('en-in')); // en-in --> returns according to Indian Standard
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleDateString('en-in'));
console.log(myDate.toLocaleTimeString());
*/

/*
// --- --- We Can Also Create Our Own Data --- ---
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toString());

myCreatedDate = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate.toString());

myCreatedDate = new Date("01-14-2023"); // MM-DD-YYYY
console.log(myCreatedDate.toString());
*/

/*
// --- --- Some More Concepts --- ---
let timeStamp = Date.now();
console.log(timeStamp); // this will return current date in milliseconds
console.log(Math.floor(timeStamp/1000)); // this will make it in seconds, we use floor function to avoid decimal numbers.
*/

// --- --- toLocalString() --- ---
// We Can Also Customize This Method To Get Specific Output
console.log(myDate.toLocaleString("default", { dateStyle: "full" }));
console.log(myDate.toLocaleString("en-in", { dateStyle: "short" }));
