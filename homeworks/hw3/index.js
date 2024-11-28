// // task 0

let user = {};

alert("Hello, I want to know some info about you! Let's gooooo!");

userAccept = confirm('Do you want accept?', '');
console.log(userAccept);

if (userAccept == false) {
  alert('However I anyway will get info about you. Do not worry!!!');
} else {
  alert("Fantatic! LET'S GOOOOO!");
}

const userName = prompt('Write please here your name!', 'user');

user.name = userName;

const userAge = prompt('How old are you?', '18');

user.userAge = userAge;

userGender = confirm('If you are WOMAN click OK. Otherwise click Cancel botton');

if (userGender == true) {
  user.userGender = 'woman';
} else {
  user.userGender = 'man';
}
console.log(user);

// // Работа с операторами. task 1

number = prompt('Enter your fav number!', '0');

if (number == 0) {
  alert('Oh, your fav number is 0!!!');
} else if (number % 2 == 0) {
  alert(`${number} is evennn!`);
} else [alert(`${number} is odd!`)];

// // task Работа с условиями.

let a = +prompt('a?', '');
console.log(a); // string
a = +a;
console.log(a); // number

// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

//Работа с циклами(loops). task 1

sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
  }
}
console.log(sumEven);

// // Работа с циклами(loops). // task 2

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

let i = 0;
do {
  alert(`number ${i}!`);
  i++;
} while (i < 3);
