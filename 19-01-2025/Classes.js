class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {

      console.log(`Hello, my name is ${this.name},Age ${this.age}`);
    }
  }
  
  const person1 = new Person('John', 25);
  person1.greet(); 
  