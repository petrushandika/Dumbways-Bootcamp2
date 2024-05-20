// Square brackets
let fruits: string[] = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Generic array
let AnotherFruits: Array<string> = ["Avocado", "Guava", "Lemon"];
console.log(AnotherFruits);

// Array declaration and initialization
let anyFruits: Array<string>;
anyFruits = ["Papaya", "Grape", "Melon"];
console.log(anyFruits);

// Multi type array
let result: (string | number)[] = ["Delima", 2, "Watermelon", 1, "Snake Fruit"];
let anyResult: Array<string | number> = [
  "Delima",
  2,
  "Watermelon",
  1,
  "Snake Fruit",
];
console.log(result);
console.log(anyResult);

// Accessing array elements
let accessFruit: string[] = ["Banana", "Orange", "Guava"];
console.log(accessFruit[0]);
console.log(accessFruit[1]);
console.log(accessFruit[2]);
console.log(accessFruit[3]);

// Accessing array elements with loop
let arrayFruits: string[] = ["Grape", "Snake Fruit", "Watermelon"];

for (let index in arrayFruits) {
  console.log(arrayFruits[index]);
}

for (let i = 0; i < arrayFruits.length; i++) {
  console.log(arrayFruits[i]);
}

// Array method
let fullName: Array<string> = ["Jamal", "Udin", "Aiden"];
// sort()
fullName.sort();
console.log(fullName);

// pop()
console.log(fullName.pop());

// push()
fullName.push("Kannedy");
console.log(fullName);

// concat()
fullName = fullName.concat("Figo", "Alvaro");
console.log(fullName);

console.log(fullName.indexOf("Figo"));
