let employeeName: string = "Petrus Handika";
let employeeDept: string = "Engineering";

// Pre-ES6
let employeeOne: string =
  employeeName + " works in the " + employeeDept + " department ";

// Post-ES6
let employeeTwo: string = `${employeeName} works in the ${employeeDept} department`;

console.log(employeeOne);
console.log(employeeTwo);

// String methods
// chartAt()
let str: string = "Hello TypeScript";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log("Hello World".charAt(2));

// concat()
let strOne: string = "Hello";
let strTwo: string = "Typescript";
console.log(strOne.concat(strTwo));
console.log(strOne.concat(" ", strTwo));
console.log(strOne.concat(" Mr.", "Bond"));

// indexOf()
let strThree: string = "TypeScript";
console.log(strThree.indexOf("T"));
console.log(strThree.indexOf("p"));
console.log(strThree.indexOf("e"));
console.log(strThree.indexOf("T", 1));
console.log(strThree.indexOf("t", 1));

// replace()
let strFour: string = "Hello JavaScript";
let strFive: string = "TypeScript";

console.log(strFour.replace("Java", "Type"));
console.log(strFour.replace("JavaScript", strFive));
console.log(strFour.replace("Hello", "Hi"));

// split()
let strSix: string = "Apple, Banana, Orange";
let strSeven: string = ",";

console.log(strSix.split(strSeven));
console.log(strSix.split(","));
console.log(strSix.split(",", 2));
console.log(strSix.split(",", 1));

// toUpperCase();
let strEight: string = "Hello TypeScript";
console.log(str.toUpperCase());
console.log("HELLO TYPESCRIPT".toLowerCase());
