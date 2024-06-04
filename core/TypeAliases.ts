/* eslint-disable @typescript-eslint/no-unused-vars */

// TYPE ALIASES

const func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

type UserType={
  userName:string,
  age:number,
  phone?:string
}

const betterFunc=(user:UserType)=>{
  console.log(user.userName)
}

// FUNCTION SIGNATURES

type myFunc1 = (a: number, b: string) => void;

const write1: myFunc1 = (num, str) => {
  console.log(num + " times " + str);
};

type myFunc2 = (a: number, b: string) => number;

const write2: myFunc2 = (num, str) => {
  console.log(num + " times " + str);
  return 12
};
