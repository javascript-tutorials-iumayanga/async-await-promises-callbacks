// solution for callback hell
let accessible = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(accessible){
            setTimeout(()=>{resolve(work());}, time);
        }else{
            reject(console.log("access denied!"));
        }
    });
}

// order(2000, ()=>console.log("work completed!"));

// promise chaining
order(2000, ()=>console.log("work 1 completed!"))
.then(()=>{
    return order(0000, ()=>console.log("work 2 completed!"));
})
.then(()=>{
    return order(5000, ()=>console.log("work 3 completed!"));
})
.catch(()=>{ // Error handling
    console.log("work rejected!");
})
.finally(()=>{ // finally handler
    console.log("finished!");
});

/* false
access denied!
work rejected!
finished!
*/

/* true
work 1 completed!
work 2 completed!
work 3 completed!
finished!
*/
