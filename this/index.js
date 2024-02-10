// const person = {
//     name : "Arjun",
//     lastName : "kumar",
//     id : 4454,
//     getThis : function(){
//         return this.name;
//     }
// }

// console.log(person.getThis());

// function myFun() {
//   console.log(this);
// }
// myFun();

// const show = () => this;
// console.log(show());

// const person = {
//     name : "Arjun",
//     lastName : "kumar",
//     id : 4454,
//     sayName : () => this.name
// }

// console.log(person.sayName());

// "use strict";

// function show(){
//     console.log(this);
// }
// show();

// const person1 = {
//     name: 'Pedro',
//     surname: 'Sanchez',
//     sayName: function(city) {
//         return this.name + " " + this.surname + " " + city;
//     }
// }

// const person2 = {
//     name: 'Arjun',
//     surname: 'Kumar'
// }

// const newFun = person1.sayName.bind(person2,["Delhi","India"])
// console.log(newFun());