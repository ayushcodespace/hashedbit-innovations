function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '*':
      result = num1 * num2;
      break;

    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by Zero";
      }
      break;

    default:
      result = "Please enter a valid operator";
  }

  return result;
}
let res=calculate(4,5,'+');
console.log(res);