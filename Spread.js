let numbers = [1, 2, 3];

console.log(numbers);
console.log(...numbers);

let threeSum = (a, b, c) => {
  return a + b + c;
}

console.log(threeSum(...numbers));
