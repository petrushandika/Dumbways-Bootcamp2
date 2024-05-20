// Fat arrow function
let sum = (x: number, y: number): number => {
  return x + y;
};

sum(10, 20);

// Parameterless arrow function
let Print = () => console.log("Hello TypeScript");
Print();

// Arrow function in class
class Employee {
  empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  display = () => console.log(this.empCode + " " + this.empName);
}

let emp = new Employee(1, "Ram");
emp.display();
