document.addEventListener('DOMContentLoaded', () => {
  function createTodolist(title) {
    const todolistContainer = document.getElementById('todolistContainer');
    const todolist = document.createElement('div');
    todolist.classList.add('todolist');
    const todolistTitle = document.createElement('p');
    todolistTitle.classList.add('todolist_title');
    todolistTitle.textContent = title;
    const hr = document.createElement('hr');

    todolist.appendChild(todolistTitle);
    todolist.appendChild(hr);

    todolistContainer.appendChild(todolist);
  }

  const todoInput = document.getElementById('headerInput');

  todoInput.addEventListener('keyup', (event) => {
    // console.log(event);

    if (event.key === 'Enter') {
      //   console.log(todoInput.value);
      createTodolist(todoInput.value);
    }
  });

  const taskInput = document.getElementById('headerInput');

  taskInput.addEventListener('keyup', (event) => {
    // console.log(event);

    if (event.key === 'Enter') {
      //   console.log(todoInput.value);
      createTodolist(taskInput.value);
    }
  });

  //   console.log(todoInput);
});

// addEventListener
// 1 argument = string event
// 2 argument callback
