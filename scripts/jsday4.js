var userInput = '500';
console.log(parseInt(userInput) * 10); // convert string to int; if int to string, use .toString() method

var pi = 3.141516;
var currConverted = userInput * pi;
console.log(currConverted.toFixed(2)); // to fix the output into 2 decimals

var name1 = "Robert";
console.log(name1.toUpperCase()); // convert strings to upper case

var fruits = ['apple', 'orange', 'mango'];
if (fruits.includes('apple')){ // check if within array
    console.log("Yes, there's apple.")
}

// OBJECT
// key-value pair
var person = {
    firstName: 'Shiela',
    lastName: 'Bangs',
    gender: 'F',
    age: 7,
};

console.log(person);
person.gender = 'M';
person.age = 21;
console.log(person);
console.log("The age is", person.age);

var phoneBook = [
    {
        name: 'Johnny Sins',
        number: 123321
    },
    {
        name: 'John Doe',
        number: 456543
    },
    {
        name: 'Alphi Holmes',
        number: 231432
    },
    {
        name: 'Reyna Magalang',
        number: 789567
    },
    {
        name: 'Kenji San',
        number: 875323
    },
]

console.log(phoneBook[1].name);

console.log(document.getElementById('companyName'));
document.getElementById('companyName').innerHTML = "The Coding School"; // to edit the content of the html element with corresponding id
// above line won't work unless you put the script html code below the element line

var contentElement = document.getElementsByClassName('contentDiv')[0]; // you get array if by class name so you need to specify the index
contentElement.innerHTML = 'Coding for the future';

var listItems = document.getElementsByClassName('listItem');
for (var ctr = 0; ctr < listItems.length; ctr++) {
    listItems[ctr].innerHTML += ' is my friend';
    console.log(listItems[ctr].innerHTML);
}

function displayInput() {
    var input = document.getElementById('nameForm').value; // store value
    console.log('Hello there,', input);
    alert('welcome ' + input.toUpperCase());
}