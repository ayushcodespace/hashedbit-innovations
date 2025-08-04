import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => setResult(Number(num1) + Number(num2));
  const handleSubtraction = () => setResult(Number(num1) - Number(num2));
  const handleMultiplication = () => setResult(Number(num1) * Number(num2));
  const handleDivision = () => {
    if (Number(num2) === 0) {
      setResult("Cannot divide by zero");
    } else {
      setResult(Number(num1) / Number(num2));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br /><br />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br /><br />
      <button onClick={handleAddition}>+</button>
      <button onClick={handleSubtraction}>-</button>
      <button onClick={handleMultiplication}>×</button>
      <button onClick={handleDivision}>÷</button>
      <br /><br />
      <div>
        <strong>Result: </strong>{result !== null ? result : "No calculation yet"}
      </div>
    </div>
  );
};

export default Calculator;