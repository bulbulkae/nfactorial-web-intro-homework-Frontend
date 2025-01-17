// const sayHello = () => {
//   console.log('hello!');
// };

// setTimeout(sayHello, 5000);

// console.log('after1');
// console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');
// // console.log('after1');

// setTimeout(
//   (f = () => {
//     console.log('timeout1');
//     setTimeout((f1 = () => console.log('timeout2')), 5000);
//   }),
//   1000,
// );

// const timer1 = setInterval(
//   (f = () => {
//     console.log('2 sec');
//   }),
//   2000,
// );

// setTimeout(() => {
//   clearInterval(timer1);
//   console.log('timer stoped!');
// }, 10000);

// __________________________________
// callback function
// const today = (todo, callback) => {
//   setTimeout(() => {
//     console.log(`Бүгін үй ${todo}!!!`), callback();
//   }, 1000);
// };

// const relax = () => console.log('Сосын демаламыз!!!');

// today('жинаймыз', relax);

// console.log('Сосын демаламыз!!!');

// __________________________________
// Promise

// const request = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log('Подготовка данных');

//     const product = {
//       name: 'phone',
//       price: 1000,
//     };

//     console.log('Данные готовы!');

//     console.log(product);
//     resolve(product);
//   }, 2000);
// });

// request.then((product) => {
//   console.log('Product here: ', product);
//   const request2 = new Promise(function (resolve, reject) {
//     console.log('data download from another server');
//     product.model = 'iPhone';
//     // reject();
//     // resolve(product);
//     reject(product);
//   });

//   request2
//     .then((productUpdated) => console.log(productUpdated, 'product updated'))
//     .catch((err) => console.log('errrr', err));
// });

const test = (time) => {
  return new Promise((resolve, reject) => {
    if (time === 1000) {
      setTimeout(() => {
        console.log(time);
        resolve();
      }, time);
    } else {
      setTimeout(() => {
        console.log(time);
        reject();
      }, time);
    }
  });
};

const promises = [test(1000), test(2000)];

Promise.all(promises)
  .then(() => console.log('success'))
  .catch(() => console.log('ohhhh not all promises done so rejected'));
// __________________________________
