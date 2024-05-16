// Q.21) They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface item{
    name : string
    cost : number
}
const speaker : item={
    name : "Audionic",
    cost : 3999
}
const keyboard : item={
    name : "Logitech Keyboard",
    cost : 7500
}
console.log(`Price of ${speaker.name} speaker is ${speaker.cost}Rs`);
console.log(`Price of ${keyboard.name} keyboard is ${keyboard.cost}Rs`);
