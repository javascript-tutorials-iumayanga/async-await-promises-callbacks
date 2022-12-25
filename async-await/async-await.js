// better way to write Promises

// order function(in promise.js) using async
let accessible = true;

function time(time_in_ms){
    return new Promise((resolve, reject)=>{
        if(accessible){
            setTimeout(resolve, time_in_ms);
        }else{
            reject(console.log("access denied!"));
        }
    });
}



async function order(){
    try{
        console.log("started!");

        console.log("work 1 completed!");

        await time(2000);
        console.log("work 2 completed!");

        console.log("work 3 completed!");

        await time(3000);
        console.log("work 4 completed!");
    }catch(err){
        console.log("work couldn't complete!");
    }finally{
        console.log("finished!");
    }
};

order();

console.log("other work 1");
console.log("other work 2");