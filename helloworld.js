/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World";
    };
};

/**
 * Usage:
 */
const f = createHelloWorld();
console.log(f()); // Output: "Hello World"
