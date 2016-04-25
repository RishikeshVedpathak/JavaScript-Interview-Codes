/*

Any word or phrase that exactly reproduces the letters in another order is an anagram." Add numbers to this definition to be more interest.
Example:
William Shakespeare = I am a weakish speller
silent = listen
“12345” = “54321”

*/

function isAnagram(str1, str2) {
    str1 = str1.replace(/ /g, '').toLowerCase().split("").sort().join("");
    str2 = str2.replace(/ /g, '').toLowerCase().split("").sort().join("");

    if (str1 === str2)
        return true;
    else
        return false;
}

console.log(isAnagram('William Shakespeare', 'I am a weakish speller'));