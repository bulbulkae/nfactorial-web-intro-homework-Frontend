// 'use strict';

// console.log('hello');
// // JSON

// const user = {
//   name: 'Aru',
//   username: 'aruukaa',
//   number: '5545',
// };

// console.log(user);
// console.log(JSON.stringify(user));

// const response = JSON.stringify(user);
// console.log(JSON.parse(response));

// const person1 = JSON.parse(JSON.stringify(user));

// person1.name = 'Sam';

// console.log(user);
// console.log(person1);

// XMLHttpRequest

const inputUSD = document.querySelector('#usd'),
  inputKZT = document.querySelector('#kzt');

inputKZT.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', './data.json');
  request.setRequestHeader('Content-type', 'app/json');
  request.send();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      console.log(data);

      inputUSD.value = +inputKZT.value / data.current.usd;
    }
  });
});
