// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// --- for each ---
const coding = ["java", "c", "py", "js", "html"];

/*
coding.forEach(function (value) {
    console.log(value);
})
console.log("\n"); // just for better output vision.
// forEach loop takes callback function, In callback function we don't specify name of function.
// As you can see above we didn't give name of the function in the above example.


// We can also use arrow function as a callback function.
// Remember we define arrow functions as: let func = () => {};
// Since we don't need to define name, we can make it like the one given below.
coding.forEach((element) => {
    console.log(element);
})
console.log("\n"); // just for better output vision.


// We can also define function outside and pass it as an argument, like given below.
function see(value){
    console.log(value);
}
coding.forEach(see);
// Note, Giving any function as an argument to for each loop, then give it's reference don't call or execute it.
// All Of The Above Given Examples Gives The Same Output, It Just The Way Of Writing Them.
*/


// --- forEach loop also takes index and array ---

/*
coding.forEach((value, index, arr) => {
    console.log(value, index, arr)
})
// See the output to make it clear.
*/

// --- More ---
const heroes = [
    {
        heroName: "Saktimaan",
        powers: ["Superhuman Strength", "Superhuman Speed", "Heat Generation", "Shape Shifting", "Stamina", "Light Projection"]
    },
    {
        heroName: "Naagraj",
        powers: ["Superhuman Strength", "Superhuman Speed", "Telepathy", "Therianthropic", "Regenerative Healing Factor"]
    },
    {
        heroName: "Chacha Chaudhary",
        powers: ["Extremely Intelligent"]
    }
]
// Now using forEach loop we can simply access any value of this complex structure.
heroes.forEach(element => {
    console.log(element.heroName);
})
// See the output, we simply get heroName.