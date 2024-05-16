// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let inv_to_dinner : string[] = ["Asher","Ahmed","Ali","Zaid"];
console.log(inv_to_dinner);


let cant_attend : string="Ali";
console.log(`${cant_attend} can't make it to have dinner with us`)

let new_guest : string = "Amna";
inv_to_dinner[inv_to_dinner.indexOf(cant_attend)]=new_guest;
console.log(inv_to_dinner);
inv_to_dinner.map((item)=>(
    console.log(`Dear ${item}, I've found a bigger table for dinner`)
))
let first_guest : string = "Adeel";
inv_to_dinner.unshift(first_guest);
console.log(inv_to_dinner);

let middle_guest : string = "Anzar";
let m_index=inv_to_dinner.length/2;
inv_to_dinner.splice(m_index,0,middle_guest);

console.log(inv_to_dinner);
inv_to_dinner.push("Ammar")
console.log(inv_to_dinner);

inv_to_dinner.map((item)=>
console.log(`${item} You are warmly invited for dinner!!`)
)






