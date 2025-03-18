let inputFood = document.getElementById("get-food-input");
let inputButton = document.getElementById("input-btn");
let response = document.getElementById("response");

//console.log(inputFood);
//console.log(inputButton);


inputButton.addEventListener('click',() =>{
    response.innerText=inputFood.value;
})