// --- --- filter() Method --- ---
const num = [1, 3, 4, 5, 6];
// console.log(num.forEach((e) => {return e+3;}));
// If you try to run the above line of code you'll get undefined, that means we can not return
// any value from callback function in for each loop. And to cater this problem we use filter.
let result = num.filter(e => e > 3);
console.log(result);
// Although we can get values from forEach callback function using some
// conditional statements, but filter works easily.
// Like see the below example from that we also get the same result.
let arr = [];
num.forEach(e => {
    if(e > 3){
        arr.push(e);
    }
});
console.log(arr);
// You can use anything both works fine. But when the structure is complex it's better to use filter.
// Below example make it more clear to you.
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
let myRecords = books.filter((e) => e.genre === "Fiction");
// let myRecords = books.filter(({genre}) => genre === "Fiction"); // Here we destructure the object, it also work the fine.
console.log(myRecords);
// So you see in the output, filter make things so easy.