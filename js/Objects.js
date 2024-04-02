  //method 1
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    street: '123 Main St',
    city: 'Cityville',    
  };
  
console.log(person.firstName);  // Output: John


  //method 2
let person1 = new Object();
person1.firstName = 'John';
person1.lastName = 'Doe';
person1.age = 30;
person1.isStudent = false;
person1.city='Cityville';

console.log(person1.firstName);         // Output: John
console.log(person1['lastName']);       // Output: Doe
console.log(person1.city);               // Output: Cityville


//Nested Objects:
// Array of three people
let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];
  
  // Accessing properties
  console.log(people[0].name);                    // Output: Alice
  console.log(people[1].place.country);           // Output: Geekland
  console.log(people[2].age);                     // Output: 28
  
  // Modifying properties
  people[1].age = 31;
  people[2].place.city = 'DesignCity';
  
  // Adding a new property
  people[0].gender = 'Female';
  
  // Object iteration
  people.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}, Place: ${person.place.city}, Gender: ${person.gender || 'Not specified'}`);
  });
  
  // Output:
  // Name: Alice, Age: 25, Place: Wonderland, Gender: Female
  // Name: Bob, Age: 31, Place: TechCity, Gender: Not specified
  // Name: Charlie, Age: 28, Place: DesignCity, Gender: Not specified
  