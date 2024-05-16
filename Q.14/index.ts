// If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const inv_to_dinner : string[] = ["Asher","Ahmed","Ali","Zaid"];

for(let i = 0; i < inv_to_dinner.length ; i++){

    console.log(`${inv_to_dinner[i]} you are invited to dinner today!!` )

}
export{inv_to_dinner}