// events - событие - сигнал, реакция от нашего браузера - click button, scrolling page

// most useful events

// click, contextmenu, mouseover/mouseout, mousedown/mouseup, mousemove, keydown/keyup, submit, focus, DOMContentLoaded, transitioned

// ______________________________
// DOM elem onclick
const btn = document.querySelector('.btn'),
  btn1 = document.querySelectorAll('.btn')[1],
  btn2 = document.querySelectorAll('.btn')[2],
  body = document.querySelector('body');

// btn.onclick = () => alert('hello');

// ______________________________
// Listener - always listens

// alertSecond = () => alert('Second click');
// btn.addEventListener('click', alertSecond);

// btn.addEventListener('click', (e) => {
//   console.log(e.target);
//   e.target.remove();
// });

// btn.removeEventListener('click', () => {});

// let i = 0;
// const count = () => {
//   console.log(i);
//   i++;
//   i >= 3 ? btn1.removeEventListener('click', count) : '';
// };

// btn1.addEventListener('click', count);

// btn2.addEventListener('mouseover', function (e) {
//   console.log(e);
//   btn2.style.backgroundColor = 'black';
// });

// btn2.addEventListener('mouseout', function (e) {
//   console.log(e);
//   btn2.style.backgroundColor = 'blue';
// });

// body.addEventListener('keydown', (e) => {
//   //   console.log(e);
//   e.key === 'd' ? console.log('you pressed d') : console.log('you pressed not d');
// });

// let s = '';
// body.addEventListener('keydown', (e) => {
//   s += e.key;
//   console.log(s);
//   s === 'dany' ? console.log('you pressed dany') : console.log('not dany');
// });

//______________________________
// Frameworks JS - пакет за нас писали разрабы

// Bootstrap - for adaptive layouts


