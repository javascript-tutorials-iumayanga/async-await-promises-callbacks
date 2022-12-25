function one(function_name){

    // callback hell
    setTimeout(()=>{
        console.log("one");

        setTimeout(()=>{
            console.log("three");

            setTimeout(()=>{
                console.log("four");
            },3000);
        }, 3000);
    }, 5000);

    function_name();
}

function two(){
    setTimeout(()=>{
        console.log("two");
    }, 0000);
}

one(two);

/*
two
one
three
four
*/