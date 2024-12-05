// const login = prompt('Enter your departement number?');
// const age = prompt("Age?");

// тернарный оператор
// let message = login == 1 ? 'hii' : login == 2 ? 'hello' : 'Oh ok';
// alert(message);

// let mssg2 = (age === '18') ? 'Adult': 'teen'; //18 => Adult
// let mssg3 = (age === 18) ? 'Adult': 'teen'; //18 => teen
// let mssg4 = (age == 18) ? 'Adult': 'teen'; //18 => Adult

// alert(mssg2);

// __________________________________________
// // ES6 == Es2015 большой update который вышел 2015 дает новые правила, стандарты, улучшает js: from ver => let and const, interpolation = ` ${}`,

// const user = prompt('Who are you?');
// // // const mssg = 'Hii ' + user;
// // // interpolation
// // const mssg = `Hii ${user}`;
// // alert(mssg);

// const html = `<div> Hello, ${user} </div>`;

// document.write(html);
// ______________________________________

// const fruits = {
//   apple: 1,
//   cherry: 2,
// };

// const veg = {
//   carrot: 3,
// };

// // spread
// const fruitAndVeg = { ...fruits, ...veg };

// console.log(fruitAndVeg);
// // apple: 1
// // carrot: 3
// // cherry: 2

// const {apple} = fruits;

// console.log(apple); //1

// ___________________________________
// functions

// function sayHello() {
//   const name = prompt('Wtats your name?');
//   alert(`hello ${name}`);
// }

// const userLocation = confirm("Do you want ot share your location?");

// if(userLocation){
//     sayHello();
// }

// function operation(a, b) {
//   console.log(a + b);
// }

// operation(1, 2);
// // ____________________________________

// let result=0;
// function operation1(a, b) {
//   if (a >= b) {
//     result = a - b;
//   } else {
//     result = a + b;
//   }
// }
// operation1(12, 2);
// console.log(result);

// // ____________________________________

// function operation1(a, b) {
//   if (a >= b) {
//     return a - b;
//   } else {
//     return a + b;
//   }
// }
// const res = operation1(12, 2);
// console.log(res);

// ______________________________________
// const usdCurr = 500;

// function convert(amount) {
//     console.log(amount*usdCurr);
// }
// convert(100);

// ______________________________________

// const sayHello = function() {
//     console.log('hello');
// }

// sayHello();

// _______________________________________

// if (1) {
//   function sayHello1() {
//     console.log('hello 1');
//   }
//   sayHello1();
// }

// ________________________________________
// Arrow functions = стрелочные ES6

// if (1) {
//   sayHello1 = () => console.log('hello 1');
//   sayHello1();
// }

// sayHello1 = () => 'hello 2';
// console.log(sayHello1());

// __________________________
// ARRAY METHODS

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.length);

// // adding
// // arr[100] = 5;
// arr[arr.length] = 12;
// arr.push(16);
// //erease last el
// arr.pop();

// console.log(arr);

// //delete first el
// arr.shift();
// //add first el
// arr.unshift(112);
// console.log(arr);

// let arr1 = [];
// let s = 'Aru, Bek, Baur, Adik';
// //split - convert string to array
// arr1 = s.split(', ');
// console.log(arr1);

// let arr2 = [];
// let info = prompt('Write about yourself within comma!');
// arr1 = info.split(',');
// console.log(arr1);
// //join - convert array to string
// console.log(arr1.join());

// const arr3 = [21, 32, 54, 23, 1, 700, 9, 3];
// // sort - works for string
// // [1, 21, 23, 3, 32, 54, 700, 9]
// arr3.sort((a, b) => a - b);
// // console.log(arr3);
// arr3.sort((a, b) => b - a);
// // console.log(arr3);

// find
// const findFunc = arr3.find(function (item) {
//   return item === 23;
// });

// const findArrF = arr3.find((item) => item === 23);
// console.log(findArrF);

// const findArrFByIndex = arr3.find((item, index) => index === 0);
// console.log(findArrFByIndex);

// for (let i = 0; i < arr3.length; i++) {
//   console.log(`${i}s index of ${arr3[i]}`);

//   arr3[i] === 21 ? console.log('yes index ', i, arr3[i]) : 'no';
// }

// ____________________
// Transform an array

// forEach()

const data = ['a', 'b', 's', 'a', 'bbb'];

// for(let i=0; ...)
// for(let i in data)
// for(let i of data)

data.forEach((item) => console.log(item));

const data1 = data.map((item) => {
  item.includes('a') ? 'a' : item;

  if (item.includes('a')) {
    return 'a';
  }
  return item;
});
console.log(data1);

const data2 = data.filter((item) => item === 'a');
console.log(data2); //['a', 'a']

const data3 = data1.some((item) => item === 'b');
console.log(data3); //true

const data4 = data1.every((item) => item === 'b');
console.log(data4); 
//const data = ['a', 'b', 's', 'a', 'bbb']; => false
//const data = ['b', 'b', 'b']; => true


// number = +prompt('Enter your fav number!', '0');
// +prompt = trasnforming to number with sign +