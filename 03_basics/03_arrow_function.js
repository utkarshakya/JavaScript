// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

/*
// --- Let's see one keyword namely 'this' ---
const user = {
    username: 'samantha',
    gender: 'female',
    message: function () {
        console.log(`Konnichiwa ${this.username}, and welcome to our website`);
    }
}
console.log(`--- Before ---`);
user.message()
user.username = 'garun7';
console.log(`\n--- After ---`);
user.message()
// So as you can see above 'this' keyword is used to refer to current context.
// And that what it do, see the output to get it better.
// NOTE: We can not use it with functions, I mean we can only use it with objects.
*/


// --- Let's talk about arrow function ---
const arrow = (n1, n2) => {
    return n1 + n2
}
// This is how we simply define an arrow function, it's simple we don't use function keyword
// before parameters and use one => symbol after parameters. That's it.

// There is one term know as Implicit Return, it basically a way of returning something from a function.
const subtractTwo = (n1, n2) => n1 - n2
console.log(subtractTwo(4, 3))
const numberCount = (n1, ...n2) => (`Total numbers Entered: ${[n1, ...n2].length}`)
console.log(numberCount(4, 3, 3, 5, 6))
// This is how we use implicit return. It is often used with arrow function in one line.
// NOTE: While returning complex things like objects, arrays, etc we enclose them in () see above in
// subtractTwo we simply return the n1-n2 but it is always a good practice to use () while implicit return.

// If we have only one parameter in am arrow function we can also ignore the () of the parameter like
// const cube = number => number*number*number
// So, Yeah This above line of code is also work fine and it is indeed a arrow functions.