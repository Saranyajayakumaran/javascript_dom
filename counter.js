
/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init; // Store the current value separately

    return {
        increment() {
            return ++current; // Pre-increment to return the updated value
        },
        decrement() {
            return --current; // Pre-decrement to return the updated value
        },
        reset() {
            current = init; // Reset `current` back to `init`
            return current;
        }
    };
};
const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4