/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

// FUNCTIONS

let sayHello = () => {
  console.log("Hello ,welcome");
};

sayHello();

let funcString = (): string => {
  return "Pranit Patil";
};

funcString();

let funcNumber = (): number => {
  return 123;
};

funcNumber();

let multiple = (num: number) => {
  return num * 2;
};
let multiple2 = (num: number): number => {
  return num * 5;
};
let multiple3 = (num: number, str: string): string | number => {
  return num * 10 + str;
};

multiple(12);

multiple2(12);

multiple3(23, "hello");

let sum = (num1: number, num2: number, _another?: number) => {
  return num1 + num2;
};

sum(2, 3);