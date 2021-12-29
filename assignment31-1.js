let firstString;
let secondString;
function isAnagram(strFirstString, strSecondString) {
    if (firstString.langth == secondString.langth)
        strFirstString = firstString.toLowerCase().split("").sort().join("");
    strSecondString = secondString.toLowerCase().split("").sort().join("");
    return Boolean(strFirstString === strSecondString);
}
firstString = prompt("Enter the first string:");
console.log("Enter the first string:", firstString);
secondString = prompt("Enter the second string:");
console.log("Enter the second string:", secondString);
let result = isAnagram(firstString, secondString);
if (result == true) {
    console.log("\"", firstString, "\" and \"", secondString, "\" are anagrams");
} else console.log("\"", firstString, "\" and \"", secondString, "\" not anagrams");