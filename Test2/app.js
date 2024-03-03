
// function x(){
//     console.log(a);
//     a = 10;
// }
// x();
// // console.log(a);

// foo();
// var foo = 20;
// function foo(){
//     console.log("Calling Foo");
// }
// foo();


// async function foo(){
//     // throw new Error("Hello");
//     return "Hello World";
// }

// (async function(){
//     const result = await foo();
//     console.log(result);
// })();

function abc(){
    console.log("Hii");
    return ()=>{
        console.log("Arrow Function");
    }
}

const result = new abc();
console.log(result);

