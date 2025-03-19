{
    let a = 34;
    var b = 45;
}
// console.log(a) // This will not work since a is initialized in block scope.
console.log(b) // This will work since we use var which allow variable access out of the block scope.

function mona(){
    var c = 34
}
// console.log(c); // This will not work because it is in a functional scope (also known as local scope).

// NOTE: There are three scopes namely Global, Local, and Block Scope. And remember that local scope is not exactly
// same as block scope.

// SEE THIS SMALL MDN DOCS. TO CLEAR SCOPE: https://developer.mozilla.org/en-US/docs/Glossary/Scope