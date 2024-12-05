// 1 - request to server
// server - data keep place
// по этой ссылке дай что-то...
// ex: google.com = html page google
// scheme from window
// DOM
// BOM
// js

// console.log(navigator);
// console.log(navigator.userAgent);

// if (navigator.userAgent.includes('Chrome')) { //our browser Chrome?
//   console.log('Chrome');
// //   location.href = '';
// } else if (navigator.userAgent.includes('Safari')) {
//   // ...
// }

// _____________________________________
// BOM = Browser object model
// keeps needed info about browser(from which browser, browser height and with)

// const width = window.innerWidth;
// console.log(width);
// console.log(window.alert('hiii'));

// console.log(location); //Location {ancestorOrigins: DOMStringList, href: 'http://127.0.0.1:5500/lectures/lecture5/', origin: 'http://127.0.0.1:5500', protocol: 'http:', host: '127.0.0.1:5500', …}

// _____________________________________________

// DOM = document object model
// отрисовка
// rel html and js

// html
// head
// title
// text...

// text

// body
// text...

// console.log(document);

const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement);

const firstChildNode = bodyElement.firstChild;

// console.log(firstChildNode);

const childNodesOfBodyEl = bodyElement.childNodes;

// console.log(childNodesOfBodyEl); //keeps as collections - every elem obj

for (let node in childNodesOfBodyEl) {
  // console.log(node);
}
// _______________________________________________
// getElement*
// getElementById*
// getElementsByTagName*
// getElementsByClassName*

document.addEventListener('DOMContentLoaded', () => {
  const elemDivOne = document.getElementById('first');
  // console.log(elemDivOne);

  const elements = document.getElementsByTagName('div');
  // console.log(elements[0]);

  const elementsByClassName = document.getElementsByClassName('first');
  // will return collection of divs because class for many elements

  // console.log(elementsByClassName);

  // __________________________________________________
  // if you want to take определенный div then use querySelector*
  // querySelectorAll
  // querySelector

  const elemOneByIdSelect = document.querySelector('#aboutDiv');
  // console.log(elemOneByIdSelect);

  const elemOneByClassSelect1 = document.querySelectorAll('.first');
  // console.log(elemOneByClassSelect1[0]);

  const el2 = document.querySelectorAll('.first p');
  // console.log(el2);

  const el3 = document.querySelectorAll('.first, .second, .third');
  // console.log(el3);

  const el31 = document.querySelector('.first, .second, .third');
  // console.log(el31);

  const el4 = document.querySelectorAll('#first.zero[random]'); //div#first.zero
  // console.log(el4);

  // _______________________________
  // INNER VS OUTER HTML
  // <div>Hello <b>World</b></div> = all html outerHTML
  // Hello <b>World</b> = inner.HTML

  const pElem = document.querySelector('.aboutDiv p');
  // change aboutDiv to another elem
  // pElem.outerHTML = `<p>About DOM!!!</p>`;
  pElem.innerHTML = `<span class = 'yellow'> I like this </span>`;
  // use inner or outer

  //___________________________________
  // CREATE ELEMENTS

  const elemOne = document.getElementById('first');
  const newElem = document.createElement('div');
  const name = 'NF';
  const newElemP = document.createElement('p');
  newElemP.textContent = `Lets gooooo ${name}`;
  console.log(newElemP)
  newElem.append(newElemP);
  console.log(newElem)
  // elemOne.append(newElem);
  elemOne.append(newElem);
  console.log(elemOne)
  // elemOne.before(newElemP);
  // elemOne.after(newElemP);
  // elemOne.prepend(newElemP);

  // console.log(document);

  //___________________________________
  // Remove ELEMENTS

  const imgNothing = document.querySelectorAll('.nothing')[0];
  // imgNothing.remove();

  // _____________________
  //Style manipulation

  // const user = prompt('Color?');
  // if (user === 'red') {
  //   newElemP.style.backgroundColor = 'red';
  // }

  newElemP.style.cssText = `
    margin: 30px;
    // color: green;
    background-color: black;
  `;

  newElemP.className = 'yellow'; //adding to elem available classes
});


// elem.hasAttribute(name) – проверяет наличие атрибута.
// elem.getAttribute(name) – получает значение атрибута.
// elem.setAttribute(name, value) – устанавливает значение атрибута.
// elem.removeAttribute(name) – удаляет атрибут.

// elem.attributes = получить все атрибуты элемента можно с помощью свойства elem.attributes: коллекция объектов, которая принадлежит ко встроенному классу Attr со свойствами name и value.

// HTML-атрибутов есть следующие особенности:
// Их имена регистронезависимы (id то же самое, что и ID).
// Их значения всегда являются строками.