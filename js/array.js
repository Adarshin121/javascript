let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);

let firstFruit = fruits[0];  // 'apple'
let secondFruit = fruits[1]; // 'banana'
console.log(fruits[0]);


fruits[1] = 'grape'; // Changes 'banana' to 'grape'
console.log(fruits);   // ['apple', 'grape', 'orange']

// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  fruits.push('kiwi');   // Adds 'kiwi' to the end of the array
  fruits.pop();          // Removes the last element ('kiwi')
  fruits.unshift('grape'); // Adds 'grape' to the beginning of the array
  fruits.shift();        // Removes the first element ('grape')
  
  