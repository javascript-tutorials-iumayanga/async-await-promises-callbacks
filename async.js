// // synchronous
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");

// asynchronous
console.log("one");
console.log("two");

setTimeout(()=>{
    console.log("three");
}, 5000);

console.log("four");
console.log("five");