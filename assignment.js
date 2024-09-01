// JavaScript Basic Problem Solving, Nation:1,, 


//Answer to the question number: 1 (Node:1);
let careName = "volvo"; 

//Answer to the question number: 2;
let firstName = "john", lastName = "Doe", age = 35;

// Answer to the question number: 3;
let x = 10;
let y = 5;
x *=y;
console.log(x); // x will be 50

// Answer to the question number: 4;
let length = 16;// number type data
let lastName ="johnson"; // string type data

 const x = {
    firstName: "john";
    lastName: "Doe"
}; // object type data

/* 1. length: is a number because it stores a numerical value.
   2. lastName: is a string because it stores a sequence of characters.
   3. x: is an object because it represents  collection of key-value pairs.
*/

//Answer to the question number: 5;
function myFunction(){
    alert("Hellow World!");
}
myFunction(); // This line see the output. 

//Answer to the question number:6;
let profile = {
    name:"john",
    age:50,
}
alert(`${profile.name} is ${profile.age}`);

//Answer to the question number: 7;
function click(){
    alert("Anyone click me");
}

//Answer to the question number: 8 of 1;
const cars =["volvo", "Jeep", "Mercedes"];
alert(cars.length);

//Answer to the question number:8 of 2;
const Brand =["Volvo", "Jeep", "Mercedes"];
Brand[0] = "Hero"; //First item change ,, index 0= "Volovo"
console.log(Brand); // Output:["Hero", "Jeep", "Mercecds"]

// Answer to the question number: 9 of 1;
let randomNumber = Math.random(); // use math.rendom() method;
console.log(randomNumber); 

// Answer to the question number: 9 of 2;
let largestNumber = Math.max(10, 20);
console.log(largestNumber);

// Answer to the question number: 9 of 3;

let squareRoot = Math.sqrt(9);
console.log(squareRoot);

//Answer to the question number: 10 of 1;
x = 10;
y = 5;
alert(x > y); // Comparison Operator


//Answer to the question number: 10 of 2;
let age = 17;
alert(age <18 ? "Too young" : "Old enough"); // Ternary Operator.



// JavaScript Basic Problem Solving, Nation:2,, 

//Answer to the question number: 1;
function celsiusToFahrenheit(celsius){
    return (celsius *9/5) + 32;
}
console.log(celsiusToFahrenheit(0)); //32
console.log(celsiusToFahrenheit(25)); //77

//Answer to the question number: 2;
function isEven(num){
    return num % 2 === 0;
}
console.log(isEven(4)); // True
console.log(isEven(7));// False
    
// Answer to the question number: 3;
function sum(a, b){
    return a + b;
}
console.log(sum(3, 4));
console.log(sum(10, 20));

// Answer to the question number: 4;
function findSmallestNum(arr) {
    return Math.min(...orr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5

//Answer to the question number: 5;
function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])){
            count++;
        }
    }
    return count;
  }
  
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3

//Answer to the question number: 6;
function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

//Answer to the question number: 7;
function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false

//Answer to the question number:8;
function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num -1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040

//Answer to the question number:9;
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"
  
//Answer to the question number:10;
function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"

//Answer to the question number:11;
function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5

//Answer to the question number:12;
function mergeArays(arr1. arr2){
    return [...arr, ...arr2];
}
console.log(mergeArays([1, 2, 3], [4, 5, 6]));
console.log(mergeArays(["a", "b"], ["c", "d"]));

//Answer to the question number: 13;
function getLastElement(arr){
    return arr[arr.length -1];
}
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

//Answer to the question number:14;
function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
    
//Answer to the question number: 15;
function sumArray(arr){
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray ([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
console.log(sumArray([1, 5, 2.5, 3.5]));

    
