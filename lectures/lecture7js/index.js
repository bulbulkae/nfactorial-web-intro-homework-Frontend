// Lecture 7 Advanced JS
// Scheduling: setInterval & setTimeout
// Promises (ES6)
// Eventloop

// _______________________
// setTimeout

// const sayHello = () => console.log('hello');

// setTimeout(sayHello, 5000); //after 5 sec

// console.log('line after setTimeout');

setTimeout(() => {
  // console.log('timeout 1');

  setTimeout(() => {
    // console.log('timeout inner')
  }, 500);
}, 2000);

// ________________________
// setInterval

const interval1 = setInterval(() => {
  // alert('2 seconds');
}, 2000);

setTimeout(() => {
  clearInterval(interval1);
  //   console.log('setInterval stopped');
}, 10000);

// ______________________
// Callback functions - function passed as an Argument to another function, to be executed later

function learn(lesson, callback) {
  // console.log(`Today we will learn ${lesson}`);
  callback();
}

learn('Callbacks!!!', function () {
  // console.log('I love that');
});

// ____________________________________
// Promises
// when the executor obtains the result, be it soon or late, doesn't matter, it should call one of these callbacks:
// resolve(value) - if the job is finished successfully
// reject(errror) - if an error has occured, erroe is the error object

let promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")
});

loadScript = (script) =>
  // console.log('script 0 loading', script);

  loadScript('./script1.js', () => {
    console.log('script 1 loaded');

    loadScript('./script2.js', () => {
      console.log('script 2 loaded');

      loadScript('./script3.js', () => {
        console.log('script 3 loaded');

        loadScript('./script4.js', () => {
          console.log('script 4 loaded');

          loadScript('./script5.js', () => {
            console.log('script 5 loaded');

            loadScript('./script6.js', () => {
              console.log('script 6 loaded');
            });
          });
        });
      });
    });
  });
// _____________________________________________

// const request = new Promise((resolve, reject) => {
//   // loading from internet(database) data
//   setTimeout(() => {
//     console.log('подготовка данных');

//     const product = {
//       name: 'phone',
//       price: 1000,
//     };

//     console.log('data ready, sending to front');
//     console.log(product);

//     resolve(product);
//   }, 2000);
// });

// request.then((product) => {
//   const request2 = new Promise((resolve, reject) => {
//     console.log('Data load fron other server');
//     product.model = 'iPhone 14 Pro';
//     resolve(product);
//   });
//   request2.then((productUpdated) => console.log(productUpdated, 'product updated'));
// });

// _______________________________
// const request = new Promise((resolve, reject) => {
//   // loading from internet(database) data
//   setTimeout(() => {
//     console.log('подготовка данных');

//     const product = {
//       name: 'phone',
//       price: 1000,
//     };

//     console.log('data ready, sending to front');
//     console.log(product);

//     reject(product);
//   }, 2000);
// });

// request.catch(() => {
//   console.log('err');
// });

// const test = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject(), time);
//   });
// };

// const promises = [test(1000), test(2000)];

// Promise.all(promise)
//   .then(() => console.log('Success'))
//   .catch(() => console.log('Error'));
