const person = {
    name:'Saranya', //properties
    place:'coimbatore',//property
    greetuser(){
        return `Hello, My name is ${this.name}. I am coming from ${this.place}`;
    }
};

console.log(window); // provides methods using in window

//Dynamically get name and place from user

const userName = prompt("What is your name","Saranya");
const place = prompt("Where are you coming from");

person.name = userName;
person.place = place;

console.log(person.name,person.place)

document.body.innerHTML = person.greetuser();