// // Loops can execute a block of code a number of times.

// // forloop
// // for (initialization; condition; update) {
// //     // code to be executed in each iteration
// // }
// // example
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// // while (condition) {
// //     // code to be executed as long as the condition is true
// // }
// // example
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }


// // do-while Loop
// // The loop will execute the code once and then continue looping until the specified condition becomes false.
// do {
//     // code to be executed at least once, then repeated as long as the condition is true
// } while (condition);

// // example
// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);



for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }
  