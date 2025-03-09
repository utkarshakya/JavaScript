// NOTE: Uncomment The Specific Multi-Line Comment To See The Output, By Default Last One Runs.

// --- HERE ARE SOME WAYS OF USING A FUNCTION ---
/*
// Defining a function
function sayMyName() {
    console.log('U');
    console.log('T');
    console.log('K');
    console.log('A');
    console.log('R');
    console.log('S');
    console.log('H');
}
// Calling a function
sayMyName()
*/

/*
function addTwoNumbers(number1, number2) {
    return number1 + number2 // This is how we return
}

let result = addTwoNumbers(1, 2);
console.log(result);
*/

/*
function loginUserMessage(username){
    if(!username){
        console.log('Please Enter the username.');
        return
    }
    console.log(`Hello, ${username} You Just Logged In`)
    return 0
}
let user = loginUserMessage('comodo')
// Don't worry about condition right now we'll cover them later.
*/

/*
function calculateCartItems(item1, item2, ...otherItems){ // here ... is known as rest operator
    console.log(`--- This is otherItems ---`)
    console.log(otherItems)
    const allItems = [item1, item2, ...otherItems] // here ... is known as spread operator
    return allItems
}
const items = calculateCartItems('Hinge', 'Mouse', 'Adapter', 'Extension Board', 'Raspberry Pi Zero')
console.log(`\n--- And these are all items ---`)
console.log(items);
// See the output to make it clear
*/

// We Can Also Pass Array And Objects In Function
function returnSecondValue(getArrayOrObject) {
    return getArrayOrObject[1]
}
console.log(returnSecondValue({ 0: 'Nagraj', 1: 'Chandaal', 2: 'Hemant', 3: 'Pishachini' }))
console.log(returnSecondValue(['Hanuman', 'Ashwatthama', 'Vibhishana', 'Parashurama']))