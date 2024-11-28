// Interation

// alert('We use cookies');
// alert('This is notification or we can call it message');

// const a = 1;
// console.log(typeof a);
// alert(a);
// console.log(typeof a);

// ______________________________________________________
// confirm
// let userAnswer = confirm('Do you accept cookies?', '');
// console.log(userAnswer); //answer bool true or false

// ________________________________________________________
//promppt
// const userCity = prompt('Where are you from? We can get you answer, please write your answer here', 'This is default answer if user did not write it');

// console.log(userCity);
// console.log(typeof userCity);

// __________________________________________________________

// type conversion = how to change type of const and let

// number to string
// let a = 15;
// console.log(a, typeof a);
// console.log(typeof String(a));

// a = String(a);
// console.log(a, typeof a);

// console.log('1' + 5); //15

// let value = true;
// value = String(value);
// console.log(value, typeof value);

// let string = 'Hello World!';
// console.log(Number(string));

// console.log('5' / '2'); //exept + sign
// console.log('5' - '2'); //3
// console.log('5' % '2'); //1
// console.log(Number('1') + 5); //6
// console.log('1' + '5'); //15

// console.log(Number('true'));
// console.log(Number('false'));

// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(null)); //0

// console.log(Number(undefined)); // NaN

// console.log(Boolean(1));
// console.log(Boolean(0));

// let str1 = "";
// let str2 = "Hi";
// let str3 = " ";

// console.log(Boolean(str1)); //false
// console.log(Boolean(str2)); //true
// console.log(Boolean(str3)); //true

// //Operators
// console.log(5 / 2);
// console.log(7 % 4); //module 3
// console.log(9 * (1 / 2));
// console.log(9 ** (1 / 2)); //3
// console.log(9 * 2); //18

// let inc = 10,
//   decr = 10;

// //postfix
// // inc++; //post increment
// // decr--; //post decrement

// console.log(inc++, decr--); //10 10

// // ++inc; //pre
// // --decr; //pre

// console.log(++inc, --decr); //12 8

//Comparisons

// console.log(8 > 9); //false
// console.log(10 < 11); //true
// console.log("10" <= 11); //true

// console.log(9 == 9); //true
// console.log('9' == 9); //true
// console.log('9' === 9); //false

// console.log(undefined == null); //true
// console.log(undefined === null); //false

// console.log(null == 0); //false
// console.log(Number(null) == 0); //true

// console.log(9 != 9); //false
// console.log(9 !== 8); //true

// console.log('Akma' > 'Abru'); //true
// // A > A, k > b...
// console.log('Akma' > 'Aru'); //false

// let string1 = 'a';
// let string2 = '';

// console.log(string1);
// console.log(string2);

// LOgical Operators
// || - or
// && - and

// let b1 = true;
// let b2 = false;

// console.log(b1 && b2); //false
// console.log(b1 || b2); //true

// // nagation != not
// // ?? nullish coalescing =

// const humburger = 'h';
// console.log(humburger ?? 'fries'); // h - if we have humburger give me h if no hamburger than give me fries

// let cola;
// console.log(cola ?? 'pepsi'); //pepsi

//Conditions
//if else
const hamburger = 10;
const fries = 5;
const cola = 6;
const salad = 2;

if (hamburger >= 10 && fries && cola >= 4) {
  console.log("Let's stay here!");
} else if (hamburger == 10 && salad > 1) {
  console.log('Maybee .......');
} else {
  console.log('Not today!');
}

//switch
let years = 50;

switch (years) {
  case 50:
    console.log('Happy 50');
    break;
  case 49:
    console.log('Happy 49');
    break;

  default:
    console.log('Happy birthday!');
}

//do while
let b = 0;
// do {
//   b=b+1;
//   console.log(b);
// } while (b <= 3);

// while(b<=3){
//     console.log(b);
//     b++;
// }

// for

// for(let i=0; i<10; i++){
//     console.log(i);
// }

let k = 0;
console.log(k++, k);
console.log(++k, k);

let result = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

const array = ['Aru', 'Sam', 'Bek', 'Baur'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log('___________');
const arr = [
  ['Aru', 'Sam'],
  ['Bek', 'Baur', 'Zhazi'],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

console.log('___________');

const arrobj = [
  { name: 'Aru', age: 13 },
  { name: 'Bek', age: 14 },
  { name: 'Baur', age: 18 },
];

for (let i = 0; i < arrobj.length; i++) {
  for (let key in arrobj[i]) {
    console.log(arrobj[i][key]);
  }
}
