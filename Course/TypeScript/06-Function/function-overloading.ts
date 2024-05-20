// Function overloading signatures
function add(a: string, b: string): string;
function add(a: number, b: number): number;

function add(a: any, b: any): any {
  return a + b;
}

console.log(add("Hello", "Steve"));
console.log(add(10, 20));

// Function overloading
function display(a: string, b: string): void;
function display(a: number): void;

function display(a: string | number, b?: string): void {
  if (typeof a === "number") {
    console.log(a);
  } else if (typeof a === "string" && typeof b === "string") {
    console.log(a + b);
  }
}

display("Hello", "World");
display(42);
