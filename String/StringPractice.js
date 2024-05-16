// 1. how to find vowels from string in javascript ?

//  first method in this only check one character vowel or not.

// var string = "a";
// string = string.toLocaleLowerCase();
// if (
//   string == "a" ||
//   string == "e" ||
//   string == "i" ||
//   string == "o" ||
//   string == "u"
// ) {
//   console.log(`${string} is vowel`);
// } else {
//     console.log(`${string} is not vowel`);

// }

// second method to find number of vowels

// var string = "ayush saxena";
// const vowels = ['a','e','i','o','u']
// const countVowel = (str)=>{
//     var count = 0;
//     for(let letter of str.toLowerCase()){
//         if(vowels.includes(letter)){
//             count++;
//         }
//     }
//     return count
// }
// console.log(countVowel(string));

// 2. how to reverse a string in Javascript ?

// we can reverse an array using build in method but not the string

// var arr = ['m','y']
// console.log(arr.reverse());

// reverse a string

// const reverseString = (str) => {
//   var strToArray = str.split("");
//   var arrReverse = strToArray.reverse();
//   var strReverse = arrReverse.join("");
//   return strReverse;
// };
// console.log(reverseString("butter"));

// 3. how to find palindrome in javascript ?

// what is palindrome
// a word,number or sentance(such as "madam") or a number (such as 1881) that reads the same backward or forward

// var string = "Mom";
// string = string.toLocaleLowerCase();
// const palindromeFind = (str) => {
//   var reverseStr = str.split("").reverse().join("");
//   if (reverseStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(palindromeFind(string));

// 4. how to swap two variables without using the third Javascript ?

//  we can do first using the first variable

// let a=7;
// let b=8;
// let temp = a;

// a=b;
// b=temp;

// console.log(`value of a is ${a} and value of b is ${b}`);

// now we can do without using the thrid variable

// let a = 17;
// let b = 8;

// [a, b] = [b, a];
// console.log(`value of a is ${a} and value of b is ${b}`);
