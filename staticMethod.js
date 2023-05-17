class Calculator {
    static add(number1, number2) {
      return number1 + number2;
    }
  }
  
  // Call the add method without instantiating the Calculator class
  console.log(Calculator.add(5, 7)); // Output: 12
  