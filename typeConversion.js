function convertToNumber(str) {
    try {
      const num = Number(str);
      if (isNaN(num)) {
        throw new Error("Invalid number");
      }
      return num;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Example usage:
  console.log(convertToNumber("42")); // Output: 42
  console.log(convertToNumber("3.14")); // Output: 3.14
  console.log(convertToNumber("Hello")); // Output: Invalid number
  