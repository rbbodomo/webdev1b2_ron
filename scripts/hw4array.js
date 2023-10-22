// 1
var fruits = [];
// 2
var numFruits = prompt('How many fruits do you want? (Please input values from 3-10 only)');
while (numFruits < 3 || numFruits > 10) {
  var numFruits = prompt('How many fruits do you want? (Please input values from 3-10 only)');
}
// 3
for (var i=0; i<numFruits; i++){
  var fruitName = prompt(`Please enter name of fruit #${i+1}:`);
  fruits.push(fruitName);
}
// 4
console.log(fruits);
// 5
console.log(fruits[0]); // first
console.log(fruits[fruits.length-1]); // last
// 6
fruits.sort();
fruits.reverse();
console.log(fruits);
// 7 
console.log(fruits[1]); // second
// 8
fruits.splice(2, 1); // remove 3rd
fruits.shift(); // remove 1st
console.log(fruits);

// 9
var vegetables = [];
var numVeg = prompt('How many veggies do you want? (Please input values from 3-10 only)');
while (numVeg < 3 || numVeg > 10) {
  var numVeg = prompt('How many veggies do you want? (Please input values from 3-10 only)');
}
for (var i=0; i<numVeg; i++){
  var vegName = prompt(`Please enter name of veggie #${i+1}:`);
  vegetables.push(vegName);
}
console.log(vegetables);
console.log(vegetables[0]); // first
console.log(vegetables[vegetables.length-1]); // last
vegetables.sort();
vegetables.reverse();
console.log(vegetables[1]); // second
vegetables.splice(2, 1); // remove 3rd
vegetables.shift(); // remove 1st

// 10
var food = fruits.concat(vegetables);
console.log(food);
// 11
for (var i=0; i<food.length; i++){
  if (i%2 == 0) {
    console.log(`Index ${i} is even and the food inside it is called ${food[i]}. The word ${food[i]} has ${food[i].length} letters and the second letter is ${food[i][1]}. If you reverse it, it becomes ${food[i].split("").reverse().join("")}.`)
  } else {
    console.log(`Index ${i} is odd and the food inside it is called ${food[i]}. The word ${food[i]} has ${food[i].length} letters and the second letter is ${food[i][1]}. If you reverse it, it becomes ${food[i].split("").reverse().join("")}.`)
  } 
}
// 12
var findFood = prompt('Please enter a food item for us to check:');
for (var i=0; i<food.length; i++){
  if (findFood == food[i]) {
    alert(`Food is found at index # ${i}`);
  } else {
    if (i==food.length-1){
      alert(`Food not found`);
    }
  } 
}
// 13
food[0] = 'START';
food[food.length-1] = 'END';
// 14
console.log(food);
