/*

Write a function insertDash(num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

Test.assertEquals(insertDash(454793),'4547-9-3');
Test.assertEquals(insertDash(123456),'123456');
Test.assertEquals(insertDash(1003567),'1003-567');

*/

function insertDash(num) {
    var n = num.toString();
    var ans = '';
    for (var i = 0; i < n.length; i++) {
        if (parseInt(n[i]) % 2 !== 0 && parseInt(n[i + 1]) % 2 !== 0) //check i,i+1 for odd
        {
            if (i !== n.length - 1) { //if i is not last number
                ans = ans + n[i] + '-';
            } else { //if i is last number
                ans = ans + n[i];
            }
        } else {
            ans = ans + n[i];
        }
    }
    return ans;
}

console.log(insertDash(454793));
console.log(insertDash(123456));
console.log(insertDash(1003567));