// How  DOM works. Parse all the html tag into object and emit an event called DOM


document.addEventListener('DOMContentLoaded',() => {
    const myApp = document.getElementById("app")
    const heading = myApp.children[0];
    const image = myApp.children[1];

    //myApp.innerHTML="<h1> Change title </h1>"
    heading.innerText = 'i have changed'
    console.log(`${image.offsetWidth} , ${image.offsetHeight}`)
})

window.addEventListener('load' , () => {
    const myApp = document.getElementById("app")
    const heading = myApp.children[0];
    const image = myApp.children[1];

    //myApp.innerHTML="<h1> Change title </h1>"
    heading.innerText = 'i have changed'
    console.log(`${image.offsetWidth} , ${image.offsetHeight}`)
})


window.addEventListener('unload',() => {

})


window.onbeforeunload