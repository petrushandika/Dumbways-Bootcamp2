class Employee {
  readonly firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }
}

let res = new Employee("Petrus", "Handika");
res.firstName = "Udin";
console.log(res);
