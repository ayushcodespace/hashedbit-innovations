const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) {
  return arr.map(num => num * num);
}
console.log("Squared Numbers:", squareNumbers(numbers));