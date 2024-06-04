/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */

// BASIC TYPES

let num1 = 12;
console.log(num1);

let num2: number = 34;
console.log(num2);

let greet: string = "hello";
console.log(greet);

let greetMessage = "hello";
console.log(greetMessage);

let isAdmin = false;
console.log(isAdmin);

// MULTIPLE TYPES (UNION TYPES)

let numberOrString: string | number = 12;
console.log(numberOrString);

numberOrString = "hello pranit";
console.log(numberOrString);

// ARRAYS

let names = ["pranit", "nikhil", "jay"];

names.push("2323");
// names.push(12)

let mix: (string | number)[] = ["pranit", "nikhil", "jay", 12, 21];

console.log(mix);

// ANY TYPES ( BE CAREFUL DONT USE `any`)

let testAny;
testAny = 12;
testAny = "Hello";
testAny = true;
testAny = [true];
testAny = {};

console.log(testAny);

let testAnyArray: any[];

testAnyArray = [1, "two", false, []];

console.log(testAnyArray);

