/*

FizzBuzz problem
If number divides evenly with 3 - returns string "fizz"
If number divides evenly with 5 - returns string "buzz"
If number divides evenly with 3 and 5 - returns string "fizz buzz"

Example:
fizzbuzz(1)==1
fizzbuzz(9)=="fizz"
fizzbuzz(25)=="buzz"
fizzbuzz(37)==37
fizzbuzz(45)=="fizz buzz"


*/

function fizzbuzz(num) {
    var msg = "";
    if (!(num % 3)) msg += "Fizz";
    if (!(num % 5)) msg += "Buzz";
    console.log(msg || num);
}

fizzbuzz(45);