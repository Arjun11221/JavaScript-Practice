// const pr1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolve!!!!");
//   }, 20000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise2 resolve!!!!");
//     }, 40000);
// });


// const getData = async () => {
//     console.log("Hello Js");

//     const data1 = await pr1;
//     console.log(data1);
//     console.log("Namaste Javascript 1");

//     const data2 = await pr2;
//     console.log(data2);
//     console.log("Namaste Javascript 2");
  
// };

// getData();


const getData = async()=>{
    const res = await fetch("https://api.github.com/users/Arjun11221");
    const data = await res.json();
    console.log(data);
}

getData();   