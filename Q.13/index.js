//Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myTransp = ["Honda motorcycle", "Audi", "Civic", "Cyber Truck"];
for (var i = 0; i <= 3; i++) {
    console.log("I would like to own a ".concat(myTransp[i]));
}
