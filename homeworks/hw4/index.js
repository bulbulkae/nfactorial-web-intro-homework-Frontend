// done Перепишите функцию, используя оператор '?' или '||'
checkAge = (age) => age > 18 ? true : confirm('Родители разрешили?');

// checkAge(18);

// done // Функция pow(x,n)

pow = (a, b) => {
  let res = 1;
  for (let i = 1; i <= b; i++) {
    res *= a;
  }

  return res;
};

console.log(pow(3,4));

// done //   Перепишите с использованием функции-стрелки
ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  'Вы согласны?',
  () => alert('Вы согласились.'),
  () => alert('Вы отменили выполнение.'),
);

// done // Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a,b) => (b-a));
// alert( arr ); // 8, 5, 2, 1, -10

// done // Трансформировать в массив имён
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let users = [vasya, petya, masha];

// let names = [vasya.name, petya.name, masha.name];

// alert(names); // Вася, Петя, Маша

// done Трансформировать в объекты
let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

//  done // Получить средний возраст
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// getAverageAge = (arr) => {
//     let ave = 0;
//     for(let i in arr){
//         ave += arr[i].age
//     }

//     return ave / (arr.length);

// };

// alert(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
