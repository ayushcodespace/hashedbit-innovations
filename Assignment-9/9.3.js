function modifyArray(arr) {
  arr.push("D");
  arr.pop(); // Removes "NewElement"
  return arr;
}
console.log("Modified Array:", modifyArray(["A", "B", "C"]));