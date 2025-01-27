// API - готовые решение

// кто то за нaс сделал готовые решение и мы можем использовать метеды, способы, данные сделать свою логику легким

// Из DOM api мы использовали методы: grtElementById, querySelectors and so on

// Promise api - methods: Promise.all, Promise.allSettled, Promise.race, Promise.resolve, Promise.reject

// Google map api, OPen weather api

// legacy code - old code

'use strict';

// LINKS:
// 1. https://jsonplaceholder.typicode.com/todos
// 2. https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl
// 3. https://api.openweathermap.org/data/2.5/onecall?lat=lat&lon=lon&appid=5ac6fd7036b251627aa84eafac7a39c7

// PREPERED TODO
const btnAdd = document.querySelector('#push'),
  inputNewTask = document.querySelector('#newtask input'),
  tasks = document.querySelector('#tasks');

btnAdd.addEventListener('click', function () {
  if (inputNewTask.value.length == 0) {
    alert('Kindly Enter Task Name!!!!');
  } else {
    tasks.innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${inputNewTask.value}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;

    const body = { title: inputNewTask.value, completed: false };

    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(body),
      //   body: JSON.stringify({
      //     title: inputNewTask.value,
      //     userId: 1,
      //   }),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((response) => {
      // console.log(response);
      return response.json();
    });
    //   .then((data) => console.log(data));

    let current_tasks = document.querySelectorAll('.delete');

    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        current_tasks[i].parentNode.remove();
      };
    }
  }
});

const getTodos = () => {
  // GET
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //   console.log(data.splice(0, 5));
      data.splice(0, 5).forEach((item) => {
        tasks.innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${item.title}
              </span>
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </div>
      `;
      });
    })
    .catch((e) => console.log(e));
};

getTodos();

// async / await

// https://api.nytimes.com/svc/topstories/v2/home.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl

// async function getTopStories() {
const getTopStories = async () => {
  const response = await fetch(
    'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1yaC2zo9D8kyUL7MkOsjTFpos7BG2Vtc',
  );

  // console.log(response);

  const resJson = await response.json();
  console.log(resJson);

  // .then((response) => response.json())
  //   .then((data) => console.log(data));
};

getTopStories();
