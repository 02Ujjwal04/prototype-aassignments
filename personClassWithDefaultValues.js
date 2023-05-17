class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
    
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class without providing any values
  const person1 = new Person();
  console.log(person1.getDetails()); // Output: Name: Unknown, Age: 0
  
  // Instantiate an instance of the Person class with provided values
  const person2 = new Person("John Doe", 25);
  console.log(person2.getDetails()); // Output: Name: John Doe, Age: 25
  