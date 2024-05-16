//Q.42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


let magician_names: string[] = ["Harry Potter", "Professor Snape", "Albus Dumbledore", "Magical Messi", "Ronald Weasley"];
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician +" " + "The Great");
    }
}
show_magicians(magician_names);