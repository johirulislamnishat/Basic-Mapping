const users = [
  { firstName: "John", lastName: "Doe", age: 26 },
  { firstName: "Rahim", lastName: "Iqbal", age: 26 },
  { firstName: "Shakib", lastName: "Al Hasan", age: 33 },
  { firstName: "Lionel", lastName: "Messi", age: 33 },
  { firstName: "Christiano", lastName: "Ronaldo", age: 37 },
];

// Create an array that contains full name of each person who are older than 30

const fullName = users.map((user) => {
  return user?.age > 30
    ? console.log("FullName:", user?.firstName + " " + user?.lastName)
    : false;
});

//result
// FullName: Shakib Al Hasan
// FullName: Lionel Messi
// FullName: Christiano Ronaldo

// create an array of object that contains
acc = {
  26: 2,
  33: 2,
  37: 1,
};

let arr = [];
let counter = {};
users.map((user) => {
  if (counter.hasOwnProperty(user.age)) {
    counter[user.age]++;
  } else {
    counter[user.age] = 1;
  }
});
arr.push(counter);

console.log("makeArrayOfObj ==>", arr);
// result
// makeArrayOfObj ==>[{26: 2},{33: 2},{37: 1}]
