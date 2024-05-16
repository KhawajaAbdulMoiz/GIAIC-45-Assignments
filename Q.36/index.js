// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log("The T.Shirt is made of ".concat(size, " size ").concat(message));
}
make_shirt("medium", "and the size also printed on the T.shirt");
