// Union
let code: string | number;
const codeOne = (code = 123);
const codeTwo = (code = "ABC");
// const codeThree = code = false; --> Error

console.log(codeOne);
console.log(codeTwo);
// console.log(codeThree); --> Error

// Function parameter as union type
function displayType(code: string | number) {
  if (typeof code === "number") console.log("Code is number");
  else if (typeof code === "string") console.log("Code is string");
}

displayType(123);
displayType("ABC");
