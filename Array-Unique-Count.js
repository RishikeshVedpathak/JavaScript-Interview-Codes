/*

Write a function that takes an array and counts the number of each unique element present.
Example:
count(['james', 'james', 'john']) 
output => { 'james': 2, 'john': 1}

*/

function uniqueCount(myArray) {
    var count = {};
    myArray.forEach(function (i) {
        count[i] = (count[i] || 0) + 1;
    });
    return count;
}

myArray = ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
console.log(uniqueCount(myArray));