/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello world";
    }
};


const f = createHelloWorld();
console.log(f());