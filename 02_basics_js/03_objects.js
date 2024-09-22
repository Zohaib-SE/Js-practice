// singleton //if we declare with literals then singleton can not create but when y constructor object makes then it is singleton

// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "zohaib",
    "full name": "Zohaib Ali",
    age: 21,
    [mySym]: "mykey1",
    location: "lahore",
    email: "zohaib231@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "zohaibliaqat@chatgpt.com"
// Object.freeze(JsUser) // use to freeze the object means not allow edit any key any other thing

JsUser.email = "zohaibliaqat@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user")
} // added a function into object

console.log(JsUser.greeting())

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

