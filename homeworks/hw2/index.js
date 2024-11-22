//Homework: 02

name_of_the_restaurant = 'SHATTYK RESTAURANT';
year = 2022;
isActive = true;
salary = null;
timetable = '07:00-24:00';
let color;

const restaurant = {
  'name of the restaurant': name_of_the_restaurant,
  year: 2022,
  isActive: isActive,
  salary: null,
  color: color,
  timetable: timetable,
};

restaurant['address'] = 'Tole bi 159';
restaurant.level = '5 stars';
delete restaurant.color;
console.log(restaurant);

//Работа с объектами
const vehicle = [];
vehicle.brandName = 'Toyota';
vehicle.model = 'LAND CRUISER 300';
vehicle.model = '70';

delete vehicle.model;

console.log(vehicle);

//Работа с перебором свойств в объектах

let salaries = {
  Aroo: 100,
  Dalida: 160,
  Samat: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

console.log(sum);
