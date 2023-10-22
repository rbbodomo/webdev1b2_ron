var arr = [4, 8, '16', true, 64]; // can have diff data types in an array
console.log(arr);
var myName = 'Ron'; // string is considered as array
console.log(myName[0]);

var cars = ['Honda', 'Toyota', 'Chevrolet', 'Isuzu'];
var cars2 = ['Lambo', 'Porsche', 'BMW'];
// useful functions 
console.log(cars.at(3));
cars[3] = 'Mercedez Benz';
console.log(cars);
console.log(cars.concat(cars2)); // not persisting; does not update the original arrays
cars = cars.concat(cars2); // to update cars
console.log(cars.length) // array size
console.log(cars.sort()); // persisting; updates array to ascending order (default)
console.log([1,2,3,4,5].sort(function(a,b){return b-a})); // sorts in descending order but for numbers only
// to sort in descending order for strings, we first sort then reverse
cars.sort();
console.log(cars.reverse());

cars2.push('Ferrari'); // appends element at the end
cars2.pop(); // removes element at the end
console.log(cars);
//cars.splice(3); //gets all elements after first 3 elements of cars and removes all captured elements from cars
cars.splice(3, 3); 
//gets all elements after first 3 elements of cars and removes first three of captured elements from cars i.e. removes 4th-6th element
console.log(cars);
cars.unshift('Kia'); // appends element at the start
console.log(cars);