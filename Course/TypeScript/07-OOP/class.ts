// Class
class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  getSalary(): number {
    return 10000;
  }
}

let empOne = new Employee(1, "John");
console.log(`Employee Code: ${empOne.empCode}`);
console.log(`Employee Name: ${empOne.empName}`);
console.log(`Salary: ${empOne.getSalary()}`);

// Interface
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  empCode: number;

  constructor(empCode: number, name: string) {
    super(name);
    this.empCode = empCode;
  }

  displayName(): void {
    console.log(`Name = ${this.name}, Employee Code = ${this.empCode} `);
  }
}

let emp = new Employee(100, "Bill");
emp.displayName();

// Class implements interface
