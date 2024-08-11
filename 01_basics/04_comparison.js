// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 != 2);
// console.log(2 == 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // generates false
// console.log(null == 0); // generates false
// console.log(null >= 0); // genetates true

/* The reason is that an equality check == and comparison <, >, <=, and >=
work differently.

Comparisons convert null to a number, treating it as 0.
That's why 3rd null >= is true and 1st null > 0 is false */


console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);


// === => strict check

console.log("2" === 2); // it generates false, the reason is that both value's data types are different

/*  ALL THESE KIND OF COMPARISONS AND CHECK ARE SHOULD BE AVOID. JUST WRITE CLEAR CODE */

