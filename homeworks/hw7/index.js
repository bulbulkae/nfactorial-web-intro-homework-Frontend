console.log('lecture 7');

// ________________________________________
// Задержка на промисах

function delay(ms) {
  // ваш код
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));


// _________________________________________
// Можно ли "перевыполнить" промис?
let promise1 = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});

promise1.then(alert);
// выполниться только первый resolve so there will be alert(1)


// __________________________________________
let promise = new Promise((resolve, reject) => {
  let m = 2;
  m === 2 ? resolve('f1') : reject('f2');
});

promise.then((message) => console.log(message)).catch((message) => console.log(message));
// обработать все возможные ошибки включая те, что возникают в обработчике f1

promise.then(
  (message) => console.log(message),
  (message) => console.log(message),
);

// Если промис выполнится успешно, но произойдёт ошибка в f1, ошибка не будет обработана и выведется в консоль как необработанная