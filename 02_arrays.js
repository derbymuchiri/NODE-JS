//arrays
const numbers = [1, 2, 3, 4, 5];
const fruits = ['apples', 'grapes', 'oranges', 'pears'];
console.log(numbers, fruits);

//get one value - arrays start at 0
console.log(fruits[1]);

//add value
fruits[4] = 'blueberries';

//add value using push()
fruits.push('strawberries');
console.log(fruits);

//fruits.unshift('mangoes');

//remove last value
fruits.pop();
console.log(fruits);

//check if array
console.log(Array.isArray(fruits));

//get value
console.log(fruits);
console.log(fruits.indexOf('oranges'));