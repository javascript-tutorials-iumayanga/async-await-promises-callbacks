// // without callback
// function one(){
//     console.log("one");
// }

// function two(){
//     console.log("two");
// }

// one();
// two();



// with callback
function one(function_name){
    console.log("one");

    function_name();
}

function two(){
    console.log("two");
}

one(two);