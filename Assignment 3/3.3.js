let stringArr = Array.from('INDIA');
stringArr.splice(3, 0, 'O', 'N', 'E', 'S');
let replacedString = stringArr.join('');
console.log(replacedString);