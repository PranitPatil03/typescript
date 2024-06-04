/* eslint-disable prefer-const */

// OBJECTS

let user = {
  userName: "pranit",
  age: 22,
  isAdmin: false,
};

// user.userName=12
// user.age="12"

console.log(user);

let userObj1: {
  userName: string;
  age: number;
  isAdmin: boolean;
};

userObj1 = {
  userName: "me",
  age: 12,
  isAdmin: false,
  // phone:121212
};

console.log(userObj1);

let userObj2: {
  userName: string;
  age: number;
  isAdmin: boolean;
  phone?: number;
};

userObj2 = {
  userName: "me",
  age: 12,
  isAdmin: false,
};

console.log(userObj2);