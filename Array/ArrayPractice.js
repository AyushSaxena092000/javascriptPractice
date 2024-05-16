// 1. // how to find a duplicate element in an give array program in javscript ?

// function findDuplicates(array) {
//   const uniqueElements = new Set();
//   const duplicates = new Set();
//   for (const element of array) {
//     if (uniqueElements.has(element)) {
//       // In JavaScript, the method used to check if a specific element exists in a Set is the has() method. The has() method returns a boolean value ( true or false ) depending on whether the element exists in the Set or not.
//       duplicates.add(element);
//     } else {
//       uniqueElements.add(element);
//     }
//   }
//   return Array.from(duplicates);
// }

// const array = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];
// const duplicates = findDuplicates(array);
// console.log("Duplicate elements", duplicates);

// Using Array methods same question we do in sort.

// function findDuplicates(array) {
//   return array.filter((element, index) => array.indexOf(element) !== index);
// }

// const array1 = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];
// const duplicates1 = findDuplicates(array1);
// console.log("Duplicate elements", duplicates1);

// 2. How To find max/min in a given array in javascript ?
// Using Math.max() and Math.min() functions.

// let numbers = [5, 2, 9, 3, 7];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);
// console.log("Maximum", max);
// console.log("Minimum", min);

// Using Array.reduce()

// let numbers = [5,2,9,3,7];
// let max = numbers.reduce((a,b)=>Math.max(a,b));
// let min = numbers.reduce((a,b)=> Math.min(a,b));
// console.log("Maximum", max);
// console.log("Minimum", min);

// Same question but without any javascript build in methods using condtional statemenet and loops.

// function findMinMax(array) {
//   if (array.length === 0) {
//     return { min: undefined, max: undefined };
//   }
//   let min = array[0];
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//     if (array[i] > max) {
//       max = array[i];
//     }
// }
// return { min, max };
// }

// let numbers = [5, 2, 9, 3, 7];
// let result = findMinMax(numbers);
// console.log("Minimum:", result.min);
// console.log("Maximum:", result.max);

// 3. How To find second Largest value in array Javascript  ?

// function findSecondLargest(array){
//     if(array.length < 2){
//         return "Array should have at least two elements";
//     }
//      // Sort the array in descending order

//      array.sort((a,b)=>b-a);
//     //  The second element will be the second largest
//     return array[1];
// }

// let numbers = [5,2,9,3,7];
// let secondLargest = findSecondLargest(numbers);
// console.log("Second Largest:",secondLargest);

// using javascript inbuild method we can do the same problem.

// function findSecondLargest(array){
//     if(array.length < 2){
//         return "Array should have at least two elements";
//     }
//     let largest = Math.max(...array);
//     let filteredArray = array.filter(num => num!==largest);
//     let secondLargest = Math.max(...filteredArray);
//     return secondLargest;
// }

// let numbers = [5, 2, 9, 3, 7];
// let secondLargest = findSecondLargest(numbers);
// console.log("Second Largest:", secondLargest);

// 4. How to Find missing elements in a given Array 1 to 10 in Javascript ?

// function findMissingElements(arr) {
//     let missingElements = [];
//     for (let i = 1; i <= 10; i++) {
//         if (!arr.includes(i)) {
//             missingElements.push(i);
//         }
//     }
//     return missingElements;
// }

// let arr = [2,3,5,7,8,9];
// console.log("Missing Elements:", findMissingElements(arr));

// 5. how to find even or odd numbers in array in javascript ?

// const numbers = [1,2,3,8,9,10,16]
// const even = numbers.filter((item)=>{
//     return item % 2===0
// })

// const odd = numbers.filter((item)=>{
//     return item % 2==!0
// })

// console.log('even numbers',even);
// console.log('odd number',odd);

// same program do in another way using if and else

// const numbers = [1,2,3,8,9,10,14];

// const even = [];
// const odd = [];

// for(let num of numbers){
//     if(num%2===0){
//         even.push(num);
//     }
//     else{
//         odd.push(num);
//     }
// }

// console.log('Even numbers:', even);
// console.log('Odd numbers:', odd);

// 6. How to find the sum of all elements in array in Javascript ?

// function findSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum;
// }

// const numbers = [1, 2, 3, 4, 5];
// const total = findSum(numbers);
// console.log("The sum of all elements is:" + total);

// how to find factorial of a given number in Javascript ?

// The factorial of a number is the product of all number from 1 to that number.The

// for Example: Facrorial of 5 is equal to 5!=1*2*3*4*5=120

// factorail of negative number is not possible.

// using recursion

// function factorialRecursive(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorialRecursive(n - 1);
//   }
// }

// const num = 5;
// const result = factorialRecursive(num);
// console.log(`factorail of ${num} is ${result}`);

// function factorialLoop(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }

// const num = 5;
// const result = factorialLoop(num);
// console.log(`Factorial of ${num} is: ${result}`);


