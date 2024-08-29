// Dates

let myDate = new Date() // TC39 says: Date is the long standing pain point in js

// console.log(myDate);
// Expected Output: 2024-08-21T00:55:51.582Z

// console.log(myDate.toString()); 
// Expected Output:Tue Aug 20 2024 17:55:51 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toISOString());
// Expected Output:2024-08-21T00:55:51.582Z

// console.log(myDate.toJSON()); 
// Expected Output: 2024-08-21T00:55:51.582Z

// console.log(myDate.toLocaleDateString());
// Expected Output:8/20/2024

// console.log(myDate.toLocaleString());
// Expected Output: 8/20/2024, 5:55:51 PM

// console.log(myDate.toTimeString());
// Expected Output: 17:55:51 GMT-0700 (Pacific Daylight Time)

// console.log(myDate.toUTCString());
// Expected Output: Wed, 21 Aug 2024 00:55:51 GMT

// console.log(myDate.getTimezoneOffset());
// Expected Output: 420

// let myCreateDate = new Date(2020, 5, 19)
// let myCreateDate = new Date(2020, 5, 19, 5, 4)
let myCreateDate = new Date("06-19-2020")

// console.log(myCreateDate.toLocaleString()); 
// Expected Output: 6/19/2020, 12:00:00 AM

// console.log(myCreateDate.toLocaleString());
// Expected Output: 6/19/2020, 5:04:00 AM

// console.log(myCreateDate.toDateString()) 
// Expected Output: Fri Jun 19 2020

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// console.log(`Date of the day ${newDate.getDay()} and the time is ${newDate.getTime()} `);

console.log(newDate.toLocaleString('default', {weekday: "long",

}))
