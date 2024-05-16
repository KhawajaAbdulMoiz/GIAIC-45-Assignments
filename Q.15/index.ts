// You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let inv_to_dinner : string[] = ["Asher","Ahmed","Ali","Zaid"];

let cant_attend : string="Ali";
console.log(`${cant_attend} can't make it to have dinner with us`)

let new_guest : string = "Amna";
inv_to_dinner[inv_to_dinner.indexOf(cant_attend)]=new_guest;


inv_to_dinner.map((item)=>
console.log(`Dear ${item} ,You are warmly invited for dinner!!`)

)
