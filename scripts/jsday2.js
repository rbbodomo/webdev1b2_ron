// 2.
var length = 0; width = 0; height = 0;
// 3.
width = 10;
height = 15;
length = 23;
// 4.
var product = length*width*height;
console.log(product);
// 5.
if (product % 2 == 0) {
    console.log("product is even number");
} else {
    console.log("product is even number");
}

if (product % 3 == 0) {
    console.log("divisible by 3");
} else {
    console.log("not divisible by 3");
}

if (confirm('Press a button')){
    console.log('You pressed OK');
} else {
    console.log('You pressed cancel');
}

console.log('end #1');

var person = prompt('Please enter your name: ');
if (person == 'Carlos') {
    alert("Welcome to my site, " + person);
} else {
    alert('Only Alixandria can enter here!');
}

for (var counter2 = 0; counter2 < 10; counter2++){
    console.log('github change counter2', counter2);
}