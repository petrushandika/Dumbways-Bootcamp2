// Interface
interface IEmployee {
  empCode: number;
  empName: string;
  getSalary: (hoursWorked: number) => number;
  getManagerName: (departmentId: number) => string;
}

// Interface as type
interface KeyPair {
  key: number;
  value: string;
}
let keyOne: KeyPair = { key: 1, value: "Steve" };
console.log(keyOne);

// Interface: Function type
interface KeyValueProcessor {
  (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
  console.log("addKeyValue: key = " + key + ", value = " + value);
}

function updateKeyValue(key: number, value: string): void {
  console.log("updateKeyValue: key = " + key + ", value = " + value);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, "Bill");

kvp = updateKeyValue;
kvp(2, "Steve");

// Interface for array type
interface NumList {
  [index: number]: number;
}

let numArr: NumList = [1, 2, 3];
numArr[0];
numArr[1];

interface IStringList {
  [index: string]: string;
}

let strArr: IStringList = {};
strArr["TS"] = "TypeScript";
strArr["JS"] = "JavaScript";

// Optional property
interface IEmployee {
  empCode: number;
  empName: string;
  empDept?: string;
}

let empObjOne: IEmployee = {
  empCode: 1,
  empName: "John",
};

let empObjTwo: IEmployee = {
  empCode: 2,
  empName: "Bill",
  empDept: "IT",
};

console.log(empObjOne);
console.log(empObjTwo);

// Read only properties
interface Citizen {
  name: string;
  readonly SSN: number;
}

let personObj: Citizen = { SSN: 110555444, name: "James Bond" };

personObj.name = "Steve Smith";
personObj.SSN = "333666888";

// Extending interfaces
interface IPerson {
  name: string;
  gender: string;
}

interface IEmployee extends IPerson {
  empCode: number;
}

let empObj: IEmployee = {
  empCode: 1,
  name: "Bill",
  gender: "Male",
};

console.log(empObj);

// Interface implementation
interface IEmployee {
  empCode: number;
  name: string;
  getSalary: (empCode: number) => number;
}

class Employee implements IEmployee {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(empCode: number): number {
    return 20000;
  }
}

let emp = new Employee(1, "Steve");
