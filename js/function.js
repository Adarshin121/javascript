function greet(name) {
    console.log('Hello, ' + name + '!');
  }
greet('John'); // Output: Hello, John!



// Function with Return Value:
// Functions can also return a value using the return keyword. The calling code can then use this returned value.
function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 5);
  console.log(result); // Output: 8
  