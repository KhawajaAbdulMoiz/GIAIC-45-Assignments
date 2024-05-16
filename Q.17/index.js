// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var inv_to_dinner = ["Asher", "Ahmed", "Ali", "Zaid"];
console.log(inv_to_dinner);
var cant_attend = "Ali";
console.log("".concat(cant_attend, " can't make it to have dinner with us"));
var new_guest = "Amna";
inv_to_dinner[inv_to_dinner.indexOf(cant_attend)] = new_guest;
console.log(inv_to_dinner);
inv_to_dinner.map(function (item) { return (console.log("Dear ".concat(item, ", I've found a bigger table for dinner"))); });
var first_guest = "Adeel";
inv_to_dinner.unshift(first_guest);
console.log(inv_to_dinner);
var middle_guest = "Anzar";
var m_index = inv_to_dinner.length / 2;
inv_to_dinner.splice(m_index, 0, middle_guest);
console.log(inv_to_dinner);
inv_to_dinner.push("Ammar");
console.log(inv_to_dinner);
inv_to_dinner.map(function (item) {
    return console.log("".concat(item, " You are warmly invited for dinner!!"));
});
console.log("I can invite only two people");
while (inv_to_dinner.length > 2) {
    var remove_guest = inv_to_dinner.pop();
    console.log("Sorry ".concat(remove_guest, " You are not invited. "));
}
inv_to_dinner.map(function (item) {
    return console.log("Dear ".concat(item, " you are stll invited to the dinner!!"));
});
inv_to_dinner.splice(2); // Remove the last two names
console.log(inv_to_dinner); // Should print an empty array
