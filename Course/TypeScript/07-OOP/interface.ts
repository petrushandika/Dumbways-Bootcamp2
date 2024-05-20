interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Petrus", age: 22 },
  { name: "Udin", age: 30 },
  { name: "Isah", age: 20 },
];

console.log(people[0].name);
