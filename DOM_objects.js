// object

const person = {
    name:'Saranya', //properties
    place:'coimbatore',//property
    greetuser(){
        return `Hello, My name is ${this.name}. I am coming from ${this.place}`;
    }
};

person.name = "Vaishnavi";
person.place = "Chennai"

const person1 = person.greetuser();

//console.log(person1);

//print to document

document.write(person1);// wriring directly in the webpage dynamically

// Feature used to create strings using backticks which provides easy way to include variables and expressions
document.body.innerHTML = `<h1> ${person1} </h1>`;  //interpolation, template literals



