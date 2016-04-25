/*

2.	Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.

Example: 
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

Note! a and b are not ordered!

*/

function GetSum(num1, num2) {
    var sum = 0;
    var maxNum = Math.max(num1, num2);
    var minNum = Math.min(num1, num2);
    for (minNum; minNum <= maxNum; minNum++) {
        sum += minNum;
    }
    return sum;
}

console.log(GetSum(1, -2));