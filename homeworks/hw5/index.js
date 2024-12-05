// Как найти?…

// Таблицу с id="age-table".
console.log(document.getElementById('age-table'));
// Все элементы label внутри этой таблицы (их три).
console.log(document.querySelectorAll('#age-table label'));
// Первый td в этой таблице (со словом «Age»).
console.log(document.querySelector('td'));
// Форму form с именем name="search".
let form1 = document.querySelector('form[name="search"]');
console.log(form1);
// Первый input в этой форме.
console.log(document.querySelectorAll('input')[0]);
// Последний input в этой форме.
let res = document.querySelectorAll('input');
console.log(res[res.length - 1]);
