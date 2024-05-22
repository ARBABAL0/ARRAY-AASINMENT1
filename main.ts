// Question1
//  Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".

   let fruits: string[] = ["apple","mango","banana","grapes"];
   console.log(fruits);

// Question 2
// Declare an array named numbers that can contain only number
// elements and initialize it with the values 10, 20, 30, and 40.

let number: number[] = [10, 20, 30, 40];
console.log(number);

// Question 3
// Access the third element of the fruits array and assign it to a
// variable named thirdFruit.
// define the array

let fruites: string[] = ["mango", "banana", "watermelon", "cherry"];
let thirdFruit: string = fruits[2];
console.log(thirdFruit);

// Question 4
// Change the second element of the numbers array to 25.

let numbers: number[] = [10, 20, 30, 40, 50];
numbers[1] = 25;
console.log(numbers)

// Question 5
// Add the element "grape" to the end of the fruits array using the
// method.

let Fruit: string[] = ["apple", "mango", "watermelon"];
fruits.push("grape");
console.log(fruits);

// Question 6
// Remove the last element from the fruits array using the
// method and assign it to a variable named lastFruit.

let Fruits: string[] = ["apple", "mango", "watermelon", "cherry"];
let lastFruits: string | undefined = fruits.pop();
console.log(fruits);
console.log(lastFruits);

// Question 7
// Remove the first element from the fruits array using the
// method and assign it to a variable named firstFruit.

let fruit: string[] = ["apple", "mango", "watermelon", "cherry"];
let firstFruit: string | undefined = fruit.shift();
console.log(firstFruit);
console.log(fruit);
 
// Question 8
// Add the element "kiwi" to the beginning of the fruits array
// using the method.


let fruitsi: string [] = ["apple", "mango", "banana", "cherry"]
fruits.unshift("kiwi");
console.log(fruits);

// Question 9
// Remove 2 elements from the fruits array starting from index 1
// using the method.


let FruitsSlice: string[] = ['apple', 'banana', 'mango', 'cherry', 'watermelon'];
fruits.slice(1, 2);
console.log(Fruits)

// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the
// fruits array using the method.

let Fruite: string[] = ["apple", "banana", ",mango", "orange"];
fruits.splice(2, 0, "pineapple", "pear");
console.log(fruits);

// Question 11
// Create a new array named citrusFruits that contains the first
// two elements of the fruits array using the method.

let citrusFruitsfruits: string[] = ["orange", "lemon", "apple", "banana"];
let citrusFruits: string[] = fruits.splice(0, 2);
console.log(citrusFruits)

// Question 12
// Create a new array named lastTwoFruits that contains the last
// two elements of the fruits array using the method.

let lastTwofruits: string[] = ["apple", "banana", "mango", "grape", "kiwi"];
let lastTwoFruits: string[] = fruits.slice(-2);
console.log(lastTwoFruits);
