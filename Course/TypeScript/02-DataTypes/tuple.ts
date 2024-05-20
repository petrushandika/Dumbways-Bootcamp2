// Tuple
let employee: [number, string] = [1, "Bapuk"];
let person: [number, string, boolean] = [1, "Steve", true];

let user: [number, string, boolean, number, string];
user = [1, "Steve", true, 2, "Admin"];
console.log(user);

// Tuple array
let anotherEmployee: [number, string][];
anotherEmployee = [
  [1, "Steve"],
  [2, "Rangga"],
  [3, "Jamal"],
];
console.log(anotherEmployee);

// Accessing tuple elements
let anyEmployee: [number, string] = [1, "Steve"];
console.log(anyEmployee[0]);
console.log(anyEmployee[1]);

// Add element into tuple
let addEmployee: [number, string] = [1, "Jamal"];
addEmployee.push(2, "Udin");
console.log(addEmployee);

// Array methods
let arrayEmployee: [number, string] = [1, "Mutiara"];
arrayEmployee[1] = arrayEmployee[1].concat(" Jobs");
console.log(arrayEmployee);
