// Primitive

// 7 tyoes : String, Number. Boolean, null, undefined, Symbol, BigInt

const Id = Symbol('123')
const anotherId = Symbol('123')

// console.log(Id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

// console.log(typeof null);


// https://262.ecma-international.org/5.1/#sec-11.4.3             //DOCUMENTATION




// *****************************************

// Stack (Primitive), Heap (Non-Primitive)

// Stack Memory example

let myInstaName = "qalbaymomin"

let anotherName = myInstaName
anotherName = "zohaibali"

console.log(myInstaName); // Expected Output: qalbaymomin 
console.log(anotherName); // Expected Output: zohaibali


// Heap Memory example

let userOne = {
    email : "abc@gmail.com",
    upay : "user123",
}

let userTwo = userOne

userTwo.email = "zohaibliaqat9@gmali.com"

console.log(userOne);
console.log(userTwo);
