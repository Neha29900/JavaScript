/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 * 
 */

var filter = function(arr, fn){
    let filteredArr = [];
    for (let i= 0; i < arr.length; i++){
        if (fn(arr[i], i)){
            filteredArr.push(arr[i]);
        }
    } 
    return filteredArr;   
};

const arr = [1,2,3,4,5];
const fn = (x) => x % 2 === 0;

console.log(filter(arr, fn));