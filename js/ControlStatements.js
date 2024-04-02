// break Statement
// The break statement is used to exit or “break” out of a loop when a certain condition

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}


// continue Statement:
// The continue statement is used to skip the rest of the code inside a loop for the current iteration
//  and move to the next iteration.

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
