/**
 * @param {integer} init
 * @return {object}{inc, dec, reset}
 */

var createCounter = function(init){
    let current = init;

    return{
        increment: function(){
            return ++current;
        },
        decrement: function(){
            return --current;
        },
        reset: function() {
            current= init;
            return current;
        }
    };
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
