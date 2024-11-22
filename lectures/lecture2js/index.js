'use strict';

// console.log('Hello World!');

// let a = 16;
// const b = 12;

// // b = 13; index.js:6 Uncaught TypeError: Assignment to constant variable.

// a = 21;

// console.log(a);
// console.log(b);

console.log(shop1); //undefined

let customer = 'Aru';
customer = 'Sam';
customer = 'Dalida';

console.log(customer);

const shopName = `Aroo shop customers's ${customer}`;
const shopName1 = "Aroo shop customers's ${customer}";

console.log(shopName);
console.log(shopName1);

customer = 'Akmaral';
console.log(shopName);

var address = 'Almaty';
address = 'Astana';

{
  // let shop = 'Dalida';

  var shop1 = 'Dayna';
  // works only in this block
}

// console.log(shop); //Uncaught ReferenceError: shop is not defined at index.js:37:13
console.log(shop1);

// Dalida
// index.js:23 Aroo shop customers's Dalida
// index.js:24 Aroo shop customers's ${customer}

const a = 5;
const b = 10;

const c = `a + b = ${a + b}`;

console.log(c);

// alert('Hello World');

let vechicleWidth = 'CamelCase';
let car123 = 'BMW';
let _car = '';
let snake_case = 'with';
const SHOP_NAME = "Const's will be look like this snake_upper_case";

//data types

//numbers
let age = 22;
const YEAR = 2024;

//strings
const NAME = 'Bulbulka';
const SURNAME = 'Kassymbek';

//boolean
const isTeacher = true;
let isSrudent = 1;
// isTeacher = false;

//null
let city = null;
console.log(city);

//null
let country;
console.log(country);

country = 'Earth';
console.log(country);

//NaN
console.log(YEAR * 'string');

//Infinity
console.log(-25 / 0); //-Infinity
console.log(25 / 0); //Infinity

//Object {key: value}
const user = {
  name: 'Sam',
  isMentor: true,
  age: 22,
  friends: {
    first: 'Aru',
    second: 'Dan',
  },
  'phone number': '87073057588',
};

user.age = 18;
// user = { name: 'Daw'}
console.log(user);
console.log(user.name, user.isMentor);

user.isAnimeLover = true; //adding new key/value
user['isDoramaLover'] = false;
console.log(user);

let user1 = {
  name: 'Molya',
  isMentor: true,
  age: 23,
  friends: {
    first: 'Aru',
    second: 'Dan',
  },
  'phone number': '87073057588',
};

// console.log(user1.name, user1["phone number"] )
// console.log(user1['name'], user1["phone number"] )
console.log(user1);

user1.age = 34;

console.log(user1);

user1 = {
  age: 15,
};
console.log(user1);

//Delete key/value
delete user1.friends;
delete user['phone number'];

console.log(user1, user);

//Iterate object

for (let key in user) {
  console.log(key, '=', user[key]);
}

//Arrays
const salaries = [100, 101, 102, 103];
const students = ['Akma', 'Aya', 'Tleu'];

console.log(students);
console.log(students[0]);
console.log(students.length);

const teacherInfo = ['Sam', 100, true];
console.log(teacherInfo);

//typeof
console.log(typeof teacherInfo);

console.log(typeof customer);

const teachers = [
  {
    name: 'Sam',
    salary: 1000000,
  },
  {
    name: 'Zhazi',
    salary: 540000,
  },

  {
    name: 'Bula',
    salary: 1300000,
  },
];

console.log(teachers);
