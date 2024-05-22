// Question1
//  Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".
var fruits = ["apple", "mango", "banana", "grapes"];
console.log(fruits);
// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.
var number = [10, 20, 30, 40];
console.log(number);
// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
// define the array
var fruites = ["mango", "banana", "watermelon", "cherry"];
var thirdFruit = fruits[2];
console.log(thirdFruit);
// Question 4
// Change the second element of the numbers array to 25.
var numbers = [10, 20, 30, 40, 50];
numbers[1] = 25;
console.log(numbers);
// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.
var Fruit = ["apple", "mango", "watermelon"];
fruits.push("grape");
console.log(fruits);
// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.
var Fruits = ["apple", "mango", "watermelon", "cherry"];
var lastFruits = fruits.pop();
console.log(fruits);
console.log(lastFruits);
// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.
var fruit = ["apple", "mango", "watermelon", "cherry"];
var firstFruit = fruit.shift();
console.log(firstFruit);
console.log(fruit);
// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.
var fruitsi = ["apple", "mango", "banana", "cherry"];
fruits.unshift("kiwi");
console.log(fruits);
// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.
var FruitsSlice = ['apple', 'banana', 'mango', 'cherry', 'watermelon'];
fruits.slice(1, 2);
console.log(Fruits);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.
var Fruite = ["apple", "banana", ",mango", "orange"];
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);
// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.
var citrusFruitsfruits = ["orange", "lemon", "apple", "banana"];
var citrusFruits = fruits.splice(0, 2);
console.log(citrusFruits);
// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.
var lastTwofruits = ["apple", "banana", "mango", "grape", "kiwi"];
var lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
