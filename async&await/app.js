const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved!!");
    },40000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved!!");
    },20000);
})

async function getData(){
    console.log("Hello");
    const data = await p1;     
    console.log("World");     
    console.log(data);

    const data2 = await p2;     
    console.log("World2");     
    console.log(data2);
}

getData();