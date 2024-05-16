//Q.41) Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


let magician_names: string[] = ["Harry Potter", "Professor Snape", "Albus Dumbledore", "Magical Messi", "Ronald Weasley"];
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magician_names);
