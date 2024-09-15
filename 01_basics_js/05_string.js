const name = "zohaib"
const repoCount = 5

console.log(name + repoCount + "Value"); // It's out dated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Zubi-dada-dev')

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// const newStringOne = '   zohaib    ali '
// const newStringTwo = '   zohaib      '

// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://www.zohaib.com/zohaib%20mirza"

//  console.log(url);
//  console.log(url.replace('%20' , '-'));
  
// console.log(url.includes('zohaib'));
// console.log(url.includes('rahul'));

// console.log(gameName.split(""));

const str1 = "Saturday night plans"

// console.log(str1.startsWith('Saturday'));// It generates true
// console.log(str1.startsWith('night'));// It generates false

const str2 = "The quick brown fox jump over the lazy dog."

let index = 5

//  console.log(`At index of ${index} returns the character ${str2.at(index)}`);
 // Expected Output: "At index of 5 returns the character u"
 
index = -4

// console.log(`At index of ${index} returns the character ${str2.at(index)}`);
 // Expected Output: "At index of -4 returns the character d"

const str3 = "The quick brown fox jump over the lazy dog."

let index1 = 4

// console.log(`At index of ${index1} returns the character ${str3.charAt(index1)}`);
// Expected Output: At index of 4 returns the character q
// console.log(`At the index of 5 returns character ${str3.charAt(-4)}`);
// Expected Output: "It generates empty string"

// NOTE: In charAt() we can't use negative integer if it is used then output is empty strings


const str4 = "The quick brown fox jump over the lazy dog."

let index2 = 4

// console.log(`Character code ${str4.charCodeAt(index2)} is equal to ${str4.charAt(index2)}`);
// Expected Output: Character code 113 is equal to q


const str5 = 'Hello';
const str6 = 'World';

// console.log(str5.concat(' ', str6));
// Expected output: "Hello World"

// console.log(str5.concat(', ', str6));
// Expected output: "World, Hello"

const str7 = 'Cats are the best!';

// console.log(str7.endsWith('best!'));
// Expected output: true

// console.log(str7.endsWith('best', 17));
// Expected output: true

const str8 = 'Is this a question?';

// console.log(str8.endsWith('question'));
// Expected output: false

// console.log(str8.endsWith('question?'));
// Expected output: true

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

// console.log( `The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);
// Expected output: "The word "fox" is in the sentence"


const str9 = "The quick red fox jumped over the lazy dog's back.";

const iterator = str9[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
}
  // Expected output: "T"
  //                  "h"
  //                  "e"