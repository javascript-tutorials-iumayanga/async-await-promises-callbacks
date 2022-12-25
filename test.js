let accessible = true;

function time(time_in_ms, work_function){
    return new Promise((resolve, reject)=>{
        if(accessible){
            console.log("access granted!");

            setTimeout(()=>{
                resolve(work_function());
            }, time_in_ms);
        }else{
            console.log("access denied!");
            reject();
        }
    });
}

async function order(){
    try{
        console.log("started!");

        work1();

        await time(2000, work2);

        work3();

        await time(3000, work4);
    }catch(err){
        console.log("work couldn't complete!");
    }finally{
        console.log("finished!");
    }
};

function work1(){console.log("work 1 completed!");}
function work2(){console.log("work 2 completed!");}
function work3(){console.log("work 3 completed!");}
function work4(){console.log("work 4 completed!");}

order();