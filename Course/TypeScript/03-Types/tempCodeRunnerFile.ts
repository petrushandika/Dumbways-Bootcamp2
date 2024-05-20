// Type assertion
let codes: any = 123;
let employeeCodes = <number>code;
console.log(typeof employeeCodes);

// Type assertion with object
interface Employee {
  name: string;
  code: number;
}

let employees = <Employee>{};
employee.names = "John";
employee.codes = 123;
console.log(employees);

// as keyword
let randomNum: any = 123;
let randomCode = code as number;
console.log(randomCode);
