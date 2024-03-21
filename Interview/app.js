// function parent(){
//     var b = 20;
//     function outer(){
//         function inner(){
//             console.log(a,b);
//         }
//         let a = 10;
//         inner();
//     }
//     return outer;

// }
// let a = 100;

// var res = parent("Hello World");
// res();



function Enclose() {
  var counter = 0;
  this.increment = function () {
    counter++;
    console.log(counter);
  }
  this.decrement = function(){
    counter--;
    console.log(counter);
  }

}

var res = new Enclose();
res.increment();
res.increment();
res.increment();
res.decrement();
res.decrement();
