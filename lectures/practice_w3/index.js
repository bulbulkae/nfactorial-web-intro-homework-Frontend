console.log('Hello');

//   регулярные выражения = проверка строки, например ищем почта и тд
// navigator.userAgent.includes('Chrome')
//   ? (window.location.href = 'https://google.com/')
//   : (window.location.href = 'https://wikipedia.org/');

// const isChrome = navigator.userAgent.includes('Chrome');
// window.location.href = isChrome ? 'https://google.com/' : 'https://wikipedia.org/';

document.addEventListener('DOMContentLoaded', () => {
  // task 2
  const arr = ['Hit gym', 'Study React', 'Coffee time', 'Forget JQuery'];

  const listContainer = document.getElementById('list');

  arr.forEach((i) => {
    const li = document.createElement('li');
    li.textContent = i;
    listContainer.appendChild(li);
  });

  //task3
  // Используя только DOM и JS, если размер экрана меньше 740px
  // "отпустите" кнопку вниз шапки и оцентруйте
  // Для того чтобы слушать изменения экрана в реальном времени
  // можно использовать window.addEventListener("resize",function)

  styling = () => {
    window.innerWidth < 740
      ? header_bttn.classList.add((header.style.flexDirection = 'column'))
      : header_bttn.classList.remove((header.style.flexDirection = 'row'));
  };
  window.addEventListener('resize', styling);

  styling();
});
