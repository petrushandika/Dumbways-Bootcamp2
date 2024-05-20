// Type assertion
let code: any = 123;
let employeeCode = <number>code;
console.log(typeof employeeCode);

// Type assertion with object
interface Employee {
  name: string;
  code: number;
}

let employee = <Employee>{};
employee.name = "John";
employee.code = 123;
console.log(employee);

// as keyword
let randomNum: any = 123;
let randomCode = code as number;
console.log(randomCode);
