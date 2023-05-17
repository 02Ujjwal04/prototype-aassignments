function getPerson(personObj) {
    try {
      if (typeof personObj !== 'object' || personObj === null || !('name' in personObj) || !('age' in personObj)) {
        throw new Error('Invalid parameter type');
      }
      
      const name = personObj.name;
      const age = personObj.age;
      
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  // Example usage:
  const person1 = { name: 'John Doe', age: 25 };
  console.log(getPerson(person1)); // Output: Name: John Doe, Age: 25
  
  const person2 = { name: 'Jane Smith', age: 30 };
  console.log(getPerson(person2)); // Output: Name: Jane Smith, Age: 30
  
  