// for loop
for (let i = 0; i < 3; i++) {
  console.log("Block statement execution: " + i);
}

// for of loop
let arr = [10, 20, 30, 40];
for (let val of arr) {
  console.log(val);
}

let str = "Hello World";
for (let char of str) {
  console.log(char);
}

// for in loop
let arrays = [10, 20, 30, 40];
for (let index in arrays) {
  console.log(index);

  console.log(arrays[index]);
}