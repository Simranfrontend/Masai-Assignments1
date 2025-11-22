function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sum(10, 20, 30)); 
console.log(sum(1, 2, 3, 4, 5)); 
