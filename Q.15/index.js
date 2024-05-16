// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
var inv_to_dinner = ["Asher", "Ahmed", "Ali", "Zaid"];
var cant_attend = "Ali";
console.log("".concat(cant_attend, " can't make it to have dinner with us"));
var new_guest = "Amna";
inv_to_dinner[inv_to_dinner.indexOf(cant_attend)] = new_guest;
inv_to_dinner.map(function (item) {
    return console.log("Dear ".concat(item, " ,You are warmly invited for dinner!!"));
});
