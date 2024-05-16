//Q.24) More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let box : string = "wood";
let age : number = 26;
let number : number[] = [1,2,3,4,5]

// • Tests for equality and inequality with strings

// Test 1 (For Equality)

console.log("Is box == 'wood' ? (I predict True) " );
console.log(box == `wood`);

// Test 2 (For Equality)

console.log("Is box === 'wood' ? (I predict False) " );
console.log(box === `wood`);


// Test 3 (For Inequality)

console.log("Is box != plastic ? (I predict True) " );
console.log(box != `plastic`);


// Test 4 (For Inequality)

console.log("Is box !== wood ? (I predict False) " );
console.log(box !== `wood`);



// • Tests using the lower case function

// Test 1 (For True)

console.log("Is box.toLowerCase() == `wood` (I predict True) " );
console.log(box.toLowerCase() == `wood`);

// Test 2 (For False)

console.log("Is box.toLowerCase() === `Wood` (I predict False) " );
console.log(box.toLowerCase() === `Wood`);

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.


// Test 1 (For Equality)

console.log(`Is age == 26? (I predict True)`);
console.log(age == 26);

// Test 2 (For Inequality)

console.log(`Is age != 26? (I predict False)`);
console.log(age != 26);

// Test 3 (For Less than)

console.log(`Is age < 27? (I predict True)`);
console.log(age < 27);

// Test 4 (For Greater than)

console.log(`Is age > 26? (I predict False)`);
console.log(age > 26);

// Test 5 (For Less than or Equal to)

console.log(`Is age <= 25? (I predict False)`);
console.log(age <= 25);

// Test 6 (For Greater than or Equal to)

console.log(`Is age >= 26? (I predict True)`);
console.log(age >= 26);

// • Tests using "and" and "or" operators

// Test 1 (Using AND Operator)

console.log(`Is age > 27 && age < 20 (I predict False)`);
console.log(age > 27 && age < 20);

// Test 2 (Using OR Operator)

console.log(`age > 27 || age < 20 (I predict True)`);
console.log(age < 27 || age > 20);


// • Test whether an item is in a array

// Testing

console.log(`Is 2 in array? (I predict True)`);
console.log(2 in number);

// • Test whether an item is not in a array

// Testing

console.log(`Is 8 in array? (I predict False)`);
console.log(8 in number);














